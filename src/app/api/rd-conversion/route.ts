import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, mobile_phone, cf_instagram_profissional, cf_faturamento_mensal } = body;

        // Validação básica
        if (!name || !email) {
            return NextResponse.json(
                { error: "Nome e email são obrigatórios" },
                { status: 400 }
            );
        }

        // Validação de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: "Email inválido" },
                { status: 400 }
            );
        }

        // Validação e limpeza de telefone
        let cleanPhone = "";
        if (mobile_phone) {
            cleanPhone = mobile_phone.replace(/\D/g, ""); // Remove tudo que não é número

            // Valida se tem tamanho adequado (10-13 dígitos)
            if (cleanPhone.length < 10 || cleanPhone.length > 13) {
                return NextResponse.json(
                    { error: "Telefone inválido. Use o formato com DDD: (11) 99999-9999" },
                    { status: 400 }
                );
            }
        }

        const rdToken = process.env.RD_STATION_TOKEN;
        const conversionIdentifier = process.env.RD_CONVERSION_IDENTIFIER || "sessao-estrategica-codirect";

        if (!rdToken) {
            console.error("RD_STATION_TOKEN não configurado");
            return NextResponse.json(
                { error: "Configuração inválida" },
                { status: 500 }
            );
        }

        console.log("=== DEBUG RD STATION ===");
        console.log("Token (primeiros 10 chars):", rdToken.substring(0, 10));
        console.log("Conversion Identifier:", conversionIdentifier);
        console.log("Email:", email);
        console.log("Name:", name);
        console.log("Phone (cleaned):", cleanPhone);

        // Monta o payload para a API v1.3 do RD Station (formato antigo que funciona com token privado)
        const payload: any = {
            token_rdstation: rdToken,
            identificador: conversionIdentifier,
            email: email.trim().toLowerCase(),
            nome: name.trim(),
        };

        // Adiciona campos opcionais apenas se tiverem valor
        if (cleanPhone && cleanPhone.length >= 10) {
            payload.telefone = cleanPhone; // Envia apenas números
        }
        if (cf_instagram_profissional && cf_instagram_profissional.trim()) {
            payload.cf_instagram_profissional = cf_instagram_profissional.trim();
        }
        if (cf_faturamento_mensal && cf_faturamento_mensal.trim()) {
            payload.cf_faturamento_mensal = cf_faturamento_mensal.trim();
        }

        console.log("Payload completo:", JSON.stringify(payload, null, 2));
        console.log("Payload enviado ao RD Station:", JSON.stringify(payload));

        // Envia para API v1.2 do RD Station (funciona com token público)
        const apiUrl = "https://www.rdstation.com.br/api/1.2/conversions";
        console.log("Enviando para:", apiUrl);

        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        console.log("Response status:", response.status);
        const responseText = await response.text();
        console.log("Response body:", responseText);

        if (!response.ok) {
            console.error("=== ERRO RD STATION ===");
            console.error("Status:", response.status);
            console.error("Response:", responseText);
            return NextResponse.json({
                error: `Erro RD Station: ${response.status} - ${responseText}\nPayload: ${JSON.stringify(payload)}`
            }, { status: 500 });
        }

        // Tenta fazer parse do JSON se houver resposta
        let data = {};
        if (responseText) {
            try {
                data = JSON.parse(responseText);
            } catch (e) {
                console.log("Resposta não é JSON, mas sucesso!");
            }
        }

        return NextResponse.json({ success: true, data });

    } catch (error) {
        console.error("Erro ao processar conversão:", error);
        return NextResponse.json(
            { error: "Erro ao processar conversão" },
            { status: 500 }
        );
    }
}
