"use client";

import { cn } from "@/lib/utils";
import FadeIn from "../animations/FadeIn";
import { motion } from "framer-motion";
import { useState, useCallback, useMemo } from "react";
import { Bell, X } from "lucide-react";
import dynamic from "next/dynamic";

// Lazy load Orb component to avoid SSR issues
const Orb = dynamic(() => import("../Orb"), {
    ssr: false,
    loading: () => <div className="w-full h-full" />,
});

interface LiveHeroSectionProps {
    className?: string;
}

export function LiveHeroSection({ className }: LiveHeroSectionProps) {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        instagram: ""
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleCloseModal = useCallback(() => setShowModal(false), []);
    const handleOpenModal = useCallback(() => setShowModal(true), []);

    const handleSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        
        // TODO: Integrar com RDStation ou seu backend
        // Simulando envio do formulário
        setTimeout(() => {
            setIsLoading(false);
            setShowModal(false);
            // Redirecionar para página de agradecimento
            window.location.href = "https://pg.codirect.com.br/obrigado-webinario/";
        }, 1000);
    }, []);

    const buttonVariants = useMemo(() => ({
        whileHover: { scale: 1.02 },
        whileTap: { scale: 0.98 }
    }), []);

    const modalVariants = useMemo(() => ({
        initial: { opacity: 0 },
        animate: { opacity: 1 }
    }), []);

    const modalContentVariants = useMemo(() => ({
        initial: { scale: 0.9, opacity: 0 },
        animate: { scale: 1, opacity: 1 }
    }), []);

    return (
        <section className={cn("relative min-h-screen flex flex-col items-center justify-start overflow-hidden px-4 pt-20 pb-12 bg-codirect-black", className)}>
            {/* Spotlight Effect Background */}
            <div className="absolute inset-0 z-0">
                <div style={{ width: '100%', height: '1300px', position: 'relative', contain: 'layout style paint' }}>
                    <Orb
                        hoverIntensity={0.6}
                        rotateOnHover={false}
                        hue={80}
                        forceHoverState={false}
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-codirect-black/50 to-codirect-black" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center space-y-6 md:space-y-8 max-w-4xl mx-auto px-4">
                {/* Badge */}
                <FadeIn delay={0.1}>
                    <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                        <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
                        <span className="text-sm font-medium text-white">Ao Vivo • Toda Segunda às 20h</span>
                    </motion.div>
                </FadeIn>

                {/* Headline */}
                <FadeIn delay={0.2}>
                    <h1 className="text-5xl sm:text-4xl md:text-4xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                        O Jogo Real do Crescimento:
                    </h1>
                    <h1 className="text-2xl sm:text-4xl md:text-4xl lg:text-6xl font-bold tracking-tight text-white leading-tight py-12">
                         <p>o método que transforma empresários amadores em profissionais </p>
                    </h1>
                </FadeIn>

                {/* CTA Button */}
                <FadeIn delay={0.4}>
                    <motion.button
                        onClick={handleOpenModal}
                        whileHover={buttonVariants.whileHover}
                        whileTap={buttonVariants.whileTap}
                        className="w-full sm:w-auto px-8 py-4 rounded-lg bg-codirect-gold text-black font-semibold hover:bg-yellow-400 transition-colors inline-flex items-center justify-center gap-2 text-base md:text-lg ring-2 ring-codirect-gold/0 hover:ring-codirect-gold/50 ring-offset-2 ring-offset-codirect-black"
                        style={{ willChange: 'transform' }}
                    >
                        <Bell className="w-5 h-5" />
                        Garantir Minha Vaga
                    </motion.button>
                </FadeIn>

                {/* Lista de benefícios */}
                <FadeIn delay={0.6}>
                    <div className="space-y-4 text-left max-w-3xl mx-auto">
                        <div className="flex items-start gap-3">
                            <span className="text-green-500 text-xl mt-1 flex-shrink-0">✅</span>
                            <p className="text-base md:text-lg text-neutral-300 leading-relaxed">
                                Estratégias práticas de posicionamento, marketing, vendas e liderança — aplicadas por quem vive o jogo real todos os dias
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-green-500 text-xl mt-1 flex-shrink-0">✅</span>
                            <p className="text-base md:text-lg text-neutral-300 leading-relaxed">
                                Sem promessas milagrosas — apenas o que já provou gerar crescimento sólido e previsível
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-green-500 text-xl mt-1 flex-shrink-0">✅</span>
                            <p className="text-base md:text-lg text-neutral-300 leading-relaxed">
                                Faça parte do movimento que vai formar 1000 Campeões do Crescimento
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <span className="text-blue-400 text-xl mt-1 flex-shrink-0">📅</span>
                            <p className="text-base md:text-lg text-white font-semibold leading-relaxed">
                                Próxima Segunda-feira, às 20h — ao vivo com Evandro Mazuco
                            </p>
                        </div>
                    </div>
                </FadeIn>
            </div>

            {/* Modal */}
            {showModal && (
                <motion.div 
                    initial={modalVariants.initial}
                    animate={modalVariants.animate}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    onClick={handleCloseModal}
                    style={{ willChange: 'opacity' }}
                >
                    <motion.div 
                        initial={modalContentVariants.initial}
                        animate={modalContentVariants.animate}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="relative w-full max-w-md bg-[#121212] rounded-2xl p-8 border border-white/10 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                        style={{ willChange: 'transform, opacity' }}
                    >
                        <button 
                            onClick={handleCloseModal}
                            className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors"
                            aria-label="Fechar modal"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="mb-6 text-center">
                            <h2 className="text-2xl font-bold text-white mb-2">
                                Garantir Vaga - Próxima Segunda
                            </h2>
                            <p className="text-neutral-400 text-sm">
                                Preencha os dados para receber o lembrete
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2 text-left">
                                <label className="text-sm font-medium text-white ml-1">Nome</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="Nome"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-codirect-gold focus:ring-2 focus:ring-codirect-gold/50 transition-all"
                                />
                            </div>
                            <div className="space-y-2 text-left">
                                <label className="text-sm font-medium text-white ml-1">E-mail</label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    placeholder="E-mail"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-codirect-gold focus:ring-2 focus:ring-codirect-gold/50 transition-all"
                                />
                            </div>
                            <div className="space-y-2 text-left">
                                <label className="text-sm font-medium text-white ml-1">Whatsapp</label>
                                <input
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    placeholder="Whatsapp"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-codirect-gold focus:ring-2 focus:ring-codirect-gold/50 transition-all"
                                />
                            </div>
                            <div className="space-y-2 text-left">
                                <label className="text-sm font-medium text-white ml-1">Qual seu @instagram profissional?</label>
                                <input
                                    type="text"
                                    value={formData.instagram}
                                    onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                                    placeholder="@evandromazuco"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-codirect-gold focus:ring-2 focus:ring-codirect-gold/50 transition-all"
                                />
                            </div>
                            
                            <motion.button
                                whileHover={buttonVariants.whileHover}
                                whileTap={buttonVariants.whileTap}
                                disabled={isLoading}
                                type="submit"
                                className="w-full px-6 py-4 rounded-lg bg-codirect-gold text-black font-semibold hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                style={{ willChange: 'transform' }}
                            >
                                <Bell className="w-5 h-5" />
                                {isLoading ? "Enviando..." : "Confirmar Presença"}
                            </motion.button>
                        </form>

                        <p className="mt-4 text-xs text-neutral-500 text-center">
                            Seus dados estão seguros. Protegidos pela LGPD.
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </section>
    );
}
