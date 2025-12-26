"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BeamsUpstream = React.memo(
    ({ className }: { className?: string }) => {
        const [isMounted, setIsMounted] = useState(false);
        const [paths, setPaths] = useState<string[]>([]);
        const [randomValues, setRandomValues] = useState<any[]>([]);

        useEffect(() => {
            setIsMounted(true);
            const generatedPaths: string[] = [];
            const screenSections = 22;

            for (let section = 0; section < screenSections; section++) {
                const baseX = (section * 100) / (screenSections - 1);
                for (let variation = 0; variation < 4; variation++) {
                    const startX = baseX + (Math.random() - 0.5) * 15;
                    const midX1 = startX + (Math.random() - 0.5) * 20;
                    const midX2 = startX + (Math.random() - 0.5) * 25;
                    const endX = startX + (Math.random() - 0.5) * 30;
                    const path = `M${startX} 100C${startX} 100 ${midX1} 75 ${midX1} 50C${midX1} 50 ${midX2} 25 ${midX2} 12C${midX2} 12 ${endX} 5 ${endX} 0`;
                    generatedPaths.push(path);
                    const altPath = `M${startX} 100C${startX} 100 ${startX + 5
                        } 80 ${midX1} 60C${midX1} 60 ${midX2} 35 ${midX2} 15C${midX2} 15 ${endX} 3 ${endX} -2`;
                    generatedPaths.push(altPath);
                }
            }
            setPaths(generatedPaths);

            const values = generatedPaths.map(() => ({
                duration: Math.random() * 4 + 3,
                delay: Math.random() * 5,
                particleDuration: Math.random() * 10 + 8,
                particleDelay: Math.random() * 8,
                gradientDuration: Math.random() * 5 + 4,
                gradientDelay: Math.random() * 6,
            }));
            setRandomValues(values);
        }, []);

        if (!isMounted) return null;

        return (
            <div
                className={cn(
                    "absolute inset-0 flex h-full w-full items-center justify-center overflow-hidden pointer-events-none",
                    className
                )}
            >
                <svg
                    className="absolute z-0 h-full w-full"
                    width="100%"
                    height="100%"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                >
                    <rect
                        width="100%"
                        height="100%"
                        fill="url(#backgroundGradient)"
                        opacity="0.50"
                    />

                    <g opacity="0.50">
                        {paths.map((path, index) => (
                            <path
                                key={`static-path-${index}`}
                                d={path}
                                stroke="url(#staticGradient)"
                                strokeOpacity="0.2"
                                strokeWidth="0.5"
                                fill="none"
                                vectorEffect="non-scaling-stroke"
                            />
                        ))}
                    </g>

                    {paths.map((path, index) => {
                        const vals = randomValues[index];
                        if (!vals) return null;
                        return (
                            <motion.path
                                key={`path-${index}`}
                                d={path}
                                stroke={`url(#flowingGradient-${index % 20})`}
                                strokeOpacity="0.9"
                                strokeWidth="0.25"
                                fill="none"
                                vectorEffect="non-scaling-stroke"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{
                                    duration: vals.duration,
                                    ease: "easeInOut",
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    delay: vals.delay,
                                }}
                            />
                        );
                    })}

                    {paths.slice(0, 15).map((path, index) => {
                        const vals = randomValues[index];
                        return (
                            <motion.circle
                                key={`particle-${index}`}
                                r="0.25"
                                fill={`url(#particleGradient-${index % 10})`}
                                initial={{
                                    opacity: 0,
                                    ["--offset-distance" as any]: "0%"
                                }}
                                animate={{
                                    opacity: [0, 1, 0],
                                    ["--offset-distance" as any]: "100%"
                                }}
                                transition={{
                                    duration: vals.particleDuration,
                                    ease: "linear",
                                    repeat: Infinity,
                                    delay: vals.particleDelay,
                                }}
                                style={{
                                    offsetPath: `path('${path}')`,
                                    offsetRotate: "0deg",
                                    ["offsetDistance" as any]: "var(--offset-distance)"
                                } as any}
                            />
                        );
                    })}

                    <defs>
                        <radialGradient
                            id="backgroundGradient"
                            cx="50%"
                            cy="80%"
                            r="60%"
                            gradientUnits="objectBoundingBox"
                        >
                            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.2" />
                            <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.05" />
                            <stop offset="100%" stopColor="#0a0a0a" stopOpacity="0" />
                        </radialGradient>

                        <linearGradient
                            id="staticGradient"
                            x1="0%"
                            y1="100%"
                            x2="0%"
                            y2="0%"
                            gradientUnits="objectBoundingBox"
                        >
                            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.4" />
                            <stop offset="50%" stopColor="#b5952f" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.1" />
                        </linearGradient>

                        {Array.from({ length: 20 }).map((_, index) => {
                            const vals = randomValues[index] || { gradientDuration: 5, gradientDelay: 0 };
                            return (
                                <motion.linearGradient
                                    key={`flowingGradient-${index}`}
                                    id={`flowingGradient-${index}`}
                                    x1="0%"
                                    y1="100%"
                                    x2="0%"
                                    y2="0%"
                                    gradientUnits="objectBoundingBox"
                                    initial={{
                                        y1: "100%",
                                        y2: "90%",
                                    }}
                                    animate={{
                                        y1: ["100%", "0%"],
                                        y2: ["90%", "-10%"],
                                    }}
                                    transition={{
                                        duration: vals.gradientDuration || 5,
                                        ease: "linear",
                                        repeat: Infinity,
                                        delay: vals.gradientDelay || 0,
                                    }}
                                >
                                    <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
                                    <stop offset="30%" stopColor="#D4AF37" stopOpacity="0.8" />
                                    <stop offset="60%" stopColor="#b5952f" stopOpacity="1" />
                                    <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                                </motion.linearGradient>
                            );
                        })}

                        {Array.from({ length: 10 }).map((_, index) => (
                            <radialGradient
                                key={`particleGradient-${index}`}
                                id={`particleGradient-${index}`}
                                cx="50%"
                                cy="50%"
                                r="50%"
                                gradientUnits="objectBoundingBox"
                            >
                                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
                                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                            </radialGradient>
                        ))}

                        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="1" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                </svg>
            </div>
        );
    }
);

BeamsUpstream.displayName = "BeamsUpstream";
