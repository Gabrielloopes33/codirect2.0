"use client";
import React, { useEffect, useState, useCallback, useMemo } from "react";
import Image from "next/image";

interface Testimonial {
    name: string;
    handle: string;
    review: string;
    avatar: string;
}

interface TestimonialCardProps {
    testimonial: Testimonial;
    index: number;
    cardClassName?: string;
    avatarClassName?: string;
}

interface KineticTestimonialProps {
    testimonials?: Testimonial[];
    className?: string;
    cardClassName?: string;
    avatarClassName?: string;
    desktopColumns?: number;
    tabletColumns?: number;
    mobileColumns?: number;
    speed?: number;
    title?: string;
    subtitle?: string;
}

interface TestimonialWithId extends Testimonial {
    uniqueId: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = React.memo(
    ({ testimonial, index, cardClassName = "", avatarClassName = "" }) => {
        const [isHovered, setIsHovered] = useState<boolean>(false);

        const gradients = [
            "from-gold via-gold/80 to-gold/40",
            "from-neutral-800 via-neutral-700 to-neutral-600",
            "from-gold/60 via-gold/40 to-gold/20",
        ];

        const gradientClass = gradients[index % gradients.length];

        return (
            <div
                className="w-full mb-4 flex-shrink-0"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div
                    className={`transition-all duration-300 relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 ${isHovered ? "border-gold/50 shadow-2xl shadow-gold/10 -translate-y-1" : ""
                        } ${cardClassName}`}
                >
                    {isHovered && (
                        <div
                            className={`absolute inset-0 bg-gradient-to-b ${gradientClass} z-0 opacity-10`}
                        />
                    )}

                    <div className="relative z-10">
                        <p className="text-sm md:text-base mb-6 leading-relaxed transition-colors duration-300 text-neutral-200">
                            "{testimonial.review}"
                        </p>

                        <div className="flex items-center space-x-3">
                            <div className={`relative w-10 h-10 rounded-full overflow-hidden border border-white/20 ${avatarClassName}`}>
                                <Image
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="min-w-0">
                                <p className={`font-bold text-sm ${isHovered ? "text-gold" : "text-white"}`}>
                                    {testimonial.name}
                                </p>
                                <p className="text-xs text-neutral-500 lowercase">
                                    {testimonial.handle}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
);

TestimonialCard.displayName = "TestimonialCard";

const KineticTestimonial: React.FC<KineticTestimonialProps> = ({
    testimonials = [],
    className = "",
    cardClassName = "",
    avatarClassName = "",
    desktopColumns = 4,
    tabletColumns = 2,
    mobileColumns = 1,
    speed = 1,
    title = "Resultados Reais",
    subtitle = "Veja o que empresários que aplicaram o Método CoDirect estão alcançando.",
}) => {
    const [actualMobileColumns, setActualMobileColumns] = useState(mobileColumns);

    useEffect(() => {
        const updateColumns = () => {
            const width = window.innerWidth;
            if (width < 640) {
                setActualMobileColumns(1);
            } else {
                setActualMobileColumns(mobileColumns);
            }
        };
        updateColumns();
        window.addEventListener("resize", updateColumns);
        return () => window.removeEventListener("resize", updateColumns);
    }, [mobileColumns]);

    const createColumns = useCallback(
        (numColumns: number) => {
            if (!testimonials || testimonials.length === 0) return [];
            const columns: TestimonialWithId[][] = [];
            const testimonialsPerColumn = 6;

            for (let i = 0; i < numColumns; i++) {
                const columnTestimonials: TestimonialWithId[] = [];
                for (let j = 0; j < testimonialsPerColumn; j++) {
                    const testimonialIndex = (i * 7 + j * 2) % testimonials.length;
                    columnTestimonials.push({
                        ...testimonials[testimonialIndex],
                        uniqueId: `${i}-${j}-${testimonialIndex}`,
                    });
                }
                columns.push([...columnTestimonials, ...columnTestimonials]);
            }
            return columns;
        },
        [testimonials]
    );

    const desktopColumnsData = useMemo(() => createColumns(desktopColumns), [createColumns, desktopColumns]);
    const mobileColumnsData = useMemo(() => createColumns(actualMobileColumns), [createColumns, actualMobileColumns]);

    const renderColumn = useCallback(
        (columnTestimonials: TestimonialWithId[], colIndex: number, prefix: string, containerHeight: number) => {
            const moveUp = colIndex % 2 === 0;
            const animationDuration = (30 + colIndex * 5) / speed;

            return (
                <div key={`${prefix}-${colIndex}`} className="flex-1 overflow-hidden relative" style={{ height: `${containerHeight}px` }}>
                    <div
                        className={`flex flex-col ${moveUp ? "animate-scroll-up" : "animate-scroll-down"}`}
                        style={{ animationDuration: `${animationDuration}s` }}
                    >
                        {columnTestimonials.map((testimonial, index) => (
                            <TestimonialCard
                                key={`${prefix}-${colIndex}-${testimonial.uniqueId}-${index}`}
                                testimonial={testimonial}
                                index={colIndex * 3 + index}
                                cardClassName={cardClassName}
                                avatarClassName={avatarClassName}
                            />
                        ))}
                    </div>
                </div>
            );
        },
        [speed, cardClassName, avatarClassName]
    );

    return (
        <section className={`py-24 bg-black overflow-hidden ${className}`}>
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                        {title}
                    </h2>
                    <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                </div>

                {testimonials && testimonials.length > 0 && (
                    <div className="flex gap-4 w-full relative">
                        {/* Top/Bottom Fade Overlays */}
                        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />

                        {/* Desktop View */}
                        <div className="hidden md:flex gap-4 w-full">
                            {desktopColumnsData.map((col, i) => renderColumn(col, i, "desktop", 700))}
                        </div>

                        {/* Mobile View */}
                        <div className="md:hidden flex gap-4 w-full">
                            {mobileColumnsData.map((col, i) => renderColumn(col, i, "mobile", 600))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default KineticTestimonial;
