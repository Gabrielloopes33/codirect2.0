"use client";

import { motion } from "framer-motion";

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
                y: noVertical ? 0 : 20
            }}
            whileInView={{
                opacity: 1,
                y: 0
            }}
            viewport={{
                once: true,
                amount: viewportAmount,
                margin: "0px 0px -80px 0px"
            }}
            transition={{
                duration: 0.5,
                delay: delay,
                ease: "easeOut"
            }}
        >
            {children}
        </motion.div>
    );
}
