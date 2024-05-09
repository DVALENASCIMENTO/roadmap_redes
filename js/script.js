document.addEventListener('DOMContentLoaded', () => {
    // Espera até que o DOM esteja completamente carregado antes de executar o código
    const popupLinks = document.querySelectorAll('.popup-link');
    // Seleciona todos os elementos com a classe 'popup-link' e os armazena em uma NodeList

    popupLinks.forEach(link => {
        // Itera sobre cada elemento 'popup-link' encontrado
        link.addEventListener('click', (e) => {
            // Adiciona um event listener para o evento de clique em cada link
            e.preventDefault(); // Impede o comportamento padrão de clicar em um link
            const imageUrl = link.getAttribute('data-image');
            // Obtém o valor do atributo 'data-image' do link clicado
            openPopup(imageUrl); // Chama a função openPopup com a URL da imagem como argumento
        });
    });

    function openPopup(imageUrl) {
        // Define a função openPopup que recebe a URL da imagem como argumento
        const popupWindow = window.open('', '_blank', 'width=400,height=300');
        // Abre uma nova janela pop-up com as dimensões especificadas
        popupWindow.document.write(`
            <html>
            <head>
                <title>Popup Image</title>
                <style>
                    body {
                        margin: 0;
                        padding: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        background-color: rgba(0, 0, 0, 0.5);
                    }
                    .popup-content {
                        width: 80%;
                        height: 80%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    img {
                        max-width: 100%;
                        max-height: 100%;
                        border-radius: 8px;
                    }
                </style>
            </head>
            <body>
                <div class="popup-content">
                    <img src="${imageUrl}" alt="Popup Image" class="popup-image">
                </div>
            </body>
            </html>
        `);
        // Escreve o conteúdo HTML na nova janela pop-up

    }

    // Animação do título
    const titleElement = document.getElementById('animated-title');
    // Obtém o elemento do título animado pelo ID 'animated-title'
    const titleText = titleElement.innerText;
    // Obtém o texto do título animado
    const titleLength = titleText.length;
    // Obtém o comprimento do texto do título
    let currentIndex = 0;

    function animateTitle() {
        // Define a função para animar o título
        titleElement.innerText = titleText.substring(0, currentIndex);
        // Define o texto do título com base no índice atual
        if (currentIndex < titleLength) {
            // Verifica se ainda há caracteres para serem exibidos
            currentIndex++; // Incrementa o índice para exibir o próximo caractere
            setTimeout(animateTitle, 100); // Aguarda 100 milissegundos para exibir o próximo caractere
        }
    }

    animateTitle(); // Inicia a animação do título
});
