# 📖 Guia Rápido - Base Nobre Astro

## 🚀 Começando em 5 minutos

### 1. Instale as dependências

```bash
cd projeto-astro
npm install
```

### 2. Configure o WhatsApp

Abra `src/scripts/whatsapp.ts` e altere o número:

```typescript
const WHATSAPP_CONFIG = {
  number: '5511999999999', // SEU NÚMERO AQUI
  defaultMessage: 'Olá! Gostaria de solicitar um orçamento...',
};
```

### 3. Inicie o servidor

```bash
npm run dev
```

Acesse: http://localhost:4321

## 🎨 Customizando Cores

Edite `src/styles/tokens.css`:

```css
:root {
  --base-nobre-primary: #F4D03F;    /* Sua cor principal */
  --base-nobre-accent: #FFC107;     /* Cor de acento */
  --base-nobre-ink: #2C3E50;        /* Cor do texto */
}
```

## ✏️ Editando Conteúdo

### Título e Subtítulo

Abra `src/pages/index.astro`:

```astro
<Hero
  title="Seu novo título aqui"
  subtitle="Seu novo subtítulo aqui"
/>
```

### Highlights (Destaques)

```astro
<Hero
  highlights={[
    { icon: 'receipt_long', text: 'Seu destaque 1' },
    { icon: 'credit_card', text: 'Seu destaque 2' },
    { icon: 'schedule', text: 'Seu destaque 3' }
  ]}
/>
```

### Estatísticas

```astro
<Hero
  stats={[
    { number: '+15A', label: 'Anos' },
    { number: '100+', label: 'Clientes' },
    { number: '24h', label: 'Atendimento' }
  ]}
/>
```

## 🔍 Ícones Disponíveis

Lista de ícones Material Symbols: https://fonts.google.com/icons

Exemplos populares:
- `chat` - Chat/WhatsApp
- `mail` - Email
- `phone` - Telefone
- `schedule` - Relógio
- `check_circle` - Check
- `star` - Estrela
- `local_shipping` - Entrega
- `security` - Segurança

## 📱 Adicionando WhatsApp

### No botão:

```astro
<Button
  variant="primary"
  icon="chat"
  onClick="abrirChatBaseNobre()"
>
  Falar no WhatsApp
</Button>
```

### Com mensagem personalizada:

```astro
<Button
  onClick="abrirChatBaseNobre('Olá! Quero um orçamento especial.')"
>
  Orçamento Especial
</Button>
```

## 🏗️ Build para Produção

```bash
npm run build
```

Os arquivos serão gerados em `dist/` prontos para deploy!

## 📤 Deploy

### Vercel (Recomendado)

```bash
npm i -g vercel
vercel
```

### Netlify

```bash
npm i -g netlify-cli
netlify deploy
```

### Outros

O Astro gera arquivos estáticos em `dist/`. Você pode hospedar em:
- GitHub Pages
- Cloudflare Pages
- AWS S3 + CloudFront
- Qualquer servidor web

## 🆘 Problemas Comuns

### Erro ao importar componentes

✅ Use caminhos relativos:
```astro
import Hero from '../components/Hero.astro';
```

### Estilos não aplicados

✅ Verifique se o `global.css` está importado no Layout:
```astro
<style is:global>
  @import '../styles/global.css';
</style>
```

### WhatsApp não abre

✅ Verifique o número no formato correto:
```typescript
number: '5511999999999' // +55 11 99999-9999
```

## 💡 Dicas Pro

### 1. Crie mais páginas

Crie arquivos em `src/pages/`:
- `src/pages/servicos.astro` → `/servicos`
- `src/pages/contato.astro` → `/contato`

### 2. Reutilize componentes

```astro
// src/components/MeuComponente.astro
<div class="meu-componente">
  <slot />
</div>
```

### 3. Adicione Google Analytics

No `Layout.astro`, adicione antes de `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 📚 Mais Recursos

- [Documentação Astro](https://docs.astro.build)
- [Astro Discord](https://astro.build/chat)
- [Material Symbols](https://fonts.google.com/icons)

---

**Precisa de ajuda?** Abra uma issue no GitHub!
