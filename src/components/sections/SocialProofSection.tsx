import { SocialProofContent } from "@/core/types";
import { Quote } from "lucide-react";
import FadeIn from "../animations/FadeIn";

interface SocialProofSectionProps {
    content: SocialProofContent;
}

export function SocialProofSection({ content }: SocialProofSectionProps) {
    return (
        <section className="py-24 px-4 bg-neutral-900 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />
            <div className="max-w-6xl mx-auto space-y-16">
                <div className="text-center">
                    <FadeIn>
                        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                            {content.title}
                        </h2>
                    </FadeIn>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {content.stats.map((stat, i) => (
                        <FadeIn key={i} delay={0.2 + (i * 0.1)} className="h-full">
                            <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors h-full">
                                <span className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</span>
                                <span className="text-neutral-400 font-medium">{stat.label}</span>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                {/* Testimonial */}
                <FadeIn delay={0.6}>
                    <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-neutral-800 to-black border border-white/10 text-center max-w-4xl mx-auto">
                        <Quote className="w-12 h-12 text-neutral-600 mx-auto mb-6 opacity-50" />
                        <p className="text-xl md:text-2xl font-serif italic text-neutral-300 mb-8 leading-relaxed">
                            "{content.testimonial.quote}"
                        </p>
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 rounded-full bg-neutral-700 mb-3 flex items-center justify-center text-xl font-bold">
                                {content.testimonial.author[0]}
                            </div>
                            <h4 className="font-bold text-white">{content.testimonial.author}</h4>
                            <span className="text-neutral-500 text-sm">{content.testimonial.role}</span>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
