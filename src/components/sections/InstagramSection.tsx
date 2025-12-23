import { InstagramContent } from "@/core/types";
import Image from "next/image";
import { ArrowRight, Instagram } from "lucide-react";
import FadeIn from "../animations/FadeIn";

interface InstagramSectionProps {
    content: InstagramContent;
}

export function InstagramSection({ content }: InstagramSectionProps) {
    return (
        <section className="py-24 px-4 bg-white dark:bg-black overflow-hidden">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <FadeIn className="space-y-8 order-2 md:order-1">
                    <div className="space-y-4">
                        <h2 className="text-6xl md:text-6xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
                            {content.title.split(' ').slice(0, 1).join(' ')}<br />
                            <span className="text-neutral-500">{content.title.split(' ').slice(1).join(' ')}</span>
                        </h2>
                        <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-md">
                            {content.subtitle}
                        </p>
                    </div>

                    <a
                        href="https://instagram.com"
                        target="_blank"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-lg border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:scale-105 active:scale-95 transition-all group"
                    >
                        <Instagram className="w-5 h-5" />
                        <span className="font-medium">{content.buttonText}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </FadeIn>

                {/* Image Content (Phone Mockup) */}
                <FadeIn delay={0.2} className="relative order-1 md:order-2 flex justify-center">
                    <div className="relative w-full max-w-sm aspect-[9/19]">
                        <Image
                            src={content.image}
                            alt="Instagram Feed"
                            fill
                            className="object-contain drop-shadow-2xl"
                        />
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
