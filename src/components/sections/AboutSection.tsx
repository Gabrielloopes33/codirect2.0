import { AboutContent } from "@/core/types";
import Image from "next/image";

interface AboutSectionProps {
    content: AboutContent;
}

export function AboutSection({ content }: AboutSectionProps) {
    return (
        <section className="py-24 px-4 bg-neutral-100 dark:bg-zinc-900 border-t border-neutral-900">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Image Side */}
                <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                        src={content.image}
                        alt="Quem é a Codirect"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Text Side */}
                <div className="space-y-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white">
                        {content.title}
                    </h2>
                    <div className="space-y-4 text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed">
                        {content.text.map((paragraph, i) => (
                            <p key={i}>{paragraph}</p>
                        ))}
                    </div>
                    {/* Highlight box */}
                    <div className="p-6 bg-white dark:bg-black rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm">
                        <p className="font-semibold text-neutral-800 dark:text-neutral-200">
                            A Codirect também foi <span className="text-black dark:text-white font-bold">premiada dois anos consecutivos pelo Great Place to Work</span>, unindo método, visão estratégica e cultura viva.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
