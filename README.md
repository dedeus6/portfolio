<div align="center">

# Filipe Deus — Portfolio

**Desenvolvedor Full-Stack** · Brasília, BR

[![Deploy](https://img.shields.io/badge/deploy-Vercel-black?logo=vercel&logoColor=white)](https://vercel.com)
[![Next.js](https://img.shields.io/badge/Next.js-16.2.6-black?logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

[🌐 Ver online](#) · [📄 CV](public/filipe-deus-cv.pdf)

</div>

---

## Sobre o Projeto

Portfolio pessoal desenvolvido com foco em **SEO de alto desempenho**, **design moderno** e **performance máxima**. Site 100% estático, frontend-only, sem dependência de backend. Disponível em português (BR) e inglês.

---

## Stack

| Camada | Tecnologia | Versão |
|---|---|---|
| Framework | Next.js (App Router) | 16.2.6 |
| UI | React | 19.2.4 |
| Linguagem | TypeScript (strict) | 5 |
| Estilização | Tailwind CSS | v4 |
| i18n | next-intl | ^4.12 |
| Fontes | Geist Sans & Geist Mono | via `next/font` |
| Deploy | Vercel / Netlify | — |

---

## Funcionalidades

- **Bilingue** — Português (BR) e Inglês, com troca de idioma sem reload e roteamento por URL (`/en`)
- **Dark / Light mode** — Detecção automática via `prefers-color-scheme`, persistido em `localStorage`
- **SEO completo** — Metadata API do Next.js, JSON-LD (Person schema), Open Graph, Twitter Card, sitemap e robots gerados automaticamente
- **Server Components por padrão** — HTML renderizado no servidor para crawlers e performance
- **Cursor interativo** — Efeito de brilho que acompanha o cursor (apenas desktop)
- **One-page** — Todas as seções em uma única página com smooth scroll
- **CV para download** — Arquivo PDF servido estaticamente

---

## Seções

| Seção | Descrição |
|---|---|
| **Hero** | Apresentação com status, cargo, stack e foto de perfil |
| **Sobre** | Bio e metadados (localização, idiomas, foco atual) |
| **Experiência** | Linha do tempo de carreira com 5 posições |
| **Skills** | Habilidades agrupadas em 7 categorias |
| **Cases** | 6 projetos de produção com descrições detalhadas |
| **Formação** | Pós-graduação, graduação, intercâmbio e certificações |
| **Contato** | E-mail, LinkedIn e localização |

---

## Estrutura de Arquivos

```
portfolio/
├── app/
│   ├── layout.tsx            # Layout raiz (fontes, JSON-LD, tema)
│   ├── page.tsx              # Redireciona para rota com locale
│   ├── globals.css           # Tokens de design, Tailwind v4
│   └── [locale]/
│       ├── layout.tsx        # Layout com i18n
│       └── page.tsx          # Home page
├── components/
│   ├── nav.tsx               # Barra de navegação
│   ├── hero.tsx              # Seção hero
│   ├── about.tsx             # Sobre
│   ├── experience.tsx        # Experiência
│   ├── skills.tsx            # Skills
│   ├── cases.tsx             # Cases
│   ├── education.tsx         # Formação
│   ├── contact.tsx           # Contato
│   ├── footer.tsx            # Rodapé
│   ├── theme-toggle.tsx      # Botão dark/light
│   ├── locale-switcher.tsx   # Troca de idioma
│   └── cursor-glow.tsx       # Efeito de cursor
├── i18n/
│   ├── routing.ts            # Configuração de locales
│   └── request.ts            # Carregamento de mensagens
├── messages/
│   ├── pt-BR.json            # Traduções em português
│   └── en.json               # Traduções em inglês
└── public/
    ├── images/               # Foto de perfil
    ├── filipe-deus-cv.pdf    # CV para download
    └── og.png                # Open Graph image
```

---

## Como Rodar Localmente

**Pré-requisitos:** Node.js 20+ e npm.

```bash
# Clone o repositório
git clone https://github.com/filipedeus/portfolio.git
cd portfolio

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

```bash
# Build de produção
npm run build

# Iniciar servidor de produção
npm start

# Lint
npm run lint
```

---

## SEO

O SEO é o principal diferencial técnico do projeto.

- **Metadata API** do Next.js com `title.template`, `description`, Open Graph e Twitter Card em todas as páginas
- **JSON-LD** na home com schema `Person` do Schema.org — interpretado pelo Google para rich results
- **`app/sitemap.ts`** — sitemap gerado automaticamente com todas as URLs e `lastModified`
- **`app/robots.ts`** — `robots.txt` gerado automaticamente, liberando crawlers e apontando para o sitemap
- **`next/image`** — lazy loading, formato WebP/AVIF, `alt` descritivo em todas as imagens
- **`next/font`** — zero layout shift, sem requisições externas de fonte em runtime
- **Static generation** — todas as páginas pré-renderizadas no build

---

## Design System

Cores definidas com variáveis CSS usando o espaço de cor moderno **OKLCh**, com suporte a dark e light mode:

```css
/* Accent teal — consistente em ambos os temas */
--accent: oklch(0.74 0.13 168);

/* Dark mode (padrão) */
--bg:         #08090b;
--text:       #ececef;

/* Light mode */
--bg:         #fbfbfa;
--text:       #15161a;
```

Sem `tailwind.config.js` — configuração via `@theme` no CSS (Tailwind v4).

---

## Deploy

O projeto está otimizado para **Vercel** (zero-config para Next.js), mas também funciona no **Netlify**.

```bash
# Via Vercel CLI
npx vercel --prod
```

Antes do deploy em produção, atualize o `metadataBase` em `app/layout.tsx` com a URL definitiva:

```ts
metadataBase: new URL("https://filipedeus.dev"),
```

---

## Licença

Este projeto é de uso pessoal. O código pode servir de referência e inspiração, mas o conteúdo (textos, foto, CV e identidade visual) pertence exclusivamente a **Filipe Deus**.

---

<div align="center">

Feito com Next.js · Tailwind CSS · React 19

</div>
