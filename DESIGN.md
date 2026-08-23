# Design System: Instituto Arvoredo Basquetebol — Landing Page de Captação

## 0. Contexto e Objetivo

Landing page de conversão dupla para um projeto social de basquete em Florianópolis (Ingleses):

1. **Empresas** → tornarem-se patrocinadoras parceiras
2. **Pessoas físicas** → doação única ou recorrente via Pix

Toda decisão de design serve à credibilidade e ao impacto emocional: o visitante precisa sentir autenticidade (fotos reais, conquistas reais) e confiança para investir. O tom é "esporte de verdade, comunidade de verdade" — nunca corporativo frio, nunca ONG genérica.

Prova social disponível (usar como conteúdo real):
- Moção de honra da Alesc (2023) — aprovada por unanimidade
- Selecionado no PAP/ACIF 2025 (R$ 17.000, categoria Saúde)
- PL 0162/2026 na ALEC propõe declará-lo de utilidade pública
- 100+ crianças e adolescentes atendidos
- Sem incentivo governamental — mantido por 14 escolas parceiras e empresários
- Idealizador: professor Nathaniell Paulo da Silva

---

## 1. Tema Visual & Atmosfera

Atmosfera de **quadra no fim de tarde**: energia quente de basquete de rua sobre uma base escura e sólida de azul-marinho profundo. Denso o suficiente para parecer sério e institucional; quente o suficiente para parecer humano e comunitário.

- **Density:** 4/10 — respiro generoso, foco total nas fotos reais e nos CTAs
- **Variance:** 6/10 — layouts assimétricos editoriais, mas com hierarquia clara de conversão
- **Motion:** 5/10 — fluido e físico (bolce levemente, entra em quadra), nunca chamativo demais

A página alterna blocos escuros (navy, imersão/emocional) e claros (creme, informação/confiança). Fotos reais dos atletas são o elemento dominante — a IA não deve competir com elas por atenção.

---

## 2. Paleta de Cores & Papéis

Cores oficiais da marca (kit de design do projeto — NÃO substituir):

- **Maré Fundo** (#133358) — Azul-marinho principal. Base de seções escuras: Hero, rodapé, seção de impacto. Texto claro sobre ele é sempre creme, nunca branco puro
- **Oceano Ação** (#015CA6) — Azul vibrante. Links, detalhes interativos, ícones informativos, gráficos. Nunca como cor de fundo grande
- **Coral Conversão** (#D96953) — Cor de ação primária. Botões de doação/patrocínio, CTAs de destaque, sublinhados de palavras-chave. É a cor que "pede"
- **Areia Papel** (#F8F1E0) — Creme. Fundo de seções claras, texto sobre navy, superfícies de cards. Substitui branco puro em toda a página
- **Sol Energia** (#EEA047) — Laranja. Destaques secundários, badges ("Moção Alesc 2023"), números grandes de impacto, hovers
- **Quadra Vibra** (#F3C44B) — Amarelo. Micro-detalhes de energia: marcadores, tags, bordas de destaque, estado hover do CTA coral. Nunca texto sobre creme

Regras:
- Contraste obrigatório: texto sobre navy = creme (#F8F1E0); texto sobre creme = navy (#133358)
- Nunca usar preto puro (#000000) nem branco puro (#FFFFFF) — a paleta já resolve isso
- Coral é reservada para ação; se todo elemento for destacado, nada é destacado

---

## 3. Tipografia

Fontes oficiais da marca:

- **Display:** Breymont Bold — títulos, números de impacto, headlines. Uppercase com tracking amplo para labels de seção; sentence case com tracking apertado (-2%) para headlines grandes. Fallback: Archivo Black / system sans bold
- **Body:** Poppins (ExtraLight 200 a Medium 500) — parágrafos, formulários, navegação. Regular 400 como peso padrão; ExtraLight apenas em textos decorativos grandes sobre navy. Leading relaxado (1.7), largura máxima 65ch
- **Números de impacto:** Breymont Bold gigante (clamp 3rem–6rem) em Sol Energia (#EEA047) sobre navy — ex: "100+", "14 escolas", "R$ 17 mil"

Hierarquia por peso e cor, não apenas tamanho. Labels de seção em uppercase pequeno com tracking 20% na cor Quadra Vibra ou Oceano Ação.

Banned: Inter, Roboto, Open Sans, qualquer serif genérica (Times New Roman, Georgia).

---

## 4. Componentes

### Botões
- **Primário (Doar / Ser Parceiro):** fundo Coral Conversão (#D96953), texto creme, cantos totalmente arredondados (pill), padding generoso (16px 32px), sombra difusa tingida de navy (nunca glow neon). Hover: desliza para Quadra Vibra (#F3C44B) com transição de 250ms. Active: translate -1px (feedback tátil)
- **Secundário (WhatsApp, Instagram):** ghost outline em creme sobre navy, ou outline navy sobre creme. Sem preenchimento
- Máximo 1 botão primário visível por seção

### Cards
- Cantos arredondados 24px–32px, sem sombras duras
- Sobre fundo creme: card branco-creme mais claro (#FDFAF2) com borda 1px rgba(19,51,88,0.08)
- Sobre fundo navy: card navy mais claro (#1B4068) sem borda
- Cards de plano de patrocínio (ex: Cesta, Bola, Uniforme): mesma estrutura, o plano do meio elevado com borda Coral 2px e badge "Mais impactante"

### Badges de credibilidade
- Pill pequena com fundo translúcido e ícone; usadas para "Moção Alesc 2023", "Selecionado PAP ACIF", "Projeto de utilidade pública (em tramitação)". Agrupadas no Hero e na seção de transparência

### Formulários
- Campos com label acima, fundo branco-creme, borda 1px navy translúcida, focus ring 2px Oceano Ação. Erro inline abaixo do campo em Coral
- Formulário de empresa: nome, CNPJ opcional, e-mail, telefone/WhatsApp, tipo de apoio (select), mensagem
- Doação: valor em pills pré-definidas (R$ 25 = material esportivo / R$ 50 = mês de treino / R$ 100 = uniforme / outro valor) + Pix copia-e-cola com QR Code

### Estados
- Loading: skeleton shimmer nas dimensões exatas do layout, nunca spinner circular
- Imagens com lazy-load e placeholder navy sólido (nunca quebradas)

---

## 5. Princípios de Layout

- Grid-first, container max-width 1200px centralizado
- **Hero assimétrico:** split ~60/40 — texto + CTA à esquerda sobre navy, foto real de atleta à direita ocupando altura total, com corte diagonal ou curva suave remetendo às ondas do kit. Hero centrado BANNED
- Seções em alternância navy → creme → navy para ritmo visual
- Estatísticas de impacto: linha horizontal assimétrica (números de tamanhos diferentes), nunca 3 cards iguais lado a lado
- Seção "Conquistas/Credibilidade": lista vertical com border-top dividers, não cards
- Planos de patrocínio: 3 colunas PERMITIDAS aqui apenas porque é convenção de pricing esperada pelo público empresarial — mas com o card central elevado/deslocado para quebrar simetria
- Galeria de fotos reais: mosaico assimétrico (grid com spans variados), estilo feed do Instagram deles
- Colapso mobile < 768px: tudo em coluna única, sem exceção; tipografia via clamp(); touch targets mínimos 44px; zero scroll horizontal
- Alturas de seção com min-h-[100dvh] quando aplicável, nunca h-screen

---

## 6. Movimento & Interação

- Física de mola em todos os elementos interativos (stiffness 100, damping 20); easing linear banned
- Reveals em cascata com stagger de 80ms entre itens de lista/galeria
- Números de impacto com contagem animada ao entrar no viewport
- Curvas onduladas (SVG) separando seções navy/creme, ecoando os templates de post do kit — animação sutil opcional
- Animações exclusivamente via transform e opacity; nada de top/left/width/height
- Respeitar prefers-reduced-motion

---

## 7. Estrutura de Conteúdo (ordem das seções)

1. **Header fixo** — logo branca, nav mínima (O Projeto / Transparência / Galeria), botão coral "Apoiar"
2. **Hero** — headline emocional + sublinha coral + CTA duplo (Doar agora / Quero ser parceiro) + foto real + badges de credibilidade
3. **Impacto** — números grandes animados (100+ atletas, 14 escolas parceiras, bairro Ingleses desde [ano])
4. **Quem somos** — história do professor Nathaniell e do projeto, foto do time, tom pessoal
5. **Transparência** — moção Alesc, PAP/ACIF, PL utilidade pública, frase-chave real: "sem incentivo algum de governo... nos mantemos com apoio de escolas e empresários"
6. **Galeria** — mosaico de fotos reais de campeonatos e treinos
7. **Planos de patrocínio** — 3 níveis com contrapartidas claras (logo no uniforme, posts, eventos)
8. **Doação** — pills de valor + QR Pix + chave copia-e-cola
9. **Contato/Footer** — WhatsApp, Instagram @arvoredo.basquetebol, endereço (E.B.M. Professora Herondina Medeiros Zeferino, Ingleses), mapa opcional, logo

---

## 8. Anti-Padrões (BANNED)

- Nenhuma imagem de stock genérica — usar SOMENTE as fotos reais fornecidas em `Fotos/`
- Sem emojis na interface
- Sem roxo/neon/glows externos; sem gradientes textuais em headers grandes
- Sem "Scroll to explore", setas saltitantes ou cursors customizados
- Sem clichês de copywriting ("Elevate", "Seamless", "Unleash", "Transformando vidas através do esporte" usado de forma vazia — se usar a frase, ancorar em fato concreto)
- Sem números falsos redondos tipo "99% de aprovação" — usar somente dados verificados
- Sem cards idênticos em grade tripla (exceto pricing, conforme §5)
- Sem elementos sobrepostos desalinhados; cada elemento em sua zona espacial limpa
- Não inventar CNPJ, chave Pix, valores bancários ou contatos — marcar placeholders claramente como `[A CONFIRMAR]` para o cliente preencher
