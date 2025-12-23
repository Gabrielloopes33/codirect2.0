import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const BentoGrid = ({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "grid w-full auto-rows-[22rem] grid-cols-1 gap-4 md:auto-rows-[20rem] md:grid-cols-3",
                className
            )}
        >
            {children}
        </div>
    );
};
