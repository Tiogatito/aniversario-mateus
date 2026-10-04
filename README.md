# Aniversário de Mateus

Landing page de evento para o exercício do Módulo 22 — Profissão Engenheiro Front-End.

## Executar

Requer Node.js e npm.

```sh
npm ci
npm run dev
```

Para gerar os arquivos de produção: `npm run build`. O Parcel gera a pasta `dist`. Para visualizar o resultado: `npm run preview`.

## Implementação

- Tema: aniversário de Mateus em 30/08/2027, completando 25 anos, conforme a data de nascimento informada (30/08/2002).
- Parcel para desenvolvimento e compilação de HTML, SCSS e JavaScript.
- SCSS dividido em variáveis, estilos base e componentes, com propriedades personalizadas CSS.
- Hero com imagem de fundo e sobreposição por pseudo-elemento, gradientes, descrição, organização e chamada à ação.
- Layout responsivo para celular, tablet e desktop. Imagens fluidas, menu compacto e seções empilhadas em telas pequenas.
- AOS para animações de entrada, respeitando a preferência por movimento reduzido.
- Contagem regressiva com `getTime`, `setInterval` e `clearInterval`, fuso horário explícito UTC−03:00 e encerramento sem números negativos.
- Download de um evento de dia inteiro em formato `.ics` para salvar a data em um calendário.
- HTML semântico, navegação por teclado, link para pular ao conteúdo, foco visível e textos alternativos nas imagens.
- Publicação preparada para a Vercel, com `dist` como diretório de saída.

## Dados do evento

A data foi fixada no próximo aniversário em relação à realização do exercício, em outubro de 2026. O horário e o local não foram informados e aparecem como “a definir”. O contador termina à meia-noite do aniversário e não representa o horário de início da festa. O calendário também não confirma presença nem envia dados pessoais.

## Material de apoio

As imagens fornecidas em `images 4` estão preservadas em `src/images`. Os arquivos `frontend.png`, `ui-ux.png`, `data.png` e `backend.png` ilustram os blocos da celebração com tema de tecnologia. `fundo.png` compõe o hero. O arquivo `ebac_logo.svg` foi preservado como parte do material original; não é usado como marca do evento pessoal. As imagens são ilustrativas e não são apresentadas como fotos de Mateus ou de uma festa real.

## Enunciado

Criar uma nova landing page no formato de evento, aplicar a responsividade ensinada no módulo, usar o aniversário como tema e publicar o projeto. A entrega pela plataforma do curso depende de aprovação do aluno.
