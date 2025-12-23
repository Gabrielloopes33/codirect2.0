import { HomePageContent } from "@/core/types";

export const contentRepository: HomePageContent = {
    hero: {
        title: "Posicionar para Vender Mais.",
        subtitle:
            'Implemente o método validado em +1.400 negócios para atrair os clientes certos e ter crescimento previsível de lucro.',
        ctaPrimary: "Agendar Sessão Estratégica",
        ctaSecondary: "Ver o Método em Ação",
        microCopy: [
            "✅ Não somos Agência",
            "✅ Não é Curso Básico",
            "✅ Acompanhamento de Verdade",
        ],
    },
    villain: {
        title: 'O Fim da "Panfletagem Digital"',
        mainText:
            'Até 2017, postar "Bom dia" e fotos de produtos funcionava. Hoje, isso é apenas ruído. Se o seu feed virou um catálogo de ofertas que não gera engajamento, você caiu na armadilha da Panfletagem Digital.',
        comparison: {
            oldMarketing: [
                "Foca em curtidas",
                "Atrai curiosos",
                '"Posta e reza" para vender',
                "Guerra de preços",
            ],
            codirectWay: [
                "Foca em lucro",
                "Atrai compradores qualificados",
                "Sistema de vendas previsível",
                "Diferencial de valor claro",
            ],
        },
    },
    methodology: {
        title: "Um Método. 5 Passos. Controle Total.",
        steps: [
            {
                title: "Diferencial de Valor",
                copy: 'Não seja "mais um". Definimos o seu posicionamento único para que o cliente o escolha pelo valor, não pelo menor preço.',
            },
            {
                title: "Cliente Ideal",
                copy: 'Paramos de falar com "todo mundo". Identificamos exatamente quem valoriza o seu serviço e tem dinheiro para pagar por ele.',
            },
            {
                title: "Conteúdo Influente",
                copy: "Adeus posts genéricos. Criamos conteúdo estratégico que educa, gera autoridade e prepara o terreno para a venda.",
            },
            {
                title: "Efeito Bola de Neve",
                copy: "Transformamos o seu tráfego. Usamos anúncios para atrair novas pessoas qualificadas todos os dias, criando uma audiência que não para de crescer.",
            },
            {
                title: "Vendas Escondidas",
                copy: 'A nossa "arma secreta". Anúncios invisíveis que aparecem apenas para quem já está pronto para comprar.',
            },
        ],
    },
    socialProof: {
        title: "Resultados Reais. Sem Mágica.",
        stats: [
            { label: "Negócios Impactados", value: "+1.400" },
            { label: "Crescimento médio (6 meses)", value: "100% a 200%" },
            { label: "Menos tempo operacional", value: "50%" },
        ],
        testimonial: {
            quote:
                "Saí de um faturamento estagnado para um crescimento de 200%, atraindo 10x mais clientes qualificados.",
            author: "Lia Herrmann",
            role: "Arquiteta",
        },
    },
    about: {
        title: "Quem é a Codirect",
        text: [
            "A Codirect é uma empresa especializada em posicionamento de negócios que querem vender mais e querem crescer com previsibilidade.",
            "Com sede em Florianópolis-SC e uma equipe de quase 30 profissionais, atuamos há mais de 12 anos ajudando empresas de serviços a se posicionarem.",
            "Nossa metodologia própria foi desenhada para negócios que vendem serviços de alto valor agregado e estão cansados de depender de curiosos.",
            "Já impactamos mais de 8.500 empresas nas áreas de saúde, estética, odontologia, arquitetura e serviços especializados."
        ],
        image: "/about-codirect-v2.png"
    },
    instagram: {
        title: "Acompanhe nosso conteúdo",
        subtitle: "Siga nossa rede social e acompanhe nossos conteúdos diariamente",
        buttonText: "Quero acompanhar",
        image: "/instagram-section-v2.png"
    },
    award: {
        label: "RECONHECIMENTO",
        title: "PRÊMIO EXAME NEGÓCIOS EM EXPANSÃO",
        description: "Pelo terceiro ano consecutivo, a Codirect foi selecionada no Ranking EXAME Negócios em Expansão 2024, na categoria de empresas com faturamento entre R$ 5 e 10 milhões!",
        image: "/award-section-v2.png"
    },
    footer: {
        cta: "O seu próximo nível de faturamento começa com uma conversa.",
        buttonText: "Aplicar para Sessão Estratégica",
        links: ["Método", "Cases", "Blog", "Login Aluno"],
    },
};
