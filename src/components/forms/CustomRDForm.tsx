"use client";

import { useState, useEffect } from "react";

interface CustomRDFormProps {
    formId?: string;
}

// Função para gerar números aleatórios para o captcha
function generateCaptcha() {
    const num1 = Math.floor(Math.random() * 10) + 1; // 1-10
    const num2 = Math.floor(Math.random() * 10) + 1; // 1-10
    return { num1, num2, answer: num1 + num2 };
}

export function CustomRDForm({ formId = "lp-diagnostico-gratuito-eag-0ed1a17e058ba32652b4" }: CustomRDFormProps) {
    // Inicializa com valores fixos para evitar hydration mismatch
    const [captchaData, setCaptchaData] = useState({ num1: 0, num2: 0, answer: 0 });
    const [isClient, setIsClient] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        instagram: "",
        revenue: "",
        captcha: "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    // Gera captcha APENAS no cliente após montagem
    useEffect(() => {
        setIsClient(true);
        setCaptchaData(generateCaptcha());
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        // Validação dinâmica do captcha
        if (parseInt(formData.captcha) !== captchaData.answer) {
            setError(`Resposta do captcha incorreta. ${captchaData.num1} + ${captchaData.num2} = ?`);
            setLoading(false);
            return;
        }

        try {
            // Envia para nossa API route que se comunica com o RD Station
            const response = await fetch("/api/rd-conversion", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    mobile_phone: formData.phone,
                    cf_instagram_profissional: formData.instagram,
                    cf_faturamento_mensal: formData.revenue,
                }),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                setSuccess(true);
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    instagram: "",
                    revenue: "",
                    captcha: "",
                });
                // Gera novo captcha após sucesso
                setCaptchaData(generateCaptcha());
                
                // Redireciona para página de agradecimento após 2 segundos
                setTimeout(() => {
                    window.location.href = "/obrigado-sessao";
                }, 2000);
            } else {
                throw new Error(result.error || "Erro ao enviar formulário");
            }
        } catch (err) {
            setError("Erro ao enviar formulário. Tente novamente.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    if (success) {
        return (
            <div className="text-center py-8">
                <div className="mb-4 text-4xl">✅</div>
                <h3 className="text-xl font-bold text-gold mb-2">Formulário enviado com sucesso!</h3>
                <p className="text-neutral-400">
                    Nosso time entrará em contato via WhatsApp em até 24h úteis.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {/* Nome */}
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                    Nome*
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-transparent border-2 border-gold/25 rounded-xl text-white placeholder-neutral-500 focus:border-gold focus:outline-none transition-colors"
                    placeholder="Seu nome completo"
                />
            </div>

            {/* Email */}
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                    Email*
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-transparent border-2 border-gold/25 rounded-xl text-white placeholder-neutral-500 focus:border-gold focus:outline-none transition-colors"
                    placeholder="seu@email.com"
                />
            </div>

            {/* Telefone */}
            <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-300 mb-2">
                    Telefone*
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-transparent border-2 border-gold/25 rounded-xl text-white placeholder-neutral-500 focus:border-gold focus:outline-none transition-colors"
                    placeholder="+55 (11) 99999-9999"
                />
            </div>

            {/* Instagram */}
            <div>
                <label htmlFor="instagram" className="block text-sm font-medium text-neutral-300 mb-2">
                    Qual o seu Instagram profissional? (ex: @codirectbr)*
                </label>
                <input
                    type="text"
                    id="instagram"
                    name="instagram"
                    value={formData.instagram}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-transparent border-2 border-gold/25 rounded-xl text-white placeholder-neutral-500 focus:border-gold focus:outline-none transition-colors"
                    placeholder="@seu_instagram"
                />
            </div>

            {/* Faturamento */}
            <div>
                <label htmlFor="revenue" className="block text-sm font-medium text-neutral-300 mb-2">
                    Qual o faturamento mensal do seu negócio?*
                </label>
                <select
                    id="revenue"
                    name="revenue"
                    value={formData.revenue}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#1a1a1a] border-2 border-gold/25 rounded-xl text-white focus:border-gold focus:outline-none transition-colors cursor-pointer [&>option]:bg-[#1a1a1a] [&>option]:text-white"
                >
                    <option value="" className="bg-[#1a1a1a] text-neutral-400">Selecione</option>
                    <option value="ate-30mil" className="bg-[#1a1a1a] text-white">Até 30 mil (obs: apenas negócios que faturam 30 mil ou mais são indicados para contratar a Assessoria da Codirect)</option>
                    <option value="30mil-50mil" className="bg-[#1a1a1a] text-white">30 mil a 50 mil</option>
                    <option value="50mil-100mil" className="bg-[#1a1a1a] text-white">50 mil a 100 mil</option>
                    <option value="100mil-250mil" className="bg-[#1a1a1a] text-white">100 mil a 250 mil</option>
                    <option value="250mil-500mil" className="bg-[#1a1a1a] text-white">250 mil a 500 mil</option>
                </select>
            </div>

            {/* Captcha Dinâmico */}
            <div>
                <label htmlFor="captcha" className="block text-sm font-medium text-neutral-300 mb-2">
                    {isClient ? `Quanto é ${captchaData.num1} + ${captchaData.num2}?*` : "Carregando..."}
                </label>
                <input
                    type="text"
                    id="captcha"
                    name="captcha"
                    value={formData.captcha}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-transparent border-2 border-gold/25 rounded-xl text-white placeholder-neutral-500 focus:border-gold focus:outline-none transition-colors"
                    placeholder="Sua resposta"
                />
            </div>

            {/* Error Message */}
            {error && (
                <div className="p-3 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-sm">
                    {error}
                </div>
            )}

            {/* Submit Button */}
            <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-gold hover:bg-gold/90 text-black font-bold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider"
            >
                {loading ? "Enviando..." : "Desbloquear meu diagnóstico gratuito"}
            </button>

            {/* Privacy Notice */}
            <div className="text-center space-y-3 pt-2">
                <p className="text-xs text-neutral-400 leading-relaxed">
                    Ao informar seus dados, você concorda com nossa{" "}
                    <a 
                        href="https://codirect.com.br/politica-de-privacidade/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gold hover:text-gold/80 underline transition-colors"
                    >
                        Política de Privacidade
                    </a>
                    {" "}e com os{" "}
                    <a 
                        href="https://codirect.com.br/termos-de-uso/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gold hover:text-gold/80 underline transition-colors"
                    >
                        Termos de Uso
                    </a>.
                </p>
                <p className="text-xs text-neutral-500 italic">
                    Não usaremos seus dados para enviar SPAM.
                </p>
            </div>
        </form>
    );
}
