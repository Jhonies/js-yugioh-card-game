# Yu-Gi-Oh! Jokenpo Edition

Um jogo de Yu-Gi-Oh! no estilo jokenpo (pedra, papel e tesoura), onde a mecânica de duelo é baseada nos tipos de carta "Paper", "Rock" e "Scissors".

## 🔗 Acesse o Projeto

Você pode jogar e ver o projeto funcionando em tempo real através do GitHub Pages neste link:

yu-gi-oh-jokenpo-edition.github.io

Lembre-se de substituir o SEU_NOME_DE_USUARIO e o SEU_REPOSITORIO pelos seus dados.

## 💻 Tecnologias e Implementação

Este projeto foi construído do zero utilizando as tecnologias fundamentais do desenvolvimento web:

HTML: Para a estrutura base e elementos do jogo.

CSS: Para toda a estilização e responsividade, incluindo as animações e os efeitos visuais.

JavaScript: Para a lógica do jogo, manipulação do DOM e gerenciamento do estado da partida (pontuação, cartas, etc.).

## ✨ Ideia e Créditos

Este projeto foi desenvolvido como parte de um desafio prático da plataforma DIO (Digital Innovation One), no bootcamp Front-End - Santander Tech

A idealização, assets (imagens, sons e vídeos) e alguns estilos CSS foram fornecidos para o desafio. Todo o código JavaScript, a lógica do jogo e a customização do CSS foram implementados por nós para completar o projeto.

## 🎮 Como Jogar

Abra o arquivo index.html em seu navegador.

O jogo irá sortear 5 cartas para você e 5 para o computador.

Escolha uma das suas cartas para iniciar o duelo.

O computador também escolherá uma carta aleatoriamente.

O vencedor é determinado pelas regras do jokenpo:

Dragão (Paper): Vence Mago (Rock)

Mago (Rock): Vence Exodia (Scissors)

Exodia (Scissors): Vence Dragão (Paper)

Ao final, a pontuação é atualizada e você pode clicar no botão "PRÓXIMO DUELO" para recomeçar.

### 📂 Estrutura de Pastas
```
.
├── src/
│   ├── assets/
│   │   ├── audios/         # Arquivos de áudio para o jogo
│   │   ├── icons/          # Ícones e imagens das cartas
│   │   ├── video/          # Vídeo de background do jogo
│   │   └── rpg/            # Assets de botões e frames do RPGUI
│   ├── scripts/
│   │   └── engine.js       # Lógica principal do jogo em JavaScript
│   └── styles/
│       ├── buttons.css     # Estilos para os botões do RPGUI
│       ├── containers_and_frames.css # Estilos para os containers e bordas
│       ├── main.css        # Estilos principais do layout do jogo
│       └── reset.css       # Resets e estilos globais
└── index.html              # A página principal do jogo
```

## 👩‍💻 Licenças

Esse projeto é utilizado apenas para fins de estudo