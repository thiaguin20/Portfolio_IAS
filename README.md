# Portfolio IAS - Videos e Efeitos com IA

Portfolio profissional para apresentar videos gerados com IA, efeitos interativos e materiais visuais para criadores de conteudo, TikTokers, lives e transmissoes em OBS/TikTok Live Studio.

**Projeto online:** [portfolio-ias-xi.vercel.app](https://portfolio-ias-xi.vercel.app)

## Demonstracao

<video src="./assets/Portfolio_Ias.mp4" controls width="100%"></video>

Caso o video nao carregue no GitHub, acesse diretamente: [assets/Portfolio_Ias.mp4](./assets/Portfolio_Ias.mp4)

## Sobre o projeto

O site foi criado para funcionar como vitrine dos meus trabalhos com IA visual, mostrando videos em formato vertical, efeitos com transparencia para live e uma experiencia direta para contato via WhatsApp.

## Funcionalidades

- Portfolio dinamico carregado por manifesto JSON
- Categorias para videos IA e efeitos de live
- Preview em modal para visualizar os videos em tamanho maior
- Sistema de curtidas globais por video usando API serverless e Redis/KV
- Layout responsivo para desktop e mobile
- Suporte a Portugues, Espanhol e Ingles
- CTA direto para orcamento via WhatsApp
- Deploy publicado na Vercel

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Vercel
- Videos em MP4/WebM

## Estrutura

```text
.
|-- index.html
|-- styles.css
|-- script.js
|-- output/
|   |-- videos-manifest.json
|   |-- videos-ia/
|   |-- x2/
|   |-- x3/
|   |-- tap/
|   |-- heart-me/
|   |-- glove/
|   `-- popular/
`-- assets/
    `-- Portfolio_Ias.mp4
```

## Como executar localmente

```bash
python -m http.server 5500
```

Depois acesse:

```text
http://localhost:5500/
```

## Curtidas globais

As curtidas globais usam a rota serverless `api/likes.js`. Para funcionar em producao, configure um Redis REST compativel com Upstash/Vercel KV no projeto da Vercel.

Variaveis aceitas:

```text
KV_REST_API_URL
KV_REST_API_TOKEN
```

Ou:

```text
UPSTASH_REDIS_REST_URL
UPSTASH_REDIS_REST_TOKEN
```

Sem essas variaveis, o site usa fallback local no navegador.

## Autor

Desenvolvido por [Thiago Piovan](https://github.com/thiaguin20).
