import { Metadata } from "next";
import { LiveHeroSection } from "@/components/sections/LiveHeroSection";

export const metadata: Metadata = {
    title: "Codirect Live - Próxima Segunda às 20h",
    description: "A estratégia de bastidores que gera lucro e previsibilidade. Uma aula densa, sem enrolação, sobre como aplicar o Método Codirect no seu negócio local. De graça, toda segunda-feira.",
    keywords: ["aula ao vivo", "método codirect", "marketing digital", "vendas", "negócios locais"],
    openGraph: {
        title: "Codirect Live - Próxima Segunda às 20h",
        description: "Junte-se a +50.000 empresários que assistem semanalmente",
        type: "website",
        url: "https://codirect.com.br/live",
    },
    twitter: {
        card: "summary_large_image",
        title: "Codirect Live - Próxima Segunda às 20h",
        description: "A estratégia de bastidores que gera lucro e previsibilidade",
    },
    alternates: {
        canonical: "https://codirect.com.br/live",
    },
};

export default function LivePage() {
    return (
        <main className="w-full overflow-hidden min-h-screen">
            <LiveHeroSection />
        </main>
    );
}
