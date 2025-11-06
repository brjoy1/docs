# 🌟 Base Nobre - Site Astro

Site moderno de higienização de carpetes construído com **Astro** - transformado de código HTML/CSS/JS injetável para uma arquitetura modular e otimizada.

## 🚀 Tecnologias

- **[Astro](https://astro.build)** - Framework moderno com zero JavaScript por padrão
- **TypeScript** - Tipagem estática para maior segurança
- **CSS Moderno** - Design tokens e variáveis CSS
- **Material Symbols** - Ícones do Google

## ✨ Características

- ⚡ **Performance otimizada** - Zero JS desnecessário
- 🎨 **Design System** - Tokens CSS reutilizáveis
- 📦 **Componentes modulares** - Fácil de manter e escalar
- 🔍 **SEO otimizado** - Meta tags e Open Graph configurados
- 📱 **Responsivo** - Mobile-first design
- ♿ **Acessível** - Semântica HTML correta

## 📁 Estrutura do Projeto

```
projeto-astro/
├── src/
│   ├── components/       # Componentes reutilizáveis
│   │   ├── Button.astro
│   │   ├── Hero.astro
│   │   ├── HighlightItem.astro
│   │   └── StatItem.astro
│   ├── layouts/          # Layouts base
│   │   └── Layout.astro
│   ├── pages/            # Páginas (rotas automáticas)
│   │   └── index.astro
│   ├── scripts/          # Scripts TypeScript
│   │   └── whatsapp.ts
│   └── styles/           # Estilos globais
│       ├── tokens.css    # Design tokens
│       └── global.css    # Estilos base
├── public/               # Assets estáticos
├── astro.config.mjs      # Configuração Astro
├── package.json
├── tsconfig.json
└── README.md
```

## 🛠️ Instalação

1. **Instale as dependências:**

```bash
npm install
```

2. **Configure o número do WhatsApp:**

Edite o arquivo `src/scripts/whatsapp.ts` e altere o número:

```typescript
const WHATSAPP_CONFIG = {
  number: '5511999999999', // ALTERE PARA SEU NÚMERO
  defaultMessage: 'Olá! Gostaria de solicitar um orçamento...',
};
```

## 🚀 Comandos

| Comando          | Ação                                      |
| :--------------- | :---------------------------------------- |
| `npm install`    | Instala as dependências                   |
| `npm run dev`    | Inicia servidor local em `localhost:4321` |
| `npm run build`  | Gera build de produção em `./dist/`       |
| `npm run preview`| Preview do build local                    |

## 🎨 Personalização

### Design Tokens

Edite `src/styles/tokens.css` para customizar cores, fontes e espaçamentos:

```css
:root {
  --base-nobre-primary: #F4D03F;
  --base-nobre-accent: #FFC107;
  /* ... mais tokens */
}
```

### Componentes

Todos os componentes aceitam props para customização:

```astro
<Hero
  title="Seu título"
  subtitle="Seu subtítulo"
  primaryCta={{ text: 'Botão', icon: 'chat', onClick: '...' }}
/>
```

## 📝 Melhorias vs Código Original

| Aspecto            | Antes (HTML/CSS/JS)     | Depois (Astro)          |
| :----------------- | :---------------------- | :---------------------- |
| **Manutenção**     | Tudo em um arquivo      | Componentes modulares   |
| **Performance**    | JS desnecessário        | Zero JS por padrão      |
| **Reutilização**   | Copy/paste              | Import de componentes   |
| **SEO**            | Manual                  | Automatizado            |
| **Build**          | Sem otimização          | Minificação e bundling  |
| **TypeScript**     | ❌                      | ✅                      |

## 🔧 Próximos Passos

- [ ] Adicionar mais seções (Serviços, Depoimentos, Contato)
- [ ] Integrar Google Analytics
- [ ] Adicionar testes automatizados
- [ ] Implementar formulário de contato
- [ ] Adicionar animações com View Transitions
- [ ] Criar CMS com Astro Content Collections

## 📚 Documentação

- [Documentação Astro](https://docs.astro.build)
- [Astro Discord](https://astro.build/chat)

## 📄 Licença

MIT License - sinta-se livre para usar em seus projetos!

---

**Desenvolvido com ❤️ usando Astro**
