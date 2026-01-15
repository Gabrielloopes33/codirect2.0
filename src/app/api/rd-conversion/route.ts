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

        // Monta o payload para a API v1.3 do RD Station (formato antigo que funciona com token privado)
        const payload: any = {
            token_rdstation: rdToken,
            identificador: conversionIdentifier,
            email: email,
            nome: name,
        };

        // Adiciona campos opcionais
        if (mobile_phone) {
            payload.telefone = mobile_phone;
        }
        if (cf_instagram_profissional) {
            payload.cf_instagram_profissional = cf_instagram_profissional;
        }
        if (cf_faturamento_mensal) {
            payload.cf_faturamento_mensal = cf_faturamento_mensal;
        }

        console.log("Payload completo:", JSON.stringify(payload, null, 2));

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
            throw new Error(`RD Station API error: ${response.status} - ${responseText}`);
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
