// Obtém o elemento com o ID 'nome' do DOM
const campoNome = document.getElementById('nome');

// Obtém todos os elementos <form> do DOM
const formulario = document.getElementsByTagName('form');

// Obtém o botão com o ID 'btn-enviar' do DOM
const botaoEnviar = document.getElementById('btn-enviar');

// Adiciona um evento de clique ao botão 'btn-enviar'
botaoEnviar?.addEventListener('click', (e: MouseEvent) => {
    // Acessa a posição vertical do clique na página
    e.pageY;
});