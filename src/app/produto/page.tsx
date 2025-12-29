"use client";

import React, { useRef } from "react";
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  LineChart,
  Users,
  Target,
  ShieldCheck,
  FileText,
  Search,
  MessageSquare,
  Rocket,
  Zap,
  TrendingUp,
  Brain,
  Handshake,
  LayoutGrid
} from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import Link from "next/link";
import { cn } from "@/lib/utils";
import DecryptedText from "@/components/ui/DecryptedText";
import ElectricBorder from "@/components/ElectricBorder";
import PrismaticBurst from "@/components/PrismaticBurst";

// --- Components ---

const GoldButton = ({ children, className, onClick, as: Component = motion.button }: { children: React.ReactNode, className?: string, onClick?: () => void, as?: any }) => (
  <Component
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={cn(
      "px-8 py-4 bg-codirect-gold text-codirect-black font-bold rounded-full shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all flex items-center justify-center gap-2 cursor-pointer",
      className
    )}
  >
    {children}
  </Component>
);

const SectionTitle = ({ children, subtitle, light = false }: { children: React.ReactNode, subtitle?: string, light?: boolean }) => (
  <div className="text-center mb-16">
    <h2 className={cn("text-4xl md:text-5xl font-bold tracking-tight mb-4", light ? "text-codirect-black" : "text-white")}>
      {children}
    </h2>
    {subtitle && (
      <p className={cn("text-lg max-w-2xl mx-auto", light ? "text-gray-600" : "text-gray-400")}>
        {subtitle}
      </p>
    )}
  </div>
);

// --- Sections ---

export default function ProdutoPage() {
  return (
    <main className="bg-codirect-black text-white overflow-hidden">

      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-4">
        {/* Glow Central */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-codirect-gold/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <FadeIn delay={0.1}>
            <span className="inline-block px-4 py-1 rounded-full border border-codirect-gold/30 text-codirect-gold text-sm font-medium mb-6 bg-codirect-gold/5">
              PROGRAMA DE ACELERAÇÃO CODIRECT
            </span>
          </FadeIn>

          <FadeIn delay={0.3}>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
              Não é um curso. Não é uma agência.<br />
              <DecryptedText
                text="É o que o seu negócio precisa."
                animateOn="view"
                revealDirection="center"
                className="text-codirect-gold"
                encryptedClassName="text-codirect-gold/50"
                parentClassName="inline-block"
              />
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Mentoria estratégica para donos de negócios locais que faturam acima de <span className="text-white font-semibold">R$ 30k/mês</span> e querem previsibilidade de lucro.
            </p>
          </FadeIn>


          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link href="/sessao-estrategica">
                <ElectricBorder
                  color="#D4AF37"
                  speed={0.5}
                  chaos={0.1}
                  borderRadius={9999}
                  className="rounded-full"
                  style={{}}
                >
                  <GoldButton as={motion.div}>
                    Aplicar para Sessão Estratégica <ArrowRight className="w-5 h-5" />
                  </GoldButton>
                </ElectricBorder>
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {[
                { icon: ShieldCheck, text: "Acompanhamento Personalizado" },
                { icon: Zap, text: "Metodologia Validada" },
                { icon: Users, text: "Comunidade Exclusiva" }
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-400">
                  <badge.icon className="w-5 h-5 text-codirect-gold" />
                  <span className="text-sm md:text-base">{badge.text}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. O Problema (A Montanha Russa) */}
      <section className="py-24 px-4 bg-gradient-to-b from-codirect-black to-[#0f0f0f]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Cansado da montanha russa financeira?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Um mês você está comemorando o faturamento recorde. No outro, vive a ansiedade de não saber de onde virá o próximo cliente.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="p-2 bg-red-500/10 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-red-500 rotate-180" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">A sorte não é estratégia</h4>
                  <p className="text-gray-400">Depender apenas de indicação e do "boca a boca" é deixar o futuro da sua empresa nas mãos dos outros.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="p-2 bg-codirect-gold/10 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-codirect-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">O Método CoDirect</h4>
                  <p className="text-gray-400">Nossa metodologia cria um fluxo constante de clientes qualificados, gerando lucro real e recorrente.</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative p-1 bg-white/5 rounded-3xl border border-white/10 overflow-hidden">
              {/* Simulação de Gráfico */}
              <div className="bg-codirect-black/50 p-8 rounded-[22px] h-[400px] flex flex-col justify-end gap-1 relative overflow-hidden">
                <div className="absolute inset-x-8 top-12 bottom-12 border-l border-b border-white/10" />

                {/* Linha Instável (Vermelha) */}
                <svg className="absolute inset-0 w-full h-full px-8 py-12" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0,80 L20,30 L40,85 L60,40 L80,90 L100,50" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 2" />
                  <text x="10" y="25" fill="#ef4444" fontSize="4" className="font-bold">Mês de Sorte</text>
                  <text x="35" y="90" fill="#ef4444" fontSize="4" className="font-bold">Desespero</text>
                </svg>

                {/* Linha CoDirect (Dourada) */}
                <svg className="absolute inset-0 w-full h-full px-8 py-12" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    d="M0,80 C20,75 40,65 60,50 C80,35 100,20 120,0"
                    fill="none"
                    stroke="#D4AF37"
                    strokeWidth="3"
                  />
                  <motion.circle
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    cx="100" cy="20" r="3" fill="#D4AF37"
                  />
                </svg>

                <div className="absolute bottom-4 right-12 text-codirect-gold font-bold flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" /> Crescimento CoDirect
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3. Os 3 Pilares do Programa */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Uma entrega completa para quem não quer apenas teoria, mas resultados práticos e acompanhados.">
            Os 3 Pilares do Sucesso
          </SectionTitle>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Estratégia (O Método)",
                description: "Um plano claro de 5 passos. Nada de 'hacks', apenas fundamentos sólidos de marketing e vendas aplicados ao seu setor.",
                icon: Target,
                color: "from-blue-500/20 to-transparent",
                tags: ["Clareza", "Fundamentos", "Lucro"]
              },
              {
                title: "Acompanhamento (A Mentoria)",
                description: "Você não estará sozinho. Tenha navegadores dedicados e acesso direto aos fundadores. O fim das dúvidas na hora de executar.",
                icon: Users,
                color: "from-codirect-gold/20 to-transparent",
                tags: ["Pró-atividade", "Suporte", "Velocidade"]
              },
              {
                title: "Conexão (A Comunidade)",
                description: "Entre para o grupo 'Empresários de Valor'. Troque experiências reais com quem joga o mesmo jogo que você.",
                icon: Handshake,
                color: "from-purple-500/20 to-transparent",
                tags: ["Network", "Parcerias", "Ambiente"]
              }
            ].map((pilar, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="h-full group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-codirect-gold/50 transition-all overflow-hidden flex flex-col">
                  <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500", pilar.color)} />
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform">
                      <pilar.icon className="w-8 h-8 text-codirect-gold" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{pilar.title}</h3>
                    <p className="text-gray-400 mb-8 leading-relaxed">
                      {pilar.description}
                    </p>
                  </div>
                  <div className="mt-auto relative z-10 flex flex-wrap gap-2">
                    {pilar.tags.map((tag, j) => (
                      <span key={j} className="text-xs font-semibold px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Deep Dive: O Método dos 5 Passos */}
      <section className="py-24 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <SectionTitle subtitle="A jornada completa para transformar um negócio local comum em uma máquina de vendas previsível.">
            O Método dos 5 Passos
          </SectionTitle>

          <div className="relative">
            {/* Linha da Timeline (Vertical no desktop e mobile por simplicidade/design) */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

            {[
              {
                step: "Passo 1",
                title: "Diferencial de Valor",
                description: "Sair da guerra de preços. Identificamos o que torna seu negócio único e desejado.",
                icon: Zap
              },
              {
                step: "Passo 2",
                title: "Cliente Ideal",
                description: "Atrair quem paga, não quem pede desconto. Definimos o perfil que traz mais lucro com menos esforço.",
                icon: Search
              },
              {
                step: "Passo 3",
                title: "Conteúdo Influente",
                description: "Gerar autoridade real sem precisar de 'dancinhas'. Criamos uma linha editorial que educa e vende.",
                icon: MessageSquare
              },
              {
                step: "Passo 4",
                title: "Efeito Bola de Neve",
                description: "Tráfego pago inteligente para escalar sua audiência qualificada todos os dias.",
                icon: TrendingUp
              },
              {
                step: "Passo 5",
                title: "Vendas Escondidas",
                description: "O mecanismo de conversão direta. Anúncios focados em trazer o cliente pronto para fechar.",
                icon: Rocket
              }
            ].map((item, i) => (
              <FadeIn key={i} className="relative mb-20 last:mb-0">
                <div className={cn(
                  "flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0",
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                )}>
                  {/* Ponto na Timeline */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-codirect-black border-4 border-codirect-gold rounded-full -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(212,175,55,0.5)]" />

                  {/* Conteúdo */}
                  <div className="w-full md:w-[45%] pl-12 md:pl-0">
                    <div className={cn(
                      "p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.07] transition-colors",
                      i % 2 === 0 ? "md:text-right" : "md:text-left"
                    )}>
                      <span className="text-codirect-gold font-bold text-sm mb-2 block">{item.step}</span>
                      <h4 className="text-2xl font-bold mb-3 flex items-center md:inline-flex gap-2">
                        {i % 2 === 0 && <item.icon className="w-6 h-6 text-gray-400 hidden md:block" />}
                        {item.title}
                        {i % 2 !== 0 && <item.icon className="w-6 h-6 text-gray-400 hidden md:block" />}
                      </h4>
                      <p className="text-gray-400 leading-relaxed text-lg">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Comparativo (Tabela "Vs") */}
      <section className="py-24 px-4 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Por que somos a escolha mais segura para o seu crescimento?">
            O JogoMudou
          </SectionTitle>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] border-collapse">
              <thead>
                <tr>
                  <th className="p-8 text-left text-gray-500 font-medium border-b border-white/10">CATEGORIA</th>
                  <th className="p-8 text-center text-gray-300 font-medium border-b border-white/10">AGÊNCIAS TRADICIONAIS</th>
                  <th className="p-8 text-center text-gray-300 font-medium border-b border-white/10">CURSOS ONLINE</th>
                  <th className="p-8 text-center text-codirect-gold font-bold border-b border-white/10 bg-codirect-gold/5">CODIRECT</th>
                </tr>
              </thead>
              <tbody className="text-lg">
                {[
                  {
                    cat: "Controle",
                    agencia: "Dependência total (caixa preta)",
                    curso: "Controle seu, mas sem ajuda",
                    codirect: "Você domina, seu time executa"
                  },
                  {
                    cat: "Execução",
                    agencia: "Focam em likes e métricas de ego",
                    curso: "Você faz tudo sozinho (cansativo)",
                    codirect: "Foco 100% em lucro e escala"
                  },
                  {
                    cat: "Acompanhamento",
                    agencia: "Apenas um relatório mensal frio",
                    curso: "Suporte por e-mail ou fórum",
                    codirect: "Navegador dedicado e mentorias"
                  },
                  {
                    cat: "Conhecimento",
                    agencia: "Você não aprende o que fazem",
                    curso: "Muita teoria, pouca prática local",
                    codirect: "Formação estratégica do dono"
                  }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="p-8 font-bold border-b border-white/10 uppercase text-xs tracking-widest text-gray-400">{row.cat}</td>
                    <td className="p-8 text-center text-gray-500 border-b border-white/10">{row.agencia}</td>
                    <td className="p-8 text-center text-gray-500 border-b border-white/10">{row.curso}</td>
                    <td className="p-8 text-center font-bold text-white border-b border-white/10 bg-codirect-gold/5">
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-codirect-gold" /> {row.codirect}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. Para Quem É (Qualificação) */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle="Não queremos o seu dinheiro se não pudermos te ajudar a crescer.">
            É para você?
          </SectionTitle>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Sim */}
            <FadeIn>
              <div className="bg-green-500/5 border border-green-500/20 p-10 rounded-3xl h-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-500">Para quem é:</h3>
                </div>
                <ul className="space-y-6">
                  {[
                    "Negócios locais com sede física ou atendimento regional.",
                    "Faturamento acima de R$ 30k por mês comprovados.",
                    "Já possui uma equipe (mesmo que pequena) para delegar.",
                    "Busca o próximo nível de escala e saída do operacional.",
                    "Comprometido em aplicar o método com consistência."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                      <p className="text-gray-300 text-lg">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Não */}
            <FadeIn delay={0.2}>
              <div className="bg-red-500/5 border border-red-500/20 p-10 rounded-3xl h-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                    <XCircle className="w-8 h-8 text-red-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-red-500">Para quem NÃO é:</h3>
                </div>
                <ul className="space-y-6">
                  {[
                    "Afiliados, Dropshipping ou infoprodutores iniciantes.",
                    "Negócios que ainda não faturam ou estão no zero.",
                    "Pessoas que buscam 'fórmula mágica' ou botão de dinheiro.",
                    "Quem não está disposto a investir em tráfego pago.",
                    "Quem não tem tempo para mentorias semanais."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                      <p className="text-gray-300 text-lg">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 7. Como Funciona a Aplicação (Steps) */}
      <section className="py-24 px-4 bg-codirect-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Processo de seleção rigoroso para garantir a harmonia da nossa comunidade.">
            O Caminho da Aplicação
          </SectionTitle>

          <div className="relative mt-20">
            {/* Linha de Conexão Animada */}
            <StepLine />

            <div className="grid md:grid-cols-4 gap-12">
              {[
                {
                  icon: FileText,
                  title: "Aplicação",
                  desc: "Preencha o formulário detalhado sobre o seu momento atual."
                },
                {
                  icon: Search,
                  title: "Análise",
                  desc: "Nossa equipe avalia se você tem o perfil necessário para o programa."
                },
                {
                  icon: MessageSquare,
                  title: "Sessão Estratégica",
                  desc: "Reunião gratuita com um especialista para desenhar seu plano tático."
                },
                {
                  icon: Rocket,
                  title: "Início",
                  desc: "Entrada na mentoria, setup imediato e início da sua aceleração."
                }
              ].map((step, i) => (
                <FadeIn key={i} delay={i * 0.15} className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-codirect-black border-2 border-codirect-gold rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                    <step.icon className="w-10 h-10 text-codirect-gold" />
                  </div>
                  <h4 className="text-xl font-bold mb-4">{step.title}</h4>
                  <p className="text-gray-400">{step.desc}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Footer CTA (Ação Final) */}
      <section className="py-24 px-4 bg-codirect-black text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <PrismaticBurst
            animationType="rotate3d"
            intensity={2}
            speed={0.5}
            distort={1.0}
            paused={false}
            offset={{ x: 0, y: 0 }}
            hoverDampness={0.25}
            rayCount={24}
            mixBlendMode="lighten"
            colors={['#D4AF37', '#ffffff', '#0a0a0a']}
          />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tighter leading-tight">
              O seu próximo nível de faturamento começa com uma conversa.
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Não deixe para depois a previsibilidade que o seu negócio merece hoje. Aplique agora para a Sessão Estratégica gratuita.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col items-center gap-6">
              <Link href="/sessao-estrategica">
                <GoldButton as={motion.div} className="text-xl px-12 py-6">
                  Preencher Aplicação Agora <ArrowRight className="w-6 h-6" />
                </GoldButton>
              </Link>
              <p className="text-sm font-medium text-gray-500 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600" /> Vagas limitadas por mês por conta do acompanhamento.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

    </main>
  );
}

// Componente auxiliar para a linha dos steps
function StepLine() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="absolute top-10 left-[10%] right-[10%] h-0.5 bg-white/10 hidden md:block" />;

  return <StepLineInner />;
}

function StepLineInner() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const width = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "100%"]), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={containerRef} className="absolute top-10 left-[10%] right-[10%] h-0.5 bg-white/10 hidden md:block">
      <motion.div
        style={{ width: width }}
        className="h-full bg-codirect-gold shadow-[0_0_10px_rgba(212,175,55,0.8)]"
      />
    </div>
  );
}
