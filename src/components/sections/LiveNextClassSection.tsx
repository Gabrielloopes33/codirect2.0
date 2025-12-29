"use client";

import { cn } from "@/lib/utils";
import FadeIn from "../animations/FadeIn";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CalendarClock } from "lucide-react";

interface Countdown {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

interface LiveNextClassSectionProps {
    className?: string;
    nextClassTheme?: string;
}

export function LiveNextClassSection({ 
    className,
    nextClassTheme = "Como estruturar seu Comercial para converter os Leads do Instagram."
}: LiveNextClassSectionProps) {
    const [countdown, setCountdown] = useState<Countdown>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const calculateCountdown = () => {
            const now = new Date();
            const nextMonday = new Date(now);
            
            // Find next Monday
            const day = nextMonday.getDay();
            const daysUntilMonday = day === 1 ? 7 : (1 + 7 - day) % 7 || 7;
            nextMonday.setDate(nextMonday.getDate() + daysUntilMonday);
            
            // Set time to 20:00 (8 PM)
            nextMonday.setHours(20, 0, 0, 0);

            const diff = nextMonday.getTime() - now.getTime();
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            setCountdown({ days, hours, minutes, seconds });
        };

        calculateCountdown();
        const interval = setInterval(calculateCountdown, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className={cn("relative w-full py-20 px-4 bg-white overflow-hidden", className)}>
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Left Side - Info */}
                    <FadeIn>
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                                    A Próxima Aula
                                </h2>
                                <p className="text-neutral-600">
                                    Tema desta semana:
                                </p>
                            </div>

                            <p className="text-2xl font-semibold text-black leading-relaxed">
                                {nextClassTheme}
                            </p>

                            {/* Countdown */}
                            <div className="space-y-4">
                                <p className="text-sm font-semibold text-neutral-700 uppercase tracking-widest">
                                    Próxima aula em:
                                </p>
                                <div className="flex gap-4">
                                    {[
                                        { value: countdown.days, label: "Dias" },
                                        { value: countdown.hours, label: "Horas" },
                                        { value: countdown.minutes, label: "Min" },
                                        { value: countdown.seconds, label: "Seg" }
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            className="flex flex-col items-center"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            <div className="px-4 py-3 bg-codirect-gold/10 border-2 border-codirect-gold rounded-lg">
                                                <span className="text-2xl md:text-3xl font-bold text-black">
                                                    {String(item.value).padStart(2, '0')}
                                                </span>
                                            </div>
                                            <span className="text-xs font-semibold text-neutral-600 mt-2 uppercase">
                                                {item.label}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Right Side - Floating Card */}
                    <FadeIn delay={0.2}>
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-codirect-gold/20 to-codirect-gold/5 rounded-2xl blur-xl"></div>
                            <div className="relative p-8 bg-white border-2 border-codirect-gold rounded-2xl shadow-2xl space-y-6">
                                <div className="flex items-center gap-3">
                                    <CalendarClock className="w-6 h-6 text-codirect-gold" />
                                    <span className="font-semibold text-black">Próxima Segunda</span>
                                </div>

                                <div className="space-y-2">
                                    <p className="text-sm text-neutral-600">Horário:</p>
                                    <p className="text-3xl font-bold text-codirect-gold">20:00</p>
                                </div>

                                <div className="space-y-2">
                                    <p className="text-sm text-neutral-600">Plataforma:</p>
                                    <p className="font-semibold text-black">Live no Instagram e YouTube</p>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => window.open('https://codirect.com.br/aovivo', '_blank')}
                                    className="w-full px-6 py-3 bg-codirect-gold text-black font-semibold rounded-lg hover:bg-yellow-400 transition-colors ring-2 ring-codirect-gold/0 hover:ring-codirect-gold/50 ring-offset-2"
                                >
                                    Definir Lembrete
                                </motion.button>
                            </div>
                        </motion.div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
