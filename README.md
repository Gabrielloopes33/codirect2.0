# Codirect 2.0

![Codirect 2.0](public/hero-bg.png)

Uma landing page de alta performance e focada em conversão para a **Codirect**, desenvolvida com **Next.js 16**, **Tailwind CSS v4** e **Clean Architecture**.

## 🚀 Funcionalidades

- **Estética Moderna**: Modo escuro por padrão, efeitos de vidro (glassmorphism) e tipografia premium (Geist Sans).
- **Layout Bento Grid**: Layout responsivo em grade para exibir a metodologia e os diferenciais.
- **Clean Architecture**: Separação clara de responsabilidades em Domínio (Tipos), Infraestrutura (Conteúdo) e Apresentação (Componentes).
- **Otimização de Performance**: Imagens locais com cache-busting, otimização nativa do Next.js e carregamento estático.
- **Mobile First**: Design totalmente responsivo com menu de navegação móvel personalizado.

## 🛠 Tecnologias

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Estilização**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animação**: [Framer Motion](https://www.framer.com/motion/)
- **Ícones**: [Lucide React](https://lucide.dev/)
- **Linguagem**: TypeScript

## 🏗 Arquitetura

O projeto segue uma **Clean Architecture** modificada e adaptada para aplicações React:

```
src/
├── core/           # Camada de Domínio (Interfaces e Regras de Negócio)
│   └── types.ts    # Definições de conteúdo
├── infrastructure/ # Camada de Infraestrutura (Repositórios de Conteúdo)
│   └── content.repo.ts
├── components/     # Camada de Apresentação
│   ├── bento/      # Sistema de Grid Reutilizável
│   ├── sections/   # Seções específicas da página
│   └── layout/     # Componentes globais (Navbar)
└── app/            # Composition Root (Páginas Next.js)
```

## 🏃‍♂️ Como Começar

1. **Clone o repositório**
   ```bash
   git clone https://github.com/Gabrielloopes33/codirect2.0.git
   cd codirect2.0
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Rode o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Acesse no navegador**
   Visite [http://localhost:3000](http://localhost:3000)

## 🎨 Seções do Projeto

- **Hero**: Fundo imersivo com proposta de valor clara.
- **Villain**: Comparação "Velho Marketing" vs "Jeito CoDirect".
- **Metodologia**: Processo de 5 passos exibido em Bento Grid.
- **Prova Social**: Métricas, Prêmios (Exame, GPTW) e Depoimentos.
- **Sobre & Instagram**: Construção de marca e engajamento social.

## 📝 Licença

Este projeto é proprietário da Codirect.
