// Espera o DOM ser carregado para executar o código
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os botões dentro da classe 'buttons'
    const buttons = document.querySelectorAll('.buttons button');
    // Seleciona todas as seções que possuem um atributo 'id'
    const sections = document.querySelectorAll('div[id]');

    // Para cada botão, adiciona um evento de clique
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Obtém o ID do botão clicado em letras minúsculas
            const targetId = this.id.toLowerCase();
            // Para cada seção, verifica se o ID corresponde ao alvo do clique
            sections.forEach(section => {
                // Se a seção tem o mesmo ID que o alvo do clique, mostra a seção e oculta as outras
                if (section.id === targetId) {
                    section.classList.add('show');
                    section.classList.remove('hidden');
                } else {
                    // Se não, oculta a seção
                    section.classList.remove('show');
                    section.classList.add('hidden');
                }
            });
        });
    });
});
