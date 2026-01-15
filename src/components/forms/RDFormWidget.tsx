"use client";

import { useEffect, useRef, useState } from "react";

interface RDStationFormProps {
    formId: string;
    formToken: string;
}

export function RDStationForm({ formId, formToken }: RDStationFormProps) {
    const [mounted, setMounted] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const scriptLoadedRef = useRef(false);

    useEffect(() => {
        // Garante que o componente está montado
        setMounted(true);
    }, []);

    useEffect(() => {
        // Só executa se estiver montado E se o container existir
        if (!mounted || !containerRef.current) {
            console.log('⏳ Aguardando container...');
            return;
        }

        // Verifica se já foi carregado
        if (scriptLoadedRef.current) {
            console.log('✅ Script já foi carregado');
            return;
        }

        console.log('🚀 Iniciando carregamento do RD Station Form');
        console.log('📦 Container ref:', containerRef.current);
        console.log('🆔 Form ID:', formId);

        const loadScript = () => {
            const scriptId = "rdstation-forms-script";
            let script = document.getElementById(scriptId) as HTMLScriptElement;

            if (script) {
                console.log('♻️ Script já existe, inicializando form...');
                initForm();
                return;
            }

            console.log('📥 Carregando script do RD Station...');
            script = document.createElement("script");
            script.id = scriptId;
            script.src = "https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js";
            script.async = true;
            
            script.onload = () => {
                console.log('✅ Script do RD Station carregado!');
                // Aguarda um pouco para garantir que tudo está pronto
                setTimeout(() => {
                    initForm();
                }, 300);
            };

            script.onerror = () => {
                console.error('❌ Erro ao carregar script do RD Station');
            };

            document.body.appendChild(script);
        };

        const initForm = () => {
            if (!containerRef.current) {
                console.error('❌ Container não encontrado!');
                return;
            }

            if (!window.RDStationForms) {
                console.error('❌ RDStationForms não disponível');
                // Tenta novamente após 500ms
                setTimeout(initForm, 500);
                return;
            }

            try {
                console.log('🎨 Criando formulário RD Station...');
                console.log('📍 Container ID no DOM:', document.getElementById(formId));
                
                // Limpa o container
                containerRef.current.innerHTML = "";
                
                // Cria o formulário
                new window.RDStationForms(formId, formToken).createForm();
                scriptLoadedRef.current = true;
                console.log('✅ Formulário criado com sucesso!');

                // Aplica estilos após o form estar criado
                setTimeout(() => {
                    applyCustomStyles();
                }, 1000);

            } catch (error) {
                console.error('❌ Erro ao criar formulário:', error);
            }
        };

        const applyCustomStyles = () => {
            if (!containerRef.current) return;
            console.log('🎨 Aplicando estilos customizados...');

            const container = containerRef.current;
            
            // Seus estilos customizados aqui...
            const inputs = container.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], textarea');
            const selects = container.querySelectorAll('select');
            const buttons = container.querySelectorAll('button[type="submit"], input[type="submit"]');

            inputs.forEach((input: any) => {
                input.style.cssText = `
                    width: 100% !important;
                    padding: 1rem 1.25rem !important;
                    background-color: transparent !important;
                    border: 1.5px solid rgba(212, 175, 55, 0.25) !important;
                    border-radius: 0.75rem !important;
                    color: white !important;
                    font-size: 0.9375rem !important;
                    outline: none !important;
                `;
            });

            selects.forEach((select: any) => {
                select.style.cssText = `
                    width: 100% !important;
                    padding: 1rem 1.25rem !important;
                    background-color: transparent !important;
                    border: 1.5px solid rgba(212, 175, 55, 0.25) !important;
                    border-radius: 0.75rem !important;
                    color: white !important;
                    cursor: pointer !important;
                `;
            });

            buttons.forEach((button: any) => {
                button.style.cssText = `
                    width: 100% !important;
                    padding: 1.125rem 1.5rem !important;
                    background: #D4AF37 !important;
                    color: #000000 !important;
                    font-weight: 700 !important;
                    border: none !important;
                    border-radius: 0.75rem !important;
                    cursor: pointer !important;
                    text-transform: uppercase !important;
                `;
            });
        };

        // Inicia o carregamento
        loadScript();

    }, [mounted, formId, formToken]);

    if (!mounted) {
        return (
            <div className="w-full min-h-[300px] flex items-center justify-center">
                <p className="text-neutral-400">Carregando...</p>
            </div>
        );
    }

    return (
        <div className="w-full min-h-[300px] relative">
            <div
                ref={containerRef}
                role="main"
                id={formId}
                className="w-full"
            />
        </div>
    );
}

declare global {
    interface Window {
        RDStationForms: any;
    }
}

// Export default para compatibilidade
export default RDStationForm;
