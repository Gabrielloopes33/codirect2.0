"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

interface FadeInProps {
    children: React.ReactNode;
    className?: string;
    noVertical?: boolean;
    delay?: number;
    viewportAmount?: number;
}

export default function FadeIn({
    children,
    className,
    noVertical = false,
    delay = 0,
    viewportAmount = 0.3,
}: FadeInProps) {
    const variants = useMemo(() => ({
        initial: {
            opacity: 0,
            y: noVertical ? 0 : 20
        },
        whileInView: {
            opacity: 1,
            y: 0
        }
    }), [noVertical]);

    const transition = useMemo(() => ({
        duration: 0.5,
        delay: delay,
        ease: [0.4, 0, 0.2, 1] // easeOut bezier
    }), [delay]);

    return (
        <motion.div
            className={className}
            style={{ willChange: 'opacity, transform' }}
            initial={variants.initial}
            whileInView={variants.whileInView}
            viewport={{
                once: true,
                amount: viewportAmount,
                margin: "0px 0px -80px 0px"
            }}
            transition={transition}
        >
            {children}
        </motion.div>
    );
}
