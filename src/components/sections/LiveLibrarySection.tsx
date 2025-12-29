"use client";

import { cn } from "@/lib/utils";
import FadeIn from "../animations/FadeIn";
import { Lock, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";

interface PastClass {
    title: string;
    week: number;
    date: string;
    youtubeUrl: string;
    videoId: string;
}

const pastClasses: PastClass[] = [
    {
        title: "Tendências de Marketing 2026: O que vai mudar (e como se preparar)",
        week: 1,
        date: "Semana 1",
        youtubeUrl: "https://www.youtube.com/watch?v=9D2mDjKsSIo",
        videoId: "9D2mDjKsSIo"
    },
    {
        title: "Planejamento Estratégico 2026 | LIVE Codirect",
        week: 2,
        date: "Semana 2",
        youtubeUrl: "https://www.youtube.com/watch?v=dwPsc4Fj0HI&t=2s",
        videoId: "dwPsc4Fj0HI"
    },
    {
        title: "O método Navy Seals: como as forças de elite lideram e vencem",
        week: 3,
        date: "Semana 3",
        youtubeUrl: "https://www.youtube.com/watch?v=6KxjkFcXdpM",
        videoId: "6KxjkFcXdpM"
    },
    {
        title: "A simples ação que o McDonald’s usou para aumentar as vendas de 15% a 40%",
        week: 4,
        date: "Semana 4",
        youtubeUrl: "https://www.youtube.com/watch?v=Kj1ODBx6yBs&pp=0gcJCU0KAYcqIYzv",
        videoId: "Kj1ODBx6yBs"
    },
];

interface LiveLibrarySectionProps {
    className?: string;
}

export function LiveLibrarySection({ className }: LiveLibrarySectionProps) {
    return (
        <section className={cn("relative w-full py-20 px-4 bg-codirect-black/50 overflow-hidden", className)}>
            <div className="max-w-6xl mx-auto space-y-12">
                <FadeIn>
                    <div className="text-center space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            Biblioteca de Aulas Anteriores
                        </h2>
                        <p className="text-lg text-neutral-300">
                            Confira o que você perdeu e inspire-se
                        </p>
                    </div>
                </FadeIn>

                {/* Warning Card */}
                <FadeIn delay={0.1}>
                    <motion.div 
                        className="max-w-2xl mx-auto p-6 rounded-xl bg-codirect-gold/10 border border-codirect-gold/30 text-center"
                        whileHover={{ scale: 1.02 }}
                    >
                        <p className="text-neutral-200">
                            <span className="font-semibold text-codirect-gold">⚡ As gravações não ficam salvas.</span> Quem está ao vivo aprende de graça. Quem perde, só acessa na <span className="font-semibold">Comunidade Exclusiva.</span>
                        </p>
                    </motion.div>
                </FadeIn>

                {/* Past Classes Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {pastClasses.map((classe, index) => (
                        <FadeIn key={index} delay={0.1 * (index + 1)}>
                            <motion.a
                                href={classe.youtubeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative group rounded-xl overflow-hidden cursor-pointer h-64 block"
                                whileHover={{ scale: 1.02 }}
                            >
                                {/* YouTube Thumbnail Background */}
                                <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url(https://img.youtube.com/vi/${classe.videoId}/hqdefault.jpg)`}}></div>

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all"></div>

                                {/* Content */}
                                <div className="relative z-10 h-full flex flex-col justify-between p-6">
                                    <div>
                                        <p className="text-sm font-semibold text-codirect-gold mb-2">
                                            {classe.date}
                                        </p>
                                        <h3 className="text-xl font-bold text-white leading-tight">
                                            {classe.title}
                                        </h3>
                                    </div>

                                    {/* Lock Icon & CTA */}
                                    <div className="flex items-center justify-between">
                                        <Lock className="w-6 h-6 text-white/50 group-hover:text-codirect-gold transition-colors" />
                                        <div className="flex items-center gap-2 text-white/70 group-hover:text-codirect-gold transition-colors">
                                            <PlayCircle className="w-5 h-5" />
                                            <span className="text-sm font-semibold">Acessar na Comunidade</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.a>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
