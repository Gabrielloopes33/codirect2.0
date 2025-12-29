import { Navbar } from "@/components/layout/Navbar";
import { RDStationForm } from "@/components/forms/RDStationForm";
import KineticTestimonial from "@/components/ui/KineticTestimonials";
import { RevealText } from "@/components/ui/RevealText";
import { BeamsUpstream } from "@/components/ui/BeamsUpstream";
import FadeIn from "@/components/animations/FadeIn";
import { CheckCircle2, TrendingUp, Users, Target, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// @ts-ignore
import SpotlightCard from "@/components/SpotlightCard";

export default function SessaoEstrategicaPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white">
            <Navbar />

            {/* Qualification Bar */}
            <div className="pt-28 pb-4 px-4 overflow-hidden">
                <FadeIn>
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-red-600/10 border border-red-600/20 py-3 px-6 rounded-full flex items-center justify-center gap-3 animate-pulse">
                            <ShieldCheck className="w-5 h-5 text-red-500" />
                            <p className="text-red-500 font-bold text-sm md:text-base text-center">
                                APENAS PARA QUEM FATURA A PARTIR DE 30 MIL MENSAIS
                            </p>
                        </div>
                    </div>
                </FadeIn>
            </div>

            {/* Hero & Form Section */}
            <section className="relative py-12 px-4 overflow-hidden">
                {/* Beams Background */}
                <BeamsUpstream className="opacity-100" />

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">

                    {/* Content Left */}
                    <FadeIn delay={0.2}>
                        <div className="space-y-8 pt-8 text-center lg:text-left">
                            <div className="space-y-4">
                                <h1 className="text-6xl md:text-6xl font-extrabold tracking-tight leading-tight py-10">
                                    <RevealText
                                        mode="auto"
                                        direction="up"
                                        stagger={0.05}
                                        className="text-white"
                                    >
                                        A CODIRECT identifica a sua Essência e te orienta em como se Posicionar para faturar mais.
                                    </RevealText>
                                </h1>
                                <p className="text-xl text-neutral-400 max-w-2xl mx-auto lg:mx-0">
                                    Seu negócio merece o próximo nível. Aplique agora para uma sessão estratégica exclusiva e descubra o caminho para a previsibilidade e lucro.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                                {[
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
                                ].map((item, i) => (
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

                            <div className="pt-8 items-center justify-center lg:justify-start flex gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                                <Image src="/logo.png" alt="CoDirect" width={120} height={40} className="invert object-contain" />
                                <div className="h-8 w-[1px] bg-white/20" />
                                <p className="text-sm font-medium">Validado em +1.400 negócios</p>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Form Right */}
                    <FadeIn delay={0.4} className="relative">
                        <div className="absolute inset-0 bg-gold/20 blur-3xl rounded-full opacity-20 -z-10" />
                        <div className="p-1 rounded-3xl bg-gradient-to-b from-white/20 to-transparent">
                            <div className="bg-[#121212] p-6 md:p-10 rounded-[1.4rem] border border-white/10 shadow-2xl">
                                <div className="mb-8 text-center">
                                    <h2 className="text-2xl font-bold mb-2">Aplicação para Sessão</h2>
                                    <p className="text-neutral-400 text-sm">
                                        Preencha os dados abaixo para desbloquear seu diagnóstico.
                                    </p>
                                </div>

                                {/* RD Station Form Integration */}
                                <RDStationForm
                                    formId="lp-diagnostico-gratuito-eag-0ed1a17e058ba32652b4"
                                    formToken="UA-192948565-1"
                                />

                                <p className="mt-6 text-[10px] text-neutral-500 text-center uppercase tracking-widest leading-relaxed">
                                    Sua privacidade é nossa prioridade. Dados protegidos pela LGPD.
                                </p>
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

            {/* Benefits Section */}
            <section className="py-24 px-4 bg-white text-black">
                <div className="max-w-7xl mx-auto text-center space-y-16">
                    <FadeIn>
                        <div className="max-w-3xl mx-auto space-y-4">
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                                O que você vai descobrir na sua Sessão Estratégica?
                            </h2>
                            <p className="text-lg text-neutral-600">
                                Não é uma conversa de vendas. É um mergulho tático no seu posicionamento.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        {[
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
                        ].map((benefit, i) => (
                            <FadeIn key={i} delay={0.2 * i} className="h-full">
                                {/* @ts-ignore */}
                                <SpotlightCard className="h-full rounded-2xl border-white/10" spotlightColor="rgba(212, 175, 55, 0.4)">
                                    <div className="space-y-4 p-8 h-full flex flex-col justify-center border-l-4 border-gold">
                                        <h3 className="text-xl font-bold text-white group-hover:text-gold transition-colors">{benefit.title}</h3>
                                        <p className="text-neutral-400 leading-relaxed">{benefit.desc}</p>
                                    </div>
                                </SpotlightCard>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Kinetic Testimonials */}
            <KineticTestimonial
                testimonials={[
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
                ]}
            />

            {/* Footer / Final CTA */}
            <footer className="py-12 px-4 border-t border-white/5 bg-[#0a0a0a]">
                <FadeIn>
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                        <Link href="/" className="relative w-32 h-8 group overflow-hidden">
                            <Image
                                src="/logo.png"
                                alt="CoDirect Logo"
                                fill
                                className="object-contain invert group-hover:scale-110 transition-transform duration-300"
                            />
                        </Link>
                        <p className="text-neutral-500 text-sm">
                            © 2025 CoDirect. Todos os direitos reservados.
                        </p>
                        <div className="flex gap-6">
                            <a href="#" className="text-neutral-400 hover:text-gold transition-colors text-sm">Privacidade</a>
                            <a href="#" className="text-neutral-400 hover:text-gold transition-colors text-sm">Termos de Uso</a>
                        </div>
                    </div>
                </FadeIn>
            </footer>
        </main>
    );
}
