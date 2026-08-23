# Instituto Arvoredo Basquetebol — Site

Landing page de captação (patrocínio e doação) do Instituto Arvoredo Basquetebol, projeto social de basquete nos Ingleses, Florianópolis/SC.

Site 100% estático: HTML + CSS + JS puro, sem build e sem dependências.

## Estrutura

- `index.html` — landing page
- `certificado.html` — emissor de certificados (USO INTERNO; **não** vai para o GitHub)
- `styles.css` / `script.js` — estilos e interações
- `assets/` — fotos otimizadas, logos da marca e fontes
- `DESIGN.md` — guia de design do projeto

## Como publicar (Cloudflare Pages via GitHub)

Repositório: https://github.com/Mosimann-adv/arvoredo-web-page

O site é estático (sem build). No painel da Cloudflare:

1. **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. Autorize a org `Mosimann-adv` e selecione `arvoredo-web-page`
3. Configure:
   - Production branch: `main`
   - Framework preset: **None**
   - Build command: *(vazio)*
   - Build output directory: `/`
4. **Save and Deploy**

URL padrão: `https://arvoredo-web-page.pages.dev` (ou o subdomínio que a Cloudflare atribuir). Dá para apontar um domínio customizado depois em Custom domains.

## Atualizações

```bash
git add .
git commit -m "descrição da mudança"
git push
```

A Cloudflare reconstrói sozinha a cada push em `main`.

## IMPORTANTE — certificado.html

A emissão de certificados exige a chave de acesso embutida no código (`?key=...`). Como o site é estático, essa proteção é leve: qualquer pessoa que ler o código-fonte publicado encontra a chave.

O arquivo está no `.gitignore`. A coordenação emite certificados abrindo `certificado.html` localmente no navegador.

## Dados a manter atualizados

- Chave Pix (CNPJ): 56.660.275/0001-06 — refletida no QR (`assets/img/pix-qr.png`), na chave copiável e no payload
- WhatsApp: (48) 9664-1051
- Instagram: @arvoredo.basquetebol
