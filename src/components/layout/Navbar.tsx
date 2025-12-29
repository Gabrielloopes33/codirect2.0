"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: "Live", href: "/live" },
        { name: "Produto", href: "/produto" },
        { name: "Formulário", href: "#" },
    ];

    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
            <nav className="relative flex items-center gap-4 p-2 pl-6 pr-2 rounded-full border border-white/10 bg-black/60 backdrop-blur-md shadow-lg shadow-black/20 max-w-4xl w-full justify-between transition-all duration-300 hover:bg-black/70 hover:border-white/20">
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative w-32 h-8">
                        <Image
                            src="/logo.png"
                            alt="CoDirect Logo"
                            fill
                            className="object-contain invert brightness-0"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="px-4 py-2 text-sm text-neutral-300 hover:text-white transition-colors rounded-full hover:bg-white/5 font-medium"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-2">
                    <Link href="/sessao-estrategica">
                        <button className="hidden md:block px-6 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-neutral-200 transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 text-nowrap">
                            Sessão Estratégica
                        </button>
                    </Link>
                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-full hover:bg-white/10 text-white transition-colors"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            className="absolute top-full mt-2 left-0 right-0 bg-neutral-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex flex-col gap-2 shadow-2xl md:hidden origin-top"
                        >
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="px-4 py-3 text-sm text-neutral-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors font-medium text-center"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link href="/sessao-estrategica" className="w-full">
                                <button className="w-full mt-2 px-6 py-3 rounded-xl bg-white text-black text-sm font-semibold hover:bg-neutral-200 transition-colors">
                                    Sessão Estratégica
                                </button>
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </div>
    );
}
