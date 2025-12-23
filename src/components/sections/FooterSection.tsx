import { FooterContent } from "@/core/types";
import { ArrowRight, Instagram, Linkedin, Youtube } from "lucide-react";

interface FooterSectionProps {
    content: FooterContent;
}

export function FooterSection({ content }: FooterSectionProps) {
    return (
        <footer className="py-20 px-4 bg-neutral-950 border-t border-neutral-900">
            <div className="max-w-5xl mx-auto text-center space-y-12">
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        {content.cta}
                    </h2>
                    <button className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-colors inline-flex items-center gap-2 text-lg">
                        {content.buttonText} <ArrowRight className="w-5 h-5" />
                    </button>
                </div>

                <div className="pt-12 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex gap-6">
                        {content.links.map((link, i) => (
                            <a key={i} href="#" className="text-neutral-500 hover:text-white transition-colors text-sm font-medium">
                                {link}
                            </a>
                        ))}
                    </div>
                    <div className="flex gap-4">
                        <a href="#" className="text-neutral-500 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                        <a href="#" className="text-neutral-500 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                        <a href="#" className="text-neutral-500 hover:text-white transition-colors"><Youtube className="w-5 h-5" /></a>
                    </div>
                    <div className="text-neutral-600 text-sm">
                        © {new Date().getFullYear()} CoDirect.
                    </div>
                </div>
            </div>
        </footer>
    );
}
