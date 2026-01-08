# 🚀 Quick Performance Checklist

Use este checklist antes de cada deploy para garantir máxima performance.

## 📦 Antes do Deploy

### Imagens
- [ ] Todas as imagens estão otimizadas (comprimidas)
- [ ] Usar formatos modernos (WebP/AVIF) quando possível
- [ ] Tamanhos apropriados para cada breakpoint
- [ ] Lazy loading ativado para imagens abaixo da fold
- [ ] Alt text descritivo em todas as imagens

### CSS/JS
- [ ] Remover CSS não utilizado
- [ ] Remover console.logs do código
- [ ] Minificação ativada
- [ ] Tree shaking funcionando

### Fonts
- [ ] Usar apenas fonts necessárias
- [ ] Subsets corretos (latin, etc)
- [ ] Font-display: swap configurado

### Third-party Scripts
- [ ] Carregar scripts de forma assíncrona (async/defer)
- [ ] Preconnect para domínios externos críticos
- [ ] Lazy load para scripts não críticos

## 🧪 Testes de Performance

### Local
```bash
# Build de produção
npm run build

# Analisar bundle
npm run build && npx @next/bundle-analyzer
```

### Online
1. **Lighthouse (Chrome DevTools)**
   - Abrir DevTools (F12)
   - Aba Lighthouse
   - Modo: Desktop e Mobile
   - Categoria: Performance, Accessibility, Best Practices, SEO

2. **GTmetrix** (https://gtmetrix.com)
   - Teste de Waterloo, Canada
   - Verificar PageSpeed e YSlow scores
   - Analisar waterfall chart

3. **WebPageTest** (https://www.webpagetest.org)
   - Teste de múltiplas locations
   - First View e Repeat View
   - Verificar filmstrip

## 📊 Métricas Alvo

### Core Web Vitals
| Métrica | Bom | Melhorar | Ruim |
|---------|-----|----------|------|
| LCP | ≤ 2.5s | 2.5-4.0s | > 4.0s |
| FID | ≤ 100ms | 100-300ms | > 300ms |
| CLS | ≤ 0.1 | 0.1-0.25 | > 0.25 |

### Lighthouse Scores
| Categoria | Mínimo Aceitável | Ideal |
|-----------|------------------|-------|
| Performance | 80 | 90+ |
| Accessibility | 90 | 95+ |
| Best Practices | 95 | 100 |
| SEO | 95 | 100 |

## 🔧 Troubleshooting Comum

### LCP Alto (> 2.5s)
- ✅ Otimizar imagens hero
- ✅ Preload recursos críticos
- ✅ Remover render-blocking resources
- ✅ Usar CDN

### FID Alto (> 100ms)
- ✅ Reduzir JavaScript principal
- ✅ Code splitting
- ✅ Lazy load componentes
- ✅ Web Workers para tarefas pesadas

### CLS Alto (> 0.1)
- ✅ Definir dimensões para imagens/vídeos
- ✅ Reservar espaço para ads/embeds
- ✅ Usar font-display: swap
- ✅ Não inserir conteúdo acima do conteúdo existente

### TTI Lento
- ✅ Reduzir bundle size
- ✅ Lazy load rotas
- ✅ Remover dependências não usadas
- ✅ Tree shaking

## 🎯 Otimizações Específicas do Projeto

### /live
- Modal lazy loaded
- Formulário otimizado
- Sem componentes pesados extras

### /sessao-estrategica
- KineticTestimonial com dynamic import
- LazyLoad wrapper para seções
- RD Station form otimizado

## 📝 Monitoramento Contínuo

### Google Analytics 4
- Configurar eventos de Core Web Vitals
- Monitorar métricas por página
- Alertas para degradação de performance

### Google Search Console
- Monitorar relatório Core Web Vitals
- Verificar URLs com problemas
- Acompanhar melhorias

### Netlify Analytics
- Monitorar tempos de carregamento
- Verificar taxas de erro
- Analisar bandwidth usage

## 🚨 Red Flags

Atenção se ver:
- ❌ Bundle JavaScript > 200KB (gzipped)
- ❌ LCP > 3s
- ❌ CLS > 0.25
- ❌ Imagens sem width/height
- ❌ Scripts render-blocking
- ❌ Fonts não otimizadas
- ❌ Muitos third-party scripts

## ✅ Quick Wins

Melhorias rápidas de performance:
1. Comprimir todas as imagens
2. Adicionar width/height em todas as imagens
3. Usar next/image para todas as imagens
4. Lazy load componentes pesados
5. Preconnect para domínios externos
6. Minificar CSS/JS
7. Habilitar compressão (Gzip/Brotli)
8. Configurar cache headers corretos
9. Remover console.logs
10. Tree shaking de bibliotecas

## 📚 Recursos

- [web.dev/vitals](https://web.dev/vitals)
- [Next.js Performance](https://nextjs.org/docs/advanced-features/measuring-performance)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
- [Bundle Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
