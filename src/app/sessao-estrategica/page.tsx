"use client";

import { CustomRDForm } from "@/components/forms/CustomRDForm";
import { LazyLoad } from "@/components/LazyLoad";
import dynamic from "next/dynamic";
import FadeIn from "@/components/animations/FadeIn";
import { CheckCircle2, TrendingUp, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import SpotlightCard from "@/components/SpotlightCard";

// Lazy load heavy components
const KineticTestimonial = dynamic(() => import("@/components/ui/KineticTestimonials"), {
    ssr: false,
    loading: () => <div className="min-h-[400px] animate-pulse bg-neutral-900/50" />
});

export default function SessaoEstrategicaPage() {
    const benefits = useMemo(() => [
        {
            icon: Target,
            title: "Diagnóstico Preciso",
            desc: "Análise profunda do seu momento atual e gargalos."
        },
        {
            icon: TrendingUp,
            title: "Plano de Escala",
            desc: "Visão clara de como chegar aos seus objetivos de faturamento."
        }
    ], []);

    const strategicBenefits = useMemo(() => [
        {
            title: "Seu 'Unfair Advantage'",
            desc: "Identificamos o que torna seu negócio único e como usar isso para afastar a concorrência por preço."
        },
        {
            title: "Furos no Funil",
            desc: "Onde você está perdendo leads hoje? Analisamos seu processo de conversão atual."
        },
        {
            title: "Caminho da Escala",
            desc: "Quais os próximos passos práticos para dobrar ou triplicar seu faturamento com previsibilidade."
        }
    ], []);

    const testimonials = useMemo(() => [
        {
            name: "Lia Herrmann",
            handle: "@liaherrmann.arq",
            review: "Saí de um faturamento estagnado para um crescimento de 200%, atraindo 10x mais clientes qualificados.",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100",
        },
        {
            name: "Dr. Carlos Silva",
            handle: "@drcarlos.implantes",
            review: "A previsibilidade que o Método CoDirect trouxe para a minha clínica foi o divisor de águas que eu precisava.",
            avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=100",
        },
        {
            name: "Ana Paula",
            handle: "@anapaula.estetica",
            review: "Hoje eu não corro mais atrás de clientes, eles chegam até mim sabendo o valor do meu serviço.",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100",
        },
        {
            name: "Roberto Mendes",
            handle: "@robertomendes.vendas",
            review: "O Mecanismo de Vendas Escondidas é simplesmente genial. Vendas acontecendo sem eu precisar postar 24h por dia.",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100",
        },
        {
            name: "Juliana Costa",
            handle: "@julianacosta.adv",
            review: "Finalmente entendi como me posicionar como autoridade e cobrar o que eu realmente mereço.",
            avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100",
        },
        {
            name: "Marcos Santos",
            handle: "@marcos.santos.tech",
            review: "ROI de 15x nos primeiros 3 meses. O tráfego pago da CoDirect é outro nível.",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100",
        },
        {
            name: "Beatriz Oliveira",
            handle: "@beatriz.oliveira",
            review: "A CoDirect não faz apenas posts bonitos, eles constroem uma máquina de vendas real.",
            avatar: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=100",
        },
        {
            name: "Paulo Ricardo",
            handle: "@pauloricardo.eng",
            review: "O suporte é impecável. Nunca me senti tão acompanhado em uma consultoria de negócios.",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100",
        }
    ], []);

    return (
        <main className="min-h-screen bg-codirect-black text-white">
            {/* Hero & Form Section - Mobile First */}
            <section className="relative py-8 md:py-12 px-4 overflow-hidden" style={{ contain: 'layout style paint' }}>
                {/* Lightweight Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent opacity-30" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_50%)]" />

                <div className="max-w-6xl mx-auto relative z-10">
                    {/* Conteúdo em Grid - Texto e Formulário Lado a Lado */}
                    <div className="grid lg:grid-cols-2 gap-8 items-start">
                        {/* Coluna da Esquerda - Texto (aparece depois no mobile, antes no desktop) */}
                        <FadeIn delay={0.1} className="order-2 lg:order-1">
                            <div className="pt-4 md:pt-12">
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6">
                                    A CODIRECT identifica a sua Essência e te orienta em como se Posicionar para faturar mais.
                                </h1>
                                <p className="text-lg md:text-xl text-neutral-400 mb-8">
                                    Seu negócio merece o próximo nível.
                                </p>

                                {/* Benefícios inline */}
                                <div className="space-y-4">
                                    {benefits.map((item, i) => (
                                        <div key={i} className="flex items-start gap-4">
                                            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                                                <item.icon className="w-6 h-6 text-gold" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                                                <p className="text-sm text-neutral-400">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>

                        {/* Coluna da Direita - Formulário (aparece primeiro no mobile) */}
                        <FadeIn delay={0.1} className="relative order-1 lg:order-2 lg:sticky lg:top-8">
                            {/* Título mobile - só aparece no mobile acima do formulário */}
                            <h1 className="lg:hidden text-2xl md:text-3xl font-extrabold tracking-tight leading-tight mb-4 text-center">
                                Posicione-se para faturar mais
                            </h1>
                            <div className="absolute inset-0 bg-gold/20 blur-3xl rounded-full opacity-20 -z-10" />
                            <div className="p-1 rounded-3xl bg-gradient-to-b from-gold/30 to-transparent shadow-[0_0_80px_-20px_rgba(212,175,55,0.5)]">
                                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] p-6 md:p-10 rounded-[1.4rem] border border-gold/20 shadow-2xl">
                                    <div className="mb-6 text-center">
                                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-gold/10 border border-gold/30">
                                            <span className="flex h-2 w-2 rounded-full bg-gold animate-pulse"></span>
                                            <span className="text-xs font-bold text-gold uppercase tracking-wider">Apenas para faturamento 30k+/mês</span>
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">Aplicação para Sessão</h2>
                                        <p className="text-neutral-400 text-sm">
                                            Preencha os dados abaixo para desbloquear seu diagnóstico.
                                        </p>
                                    </div>

                                    {/* Formulário Customizado */}
                                    <div className="rd-form-wrapper">
                                        <CustomRDForm formId="lp-diagnostico-gratuito-eag-0ed1a17e058ba32652b4" />
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Benefícios - Abaixo do Grid */}
                    <FadeIn delay={0.3} className="mt-16">
                        <div className="max-w-3xl mx-auto hidden">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {benefits.map((item, i) => (
                                    <div key={i} className="flex gap-4 items-start p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/50 transition-all duration-300 group hover:shadow-[0_0_30px_-10px_rgba(212,175,55,0.3)]">
                                        <div className="p-3 rounded-xl bg-gold/10 text-gold group-hover:scale-110 transition-transform">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <div className="text-left">
                                            <h3 className="font-bold text-lg group-hover:text-gold transition-colors">{item.title}</h3>
                                            <p className="text-sm text-neutral-400">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-8 items-center justify-center flex gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                                <Image src="/logo.png" alt="CoDirect" width={120} height={40} className="invert object-contain" />
                                <div className="h-8 w-px bg-white/20" />
                                <p className="text-sm font-medium">Validado em +1.400 negócios</p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Warning/Instructions Section */}
            <section className="py-16 px-4 border-y border-white/5 bg-[#0d0d0d]">
                <FadeIn>
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-gold">⚠️ LEIA ANTES DE APLICAR</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                            <div className="space-y-2">
                                <p className="font-bold text-white flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-green-500" /> Passo 1: Preencha o formulário
                                </p>
                                <p className="text-neutral-400 text-sm">Seja o mais honesto e detalhado possível. Suas respostas definem se você será selecionado.</p>
                            </div>
                            <div className="space-y-2">
                                <p className="font-bold text-white flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-green-500" /> Passo 2: Aguarde o contato
                                </p>
                                <p className="text-neutral-400 text-sm">Nosso time entrará em contato via WhatsApp em até 24h úteis para agendar sua sessão.</p>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </section>
        </main>
    );
}
