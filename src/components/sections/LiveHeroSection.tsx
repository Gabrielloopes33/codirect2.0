"use client";

import { cn } from "@/lib/utils";
import FadeIn from "../animations/FadeIn";
import { motion } from "framer-motion";
import { useState } from "react";
import { Bell } from "lucide-react";
import Orb from "../Orb";

interface LiveHeroSectionProps {
    className?: string;
}

export function LiveHeroSection({ className }: LiveHeroSectionProps) {
    const [phone, setPhone] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        
        // TODO: Integrar com RDStation ou seu backend
        setTimeout(() => {
            setIsLoading(false);
            setPhone("");
        }, 1000);
    };

    return (
        <section className={cn("relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden py-20 px-4 bg-codirect-black", className)}>
            {/* Spotlight Effect Background */}
            <div className="absolute inset-0 z-0">
                <div style={{ width: '100%', height: '1300px', position: 'relative' }}>
                    <Orb
                        hoverIntensity={0.8}
                        rotateOnHover={true}
                        hue={80}
                        forceHoverState={false}
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-codirect-black/50 to-codirect-black" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center space-y-8 max-w-3xl mx-auto">
                {/* Badge */}
                <FadeIn delay={0.1}>
                    <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                        <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
                        <span className="text-sm font-medium text-white">Ao Vivo • Toda Segunda às 20h</span>
                    </motion.div>
                </FadeIn>

                {/* Headline */}
                <FadeIn delay={0.2}>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
                        A estratégia de bastidores que gera lucro e previsibilidade.
                    </h1>
                </FadeIn>

                {/* Subheadline */}
                <FadeIn delay={0.3}>
                    <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
                        Uma aula densa, sem enrolação, sobre como aplicar o Método Codirect no seu negócio local. De graça, toda segunda-feira.
                    </p>
                </FadeIn>

                {/* CTA Input Group */}
                <FadeIn delay={0.4}>
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mt-8">
                        <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Seu telefone"
                            required
                            className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/20 backdrop-blur-sm text-white placeholder-white/50 focus:outline-none focus:border-codirect-gold focus:ring-2 focus:ring-codirect-gold/50 transition-all"
                        />
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            disabled={isLoading}
                            className="px-6 py-3 rounded-lg bg-codirect-gold text-black font-semibold hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2 min-w-max ring-2 ring-codirect-gold/0 hover:ring-codirect-gold/50 ring-offset-2 ring-offset-codirect-black"
                        >
                            <Bell className="w-4 h-4" />
                            {isLoading ? "Definindo..." : "Definir Lembrete"}
                        </motion.button>
                    </form>
                </FadeIn>

                {/* Micro-copy */}
                <FadeIn delay={0.5}>
                    <p className="text-sm text-neutral-400">
                        Junte-se a <span className="text-white font-semibold">+50.000 empresários</span> que assistem semanalmente.
                    </p>
                </FadeIn>
            </div>
        </section>
    );
}
