import { HeroContent } from "@/core/types";
import { ArrowRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface HeroSectionProps {
    content: HeroContent;
    className?: string;
}

export function HeroSection({ content, className }: HeroSectionProps) {
    return (
        <section className={cn("relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden py-20 px-4", className)}>
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-bg.png"
                    alt="Background"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto">
                <div className="space-y-6">
                    <h1 className="text-7xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 drop-shadow-sm">
                        {content.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-200 max-w-2xl mx-auto leading-relaxed font-light">
                        {content.subtitle}
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <button className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-colors flex items-center gap-2 text-lg">
                        {content.ctaPrimary} <ArrowRight className="w-5 h-5" />
                    </button>
                    <button className="px-8 py-4 rounded-full border border-white/20 bg-black/40 backdrop-blur-sm hover:bg-black/60 transition-colors text-white flex items-center gap-2 text-lg">
                        <Play className="w-5 h-5" /> {content.ctaSecondary}
                    </button>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-neutral-300 pt-4">
                    {content.microCopy.map((item, index) => (
                        <span key={index} className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
