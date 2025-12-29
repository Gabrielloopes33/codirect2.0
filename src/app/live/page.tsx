import { Metadata } from "next";
import { LiveHeroSection } from "@/components/sections/LiveHeroSection";
import { LiveLearningSection } from "@/components/sections/LiveLearningSection";
import { LiveNextClassSection } from "@/components/sections/LiveNextClassSection";
import { LiveTeachersSection } from "@/components/sections/LiveTeachersSection";
import { LiveLibrarySection } from "@/components/sections/LiveLibrarySection";
import { LiveCtaFooterSection } from "@/components/sections/LiveCtaFooterSection";
import { ArrowRight, Instagram, Linkedin, Youtube } from "lucide-react";

export const metadata: Metadata = {
    title: "Codirect Live - Aula ao Vivo Toda Segunda",
    description: "A estratégia de bastidores que gera lucro e previsibilidade. Uma aula densa, sem enrolação, sobre como aplicar o Método Codirect no seu negócio local. De graça, toda segunda-feira.",
    openGraph: {
        title: "Codirect Live - Aula ao Vivo Toda Segunda",
        description: "Junte-se a +50.000 empresários que assistem semanalmente",
        type: "website",
    },
};

export default function LivePage() {
    return (
        <main className="w-full overflow-hidden">
            <LiveHeroSection />
            <LiveLearningSection />
            <LiveNextClassSection />
            <LiveTeachersSection />
            <LiveLibrarySection />
            <LiveCtaFooterSection />
            
            {/* Footer */}
            <footer className="py-20 px-4 bg-neutral-950 border-t border-neutral-900">
                <div className="max-w-5xl mx-auto text-center space-y-12">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Não deixe a próxima aula passar
                        </h2>
                        <button className="px-8 py-4 rounded-full bg-codirect-gold text-black font-semibold hover:bg-yellow-400 transition-colors inline-flex items-center gap-2 text-lg">
                            Receber Lembrete <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="pt-12 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex gap-6">
                            <a href="/" className="text-neutral-500 hover:text-white transition-colors text-sm font-medium">Home</a>
                            <a href="/" className="text-neutral-500 hover:text-white transition-colors text-sm font-medium">Produtos</a>
                            <a href="/" className="text-neutral-500 hover:text-white transition-colors text-sm font-medium">Contato</a>
                        </div>
                        <div className="flex gap-4">
                            <a href="#" className="text-neutral-500 hover:text-codirect-gold transition-colors"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="text-neutral-500 hover:text-codirect-gold transition-colors"><Linkedin className="w-5 h-5" /></a>
                            <a href="#" className="text-neutral-500 hover:text-codirect-gold transition-colors"><Youtube className="w-5 h-5" /></a>
                        </div>
                        <div className="text-neutral-600 text-sm">
                            © {new Date().getFullYear()} CoDirect.
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}
