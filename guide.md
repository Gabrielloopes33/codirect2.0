# 📘 Guia de Desenvolvimento: CoDirect 2.0 (Next.js + Tailwind)

Este documento serve como a "Fonte da Verdade" para o design, copywriting e lógica de negócio do projeto CoDirect.

## 1. Identidade Visual & Design System

### Paleta de Cores
O site deve alternar entre um tema "Dark Premium" (dominante) e secções de "High Contrast" (Claro).
- **Primary Dark (Background):** `#0a0a0a` (Preto Rico)
- **Secondary Dark (Cards/Surface):** `#121212` (Cinza Chumbo)
- **Primary Gold (Accent/CTA):** `#D4AF37` (Dourado Clássico)
- **Hover Gold:** `#b5952f`
- **Text White:** `#F4F4F5`
- **Text Muted:** `#A1A1AA`
- **Pure White (Secções Claras):** `#FFFFFF`

### Tipografia
- **Família:** Sans-serif geométrica (Inter, Plus Jakarta Sans ou Manrope).
- **Títulos:** Bold/Extrabold, tracking tight (letras juntas).
- **Corpo:** Regular, leading-relaxed (espaçamento confortável).

### Componentes de UI (Estilo)
- **Bento Grids:** Layouts modulares, caixas arredondadas (`rounded-2xl` ou `rounded-3xl`), bordas finas (`border-white/10`).
- **Glassmorphism:** Uso de `backdrop-blur-md` e transparências em overlays.
- **Botões:**
  - *Primário:* Fundo Dourado, Texto Preto, Bold, Hover com leve Scale.
  - *Secundário:* Borda Branca/Cinza, Fundo Transparente, Texto Branco.

---

## 2. Estratégia de Conteúdo (Copywriting & Hooks)
*Baseado nos documentos "Método Codirect"*

**Tom de Voz:** Autoritativo, Direto, "Anti-Agência Tradicional", Focado em Lucro e Previsibilidade.

### Vocabulário Obrigatório (Keywords)
- **NÃO USAR:** "Somos uma agência full-service", "Fazemos posts bonitos".
- [cite_start]**USAR:** "Método de 5 Passos", "Fim da Panfletagem Digital" [cite: 93][cite_start], "Conteúdo Influente" [cite: 116][cite_start], "Mecanismo das Vendas Escondidas (MVE)" [cite: 252][cite_start], "Sessão Estratégica"[cite: 472].

### Promessa de Valor (Value Proposition)
- [cite_start]**Público Alvo:** Donos de negócio local que faturam > R$ 30k/mês[cite: 432].
- [cite_start]**Dor:** "Mês bom, mês ruim" (Falta de previsibilidade) [cite: 434][cite_start], "Panfletagem Digital" (Postar oferta e ninguém curtir)[cite: 93].
- [cite_start]**Solução:** Estruturar um processo de vendas previsível, atraindo o cliente certo e afastando curiosos[cite: 4].

---

## 3. Estrutura das Páginas (Sitemap & Requisitos)

### A. Home Page (`/`)
A Home deve ser uma *Sales Letter* visual.

1.  **Hero Section (Dark):**
    * Headline: "Posicionar para Vender Mais" (Foco em previsibilidade).
    * [cite_start]Subheadline: Validado em +1.400 negócios[cite: 490].
    * CTA: "Agendar Sessão Estratégica".

2.  **A Quebra de Padrão (White Section):**
    * **Conceito:** Explicar o fim da "Panfletagem Digital".
    * **Elemento:** Vídeo de apresentação ou gráfico comparativo (Velho Marketing vs. Método Codirect).
    * [cite_start]**Copy:** Explicar que "Likes não pagam contas" e a diferença de Panfletagem vs. Conteúdo Influente[cite: 96, 117].

3.  **O Método em 5 Passos (Bento Grid - Dark):**
    * Exibir os 5 passos como Cards Interativos:
        1.  [cite_start]**Diferencial de Valor:** Posicionamento único[cite: 27].
        2.  [cite_start]**Cliente Ideal:** Definição de persona[cite: 61].
        3.  [cite_start]**Conteúdo Influente:** Educar e conectar, não só vender[cite: 90].
        4.  [cite_start]**Efeito Bola de Neve:** Tráfego pago para crescer audiência qualificada[cite: 157].
        5.  [cite_start]**Mecanismo de Vendas Escondidas:** Anúncios de conversão só para quem já engaja[cite: 252].

4.  **Cases de Sucesso (Carrossel ou Grid):**
    * [cite_start]Focar nos números: "ROI de 10-60x" [cite: 344][cite_start], "Crescimento de 100-200% em 6 meses"[cite: 334].
    * [cite_start]Exemplos: Arquiteta (Lia)[cite: 492], Dentistas, Clínicas.

5.  **Funil Visual (Gráfico Animado):**
    * [cite_start]Mostrar o funil: Audiência -> Leads -> Vendas[cite: 166].

### B. Página de Aplicação/Formulário (`/aplicacao`)
Não é um "Fale Conosco" simples. É uma **aplicação** para mentoria.

* **Estilo:** Typeform (Step-by-step) ou Formulário Clean em Card Centralizado.
* **Perguntas de Qualificação:**
    * Qual seu faturamento médio mensal? (Opções: <10k, 10k-30k, 30k-50k, 50k+) [cite_start][cite: 432].
    * Qual seu nicho de atuação?
    * Você tem capacidade de atender mais clientes hoje?

---

## 4. Instruções Técnicas para a IA

1.  **Framework:** Use Next.js 14+ (App Router).
2.  **Estilização:** Use Tailwind CSS. Não crie arquivos CSS separados, use classes utilitárias.
3.  **Animações:** Use `framer-motion` para:
    * *Fade In Up* nos textos.
    * *Stagger Children* nas listas e grids.
    * *Hover Effects* suaves nos cartões Bento.
4.  **Ícones:** Use `lucide-react`.
5.  **Responsividade:** Mobile-first. No mobile, as Grids viram colunas únicas (Stack).