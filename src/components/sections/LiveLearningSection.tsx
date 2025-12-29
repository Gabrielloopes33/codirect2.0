"use client";

import { cn } from "@/lib/utils";
import FadeIn from "../animations/FadeIn";
import { Target, Megaphone, Rocket } from "lucide-react";
import { motion } from "framer-motion";

interface LiveLearningCard {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const learningCards: LiveLearningCard[] = [
    {
        icon: <Target className="w-8 h-8 text-codirect-gold" />,
        title: "Atração de Clientes",
        description: "Como parar de panfletar e começar a atrair o Cliente Ideal."
    },
    {
        icon: <Megaphone className="w-8 h-8 text-codirect-gold" />,
        title: "Conteúdo Influente",
        description: "Estratégias para criar autoridade e conexão emocional, não apenas posts de venda."
    },
    {
        icon: <Rocket className="w-8 h-8 text-codirect-gold" />,
        title: "Escala & Tráfego",
        description: "O efeito Bola de Neve para crescer sua audiência todos os dias."
    }
];

interface LiveLearingSectionProps {
    className?: string;
}

export function LiveLearningSection({ className }: LiveLearingSectionProps) {
    return (
        <section className={cn("relative w-full py-20 px-4 bg-codirect-black overflow-hidden", className)}>
            <div className="max-w-6xl mx-auto space-y-12">
                <FadeIn>
                    <div className="text-center space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            O Que Você Vai Aprender
                        </h2>
                        <p className="text-lg text-neutral-300">
                            Os pilares do Método Codirect aplicados na prática
                        </p>
                    </div>
                </FadeIn>

                <div className="grid w-full auto-rows-[22rem] grid-cols-1 gap-4 md:auto-rows-[20rem] md:grid-cols-3">
                    {learningCards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * (index + 1) }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-codirect-gold/50 hover:bg-white/10 transition-all space-y-4 flex flex-col justify-start"
                        >
                            <div className="inline-flex p-3 rounded-lg bg-codirect-gold/10 border border-codirect-gold/20 w-fit">
                                {card.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white">
                                {card.title}
                            </h3>
                            <p className="text-neutral-300 leading-relaxed">
                                {card.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
