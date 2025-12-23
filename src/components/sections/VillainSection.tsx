import { VillainContent } from "@/core/types";
import { XCircle, CheckCircle } from "lucide-react";

interface VillainSectionProps {
    content: VillainContent;
}

export function VillainSection({ content }: VillainSectionProps) {
    return (
        <section className="py-20 px-4 bg-neutral-900/20">
            <div className="max-w-5xl mx-auto space-y-12">
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        {content.title}
                    </h2>
                    <p className="text-lg text-neutral-400 leading-relaxed">
                        {content.mainText}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Old Marketing */}
                    <div className="p-8 rounded-2xl bg-red-950/20 border border-red-900/30 space-y-6">
                        <h3 className="text-xl font-bold text-red-400 flex items-center gap-2">
                            <XCircle className="w-6 h-6" /> O Velho Marketing
                        </h3>
                        <ul className="space-y-3">
                            {content.comparison.oldMarketing.map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-red-200/70">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CoDirect Way */}
                    <div className="p-8 rounded-2xl bg-emerald-950/20 border border-emerald-900/30 space-y-6 relative overflow-hidden">
                        <div className="absolute inset-0 bg-emerald-500/5 pointer-events-none" />
                        <h3 className="text-xl font-bold text-emerald-400 flex items-center gap-2">
                            <CheckCircle className="w-6 h-6" /> O Jeito CoDirect
                        </h3>
                        <ul className="space-y-3">
                            {content.comparison.codirectWay.map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-emerald-200/70">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
