"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
    return (
        <motion.div
            className={className}
            initial={{
                opacity: 0,
                y: noVertical ? 0 : 24
            }}
            whileInView={{
                opacity: 1,
                y: 0
            }}
            viewport={{
                once: true,
                amount: viewportAmount,
                margin: "0px 0px -100px 0px" // Slight offset to ensure it triggers nicely
            }}
            transition={{
                duration: 0.8,
                delay: delay,
                ease: [0.21, 0.47, 0.32, 0.98] // Smooth custom easing
            }}
        >
            {children}
        </motion.div>
    );
}
