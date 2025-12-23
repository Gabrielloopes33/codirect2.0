import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import FadeIn from "../animations/FadeIn";

export const BentoCard = ({
    className,
    title,
    description,
    header,
    icon,
    href,
    cta,
    delay = 0
}: {
    className?: string;
    title?: string | ReactNode;
    description?: string | ReactNode;
    header?: ReactNode;
    icon?: ReactNode;
    href?: string;
    cta?: string;
    delay?: number;
}) => {
    return (
        <FadeIn
            delay={delay}
            className={cn(
                "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.1] bg-white border border-transparent justify-between flex flex-col space-y-4",
                "hover:-translate-y-1 hover:shadow-2xl hover:border-neutral-200 dark:hover:border-neutral-700",
                "glass",
                className
            )}
        >
            {header}
            <div className="group-hover/bento:translate-x-2 transition duration-200">
                {icon}
                <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
                    {title}
                </div>
                <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
                    {description}
                </div>
                {cta && href && (
                    <a href={href} className="text-xs text-neutral-400 mt-2 block hover:text-white transition-colors">{cta} &rarr;</a>
                )}
            </div>
        </FadeIn>
    );
};
