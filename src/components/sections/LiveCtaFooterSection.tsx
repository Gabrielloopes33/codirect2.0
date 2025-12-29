"use client";

import { cn } from "@/lib/utils";
import FadeIn from "../animations/FadeIn";
import { motion } from "framer-motion";
import { useState } from "react";
import { Bell } from "lucide-react";

interface LiveCtaFooterSectionProps {
    className?: string;
}

export function LiveCtaFooterSection({ className }: LiveCtaFooterSectionProps) {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // TODO: Integrar com RDStation ou seu backend
        setTimeout(() => {
            setIsLoading(false);
            setEmail("");
        }, 1000);
    };

    return (
        <section className={cn("relative w-full py-20 px-4 bg-gradient-to-b from-codirect-black to-black overflow-hidden", className)}>
            <div className="absolute inset-0 opacity-30">
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-codirect-gold/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
                <FadeIn>
                    <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                        Pare de adivinhar o que fazer no seu marketing.
                    </h2>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <p className="text-lg text-neutral-300">
                        Junte-se a milhares de empresários que estão transformando seus negócios com estratégias comprovadas.
                    </p>
                </FadeIn>

                <FadeIn delay={0.3}>
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mt-8">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Seu melhor e-mail"
                            required
                            className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/20 backdrop-blur-sm text-white placeholder-white/50 focus:outline-none focus:border-codirect-gold focus:ring-2 focus:ring-codirect-gold/50 transition-all"
                        />
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            disabled={isLoading}
                            className="px-8 py-3 rounded-lg bg-codirect-gold text-black font-semibold hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2 min-w-max ring-2 ring-codirect-gold/0 hover:ring-codirect-gold/50 ring-offset-2 ring-offset-black"
                        >
                            <Bell className="w-4 h-4" />
                            {isLoading ? "Definindo..." : "Quero ser Avisado"}
                        </motion.button>
                    </form>
                </FadeIn>

                <FadeIn delay={0.4}>
                    <p className="text-sm text-neutral-400">
                        Você receberá um lembrete toda segunda-feira. Sem spam, sem enrolação.
                    </p>
                </FadeIn>
            </div>
        </section>
    );
}
