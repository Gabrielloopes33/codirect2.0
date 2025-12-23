import { AwardContent } from "@/core/types";
import Image from "next/image";
import FadeIn from "../animations/FadeIn";

interface AwardSectionProps {
    content: AwardContent;
}

export function AwardSection({ content }: AwardSectionProps) {
    return (
        <section className="bg-[#111] dark:bg-black text-white overflow-hidden">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2">
                {/* Image (Full Height) */}
                <FadeIn className="relative h-[600px] md:h-auto min-h-[600px]">
                    <Image
                        src={content.image}
                        alt="Founders Award"
                        fill
                        className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent md:hidden" />
                </FadeIn>

                {/* Content (Right Side) */}
                <FadeIn delay={0.2} className="flex flex-col justify-center p-12 md:p-24 space-y-8 bg-neutral-900/50 backdrop-blur-sm md:bg-transparent h-full">
                    <div className="space-y-2">
                        <span className="text-sm tracking-[0.2em] text-neutral-400 border-b border-neutral-700 pb-2 inline-block">
                            {content.label}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            {content.title}
                        </h2>
                    </div>
                    <p className="text-lg text-neutral-400 leading-relaxed max-w-md">
                        {content.description}
                    </p>

                    <div className="pt-8">
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold uppercase tracking-wide">Evandro Zuco</span>
                            <span className="text-2xl font-bold uppercase tracking-wide text-neutral-500">Luiz Gustav Schroeder</span>
                            <span className="text-sm text-neutral-400 mt-2">Sócios-Fundadores da Codirect</span>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
