"use client";

import FadeIn from "@/components/animations/FadeIn";
import { CheckCircle2, PhoneCall, MessageCircle, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SpotlightCard from "@/components/SpotlightCard";

export default function ObrigadoSessaoPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-transparent" />
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[120px]" />

                <div className="max-w-6xl mx-auto relative z-10">
                    <FadeIn>
                        <div className="text-center mb-12">
                            {/* Success Icon */}
                            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gold/10 border-2 border-gold mb-8 animate-pulse">
                                <CheckCircle2 className="w-12 h-12 text-gold" />
                            </div>

                            {/* Heading */}
                            <h1 className="text-4xl md:text-6xl font-bold mb-6">
                                Sua reunião de diagnóstico
                                <br />
                                <span className="text-gold">ainda não está garantida.</span>
                            </h1>

                            <p className="text-xl md:text-2xl text-neutral-400 mb-8 max-w-3xl mx-auto">
                                Em breve você receberá uma ligação telefônica de um especialista.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div className="max-w-2xl mx-auto space-y-8">
                            {/* WhatsApp CTA Card */}
                            <SpotlightCard className="p-8 bg-gradient-to-br from-neutral-900 to-neutral-950 border-2 border-gold/20 rounded-2xl">
                                <div className="text-center space-y-6">
                                    <p className="text-lg text-neutral-300">
                                        Se você realmente quer melhorar os resultados, aperte no botão abaixo e envie
                                        uma mensagem para o nosso WhatsApp.
                                    </p>

                                    <a
                                        href="https://api.whatsapp.com/send?phone=5548988530399&text=Ol%C3%A1,%20quero%20agendar%20a%20Reuni%C3%A3o%20com%20Especialista%20da%20Codirect"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ background: '#25D366', color: '#fff', fontWeight: 'bold', boxShadow: '0 4px 24px 0 #25D36633' }}
                                        className="inline-flex items-center gap-3 px-8 py-4 rounded-xl transition-all duration-300 text-lg group border-none focus:outline-none focus:ring-2 focus:ring-[#25D366]"
                                    >
                                        <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                        <span className="text-white">Enviar WhatsApp</span>
                                    </a>
                                </div>
                            </SpotlightCard>

                            {/* Podcast CTA */}
                            <div className="text-center">
                                <p className="text-neutral-400 mb-4">
                                    Assista um podcast enquanto aguarda o contato.
                                </p>
                                <div className="flex justify-center gap-4">
                                    <a
                                        href="https://www.youtube.com/@codirectbr"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 hover:bg-neutral-800 border border-gold/20 rounded-xl transition-all duration-300 group"
                                    >
                                        <Youtube className="w-5 h-5 text-gold group-hover:scale-110 transition-transform" />
                                        Ver Podcast
                                    </a>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Benefits Grid */}
                    <FadeIn delay={0.4}>
                        <div className="grid md:grid-cols-3 gap-6 mt-16">
                            <SpotlightCard className="p-6 bg-gradient-to-br from-neutral-900 to-neutral-950 border border-gold/10 rounded-xl">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                                        <PhoneCall className="w-6 h-6 text-gold" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-2">Ligação Confirmada</h3>
                                        <p className="text-sm text-neutral-400">
                                            Nossa equipe entrará em contato em até 24h úteis
                                        </p>
                                    </div>
                                </div>
                            </SpotlightCard>

                            <SpotlightCard className="p-6 bg-gradient-to-br from-neutral-900 to-neutral-950 border border-gold/10 rounded-xl">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                                        <CheckCircle2 className="w-6 h-6 text-gold" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-2">Dados Recebidos</h3>
                                        <p className="text-sm text-neutral-400">
                                            Suas informações foram enviadas com sucesso
                                        </p>
                                    </div>
                                </div>
                            </SpotlightCard>

                            <SpotlightCard className="p-6 bg-gradient-to-br from-neutral-900 to-neutral-950 border border-gold/10 rounded-xl">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                                        <MessageCircle className="w-6 h-6 text-gold" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-2">WhatsApp Ativo</h3>
                                        <p className="text-sm text-neutral-400">
                                            Agilize seu atendimento pelo WhatsApp
                                        </p>
                                    </div>
                                </div>
                            </SpotlightCard>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-6 border-t border-neutral-900">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <Link href="/" className="flex items-center gap-2">
                            <Image
                                src="/logo.png"
                                alt="Codirect"
                                width={120}
                                height={40}
                                className="h-8 w-auto"
                            />
                        </Link>
                        <p className="text-sm text-neutral-500">
                            © 2022 Codirect. Todos os Direitos Reservados.
                        </p>
                    </div>
                </div>
            </footer>
        </main>
    );
}
