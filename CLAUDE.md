# Portfolio — CLAUDE.md

## Contexto do Projeto

Portfolio pessoal de Filipe Deus. Frontend-only (sem backend), com foco em SEO excelente, design moderno e alta performance. Implantação prevista em Vercel ou Netlify.

---

## Stack Técnica

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 16.2.6 (App Router) |
| Linguagem | TypeScript 5 — strict mode |
| Estilização | Tailwind CSS v4 |
| React | 19.2.4 |
| Fontes | Geist Sans & Geist Mono via `next/font/google` |

> **Atenção:** Next.js 16.2.6 pode ter breaking changes em relação a versões anteriores. Consulte `node_modules/next/dist/docs/` antes de escrever código e observe os avisos de deprecação.

---

## Arquitetura

### App Router

- Todas as rotas ficam em `app/`
- Páginas são **Server Components por padrão** — isso é essencial para SEO (HTML renderizado no servidor)
- Interatividade client-side usa diretiva `"use client"` apenas quando necessário
- Layouts: `app/layout.tsx` (raiz) + layouts por seção quando necessário

### Estrutura de Arquivos

```
app/
  layout.tsx            # Layout raiz — fontes, metadata padrão, providers globais
  page.tsx              # Home / hero
  globals.css           # Estilos globais, import Tailwind, variáveis CSS
  sitemap.ts            # Sitemap dinâmico (gerado automaticamente pelo Next.js)
  robots.ts             # robots.txt (gerado automaticamente pelo Next.js)
  opengraph-image.tsx   # OG image dinâmica (ou arquivo estático em public/)
  about/
    page.tsx
  projects/
    page.tsx
    [slug]/
      page.tsx
  contact/
    page.tsx
public/
  images/               # Imagens estáticas, foto de perfil, OG image estática
```

### Convenções de Estilização

- **Tailwind CSS v4** — usar `@import "tailwindcss"` (não as diretivas antigas `@tailwind base/components/utilities`)
- Variáveis CSS definidas em `:root` para theming (`--background`, `--foreground`, etc.)
- Dark mode via `prefers-color-scheme` — variáveis CSS redefinidas em `@media (prefers-color-scheme: dark)`
- Sem `tailwind.config.js` em v4 — configuração via `@theme` no CSS
- Imports absolutos via alias `@/`

---

## Estratégia de SEO

Este é o principal diferencial do projeto. Cada decisão técnica deve considerar o impacto no SEO.

### Metadata (Next.js Metadata API)

- Metadata padrão definida em `app/layout.tsx` (`title.default` + `title.template`)
- Cada página exporta `export const metadata: Metadata` com title e description específicos
- OpenGraph e Twitter Card configurados em todas as páginas
- `lang="pt-BR"` no `<html>` raiz

### Arquivos Especiais

- `app/sitemap.ts` — retorna `MetadataRoute.Sitemap` com todas as URLs e `lastModified`
- `app/robots.ts` — retorna `MetadataRoute.Robots` permitindo crawlers e apontando para o sitemap

### Dados Estruturados (JSON-LD)

Implementar JSON-LD na home page para `Person` schema:

```tsx
// Exemplo de componente JsonLd para home
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Filipe Deus",
  url: "https://filipedeus.dev", // atualizar com URL real
  jobTitle: "Desenvolvedor Full-Stack",
  sameAs: [
    "https://github.com/filipedeus",
    "https://linkedin.com/in/filipedeus",
  ],
};
```

### Checklist de SEO

- [ ] `next/image` para todas as imagens (otimização automática + `alt` descritivo)
- [ ] `next/font` para fontes (zero layout shift)
- [ ] `export const metadata` em todas as páginas
- [ ] JSON-LD na home page (Person schema)
- [ ] `app/sitemap.ts` implementado
- [ ] `app/robots.ts` implementado
- [ ] OG image configurada (estática ou dinâmica com `opengraph-image.tsx`)
- [ ] URLs canônicas (`metadataBase` definido no layout raiz)
- [ ] Core Web Vitals: LCP < 2.5s, CLS < 0.1, INP < 200ms

---

## Convenções de Código

- **Server Components por padrão** — nunca adicionar `"use client"` sem necessidade explícita
- **TypeScript estrito** — sem `any`, sem `as unknown`; usar tipos corretos
- **Sem comentários desnecessários** — nomes descritivos são suficientes
- **Imports absolutos** via `@/` (mapeado para a raiz do projeto em `tsconfig.json`)
- **`next/image`** obrigatório para imagens (proibido usar `<img>` diretamente)
- **`next/link`** para navegação interna (proibido usar `<a>` para rotas internas)

---

## Performance

- Fontes via `next/font` — sem requisições externas em runtime
- Imagens via `next/image` — lazy loading, sizing automático, formato moderno (WebP/AVIF)
- Static generation por padrão em páginas sem dados dinâmicos
- Sem bibliotecas client-side pesadas — preferir soluções CSS/nativas

---

## Internacionalização

Por enquanto apenas Português Brasileiro (`lang="pt-BR"`). Se adicionar i18n futuramente, usar `next-intl`.

---

## Deploy

- Target: Vercel (zero-config para Next.js) ou Netlify
- Variáveis de ambiente: nenhuma necessária na fase atual (sem backend)
- `metadataBase` no layout raiz deve ser atualizado com a URL de produção antes do deploy
