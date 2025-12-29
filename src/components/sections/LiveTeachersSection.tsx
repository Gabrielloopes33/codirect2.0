"use client";

import { cn } from "@/lib/utils";
import FadeIn from "../animations/FadeIn";
import Image from "next/image";

interface Teacher {
    name: string;
    role: string;
    image?: string;
    description: string;
}

const teachers: Teacher[] = [
    {
        name: "Evandro Mazuco",
        role: "Fundador & Estrategista",
        image: "/evandro.jpg",
        description: "Validou o Método Codirect em +1.400 negócios reais",
    },
    {
        name: "Luiz Gustavo",
        role: "Fundador & Estrategista",
        image: "/luiz-gustavo.jpg",
        description: "Especialista em Escala e Tráfego para negócios locais",
    }
];

interface LiveTeachersSectionProps {
    className?: string;
}

export function LiveTeachersSection({ className }: LiveTeachersSectionProps) {
    return (
        <section className={cn("relative w-full py-20 px-4 bg-codirect-black overflow-hidden", className)}>
            <div className="max-w-6xl mx-auto space-y-12">
                <FadeIn>
                    <div className="text-center space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            Quem Ensina
                        </h2>
                        <p className="text-lg text-neutral-300">
                            Empresários que provaram na prática
                        </p>
                    </div>
                </FadeIn>

                <div className="grid md:grid-cols-2 gap-8">
                    {teachers.map((teacher, index) => (
                        <FadeIn key={index} delay={0.1 * (index + 1)}>
                            <div className="space-y-6 p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-codirect-gold/50 transition-all hover:bg-white/10">
                                {/* Image */}
                                {teacher.image ? (
                                    <div className="w-full aspect-[3/4] relative rounded-xl border border-codirect-gold/20 overflow-hidden bg-black/50">
                                        <Image
                                            src={teacher.image}
                                            alt={teacher.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ) : (
                                    <div className="w-full h-80 bg-gradient-to-br from-codirect-gold/20 to-codirect-gold/5 rounded-xl border border-codirect-gold/20 flex items-center justify-center overflow-hidden">
                                        <div className="text-center space-y-2">
                                            <div className="w-32 h-32 rounded-full bg-codirect-gold/10 border-2 border-codirect-gold/30 mx-auto flex items-center justify-center">
                                                <span className="text-codirect-gold text-4xl font-bold">
                                                    {teacher.name.charAt(0)}
                                                </span>
                                            </div>
                                            <p className="text-white/50 text-sm">[Foto em P&B]</p>
                                        </div>
                                    </div>
                                )}

                                {/* Info */}
                                <div className="space-y-3">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">
                                            {teacher.name}
                                        </h3>
                                        <p className="text-codirect-gold font-semibold">
                                            {teacher.role}
                                        </p>
                                    </div>

                                    <p className="text-neutral-300 leading-relaxed">
                                        {teacher.description}
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                {/* Authority Statement */}
                <FadeIn delay={0.3}>
                    <div className="max-w-3xl mx-auto text-center p-8 rounded-xl bg-gradient-to-r from-codirect-gold/10 to-codirect-gold/5 border border-codirect-gold/20">
                        <p className="text-xl md:text-2xl text-white leading-relaxed">
                            Não somos teóricos de palco. Somos empresários que validaram este método em <span className="font-bold text-codirect-gold">+1.400 negócios reais</span>, de clínicas a escritórios.
                        </p>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
