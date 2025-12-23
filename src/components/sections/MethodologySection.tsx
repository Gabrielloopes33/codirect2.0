import { MethodologyContent } from "@/core/types";
import { BentoGrid } from "@/components/bento/BentoGrid";
import { BentoCard } from "@/components/bento/BentoCard";
import { Target, Users, Megaphone, TrendingUp, EyeOff } from "lucide-react";

interface MethodologySectionProps {
    content: MethodologyContent;
}

export function MethodologySection({ content }: MethodologySectionProps) {
    const icons = [
        <Target key="1" className="h-4 w-4 text-neutral-500" />,
        <Users key="2" className="h-4 w-4 text-neutral-500" />,
        <Megaphone key="3" className="h-4 w-4 text-neutral-500" />,
        <TrendingUp key="4" className="h-4 w-4 text-neutral-500" />,
        <EyeOff key="5" className="h-4 w-4 text-neutral-500" />,
    ];

    const gradients = [
        "from-blue-900/20 to-neutral-900",
        "from-purple-900/20 to-neutral-900",
        "from-orange-900/20 to-neutral-900",
        "from-green-900/20 to-neutral-900",
        "from-zinc-100/10 to-neutral-900",
    ];

    return (
        <section className="py-24 px-4 bg-black">
            <div className="max-w-6xl mx-auto space-y-12">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                        {content.title}
                    </h2>
                </div>

                <BentoGrid className="md:auto-rows-[18rem]">
                    {content.steps.map((step, i) => (
                        <BentoCard
                            key={i}
                            title={step.title}
                            description={step.copy}
                            icon={icons[i]}
                            header={
                                <div
                                    className={`flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br ${gradients[i]} opacity-50`}
                                />
                            }
                            className={i === 3 || i === 0 ? "md:col-span-2" : "md:col-span-1"}
                        />
                    ))}
                </BentoGrid>

                <div className="flex justify-center pt-12 pb-8">
                    <button className="px-12 py-5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xl shadow-xl shadow-blue-900/20 hover:shadow-blue-900/40 hover:-translate-y-1 transition-all">
                        Conheça o Método em Detalhes →
                    </button>
                </div>
            </div>
        </section>
    );
}
