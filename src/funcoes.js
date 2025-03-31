"use strict";
// Função que calcula a área de um retângulo com base na largura (base) e altura
// Retorna um número representando a área
function calcularArea(base, altura) {
    return (base * altura);
}
// Função equivalente à anterior, mas escrita no formato de arrow function
// Também retorna um número representando a área
const calcularArea2 = (base, altura) => base * altura;
// Função que aceita múltiplos números como entrada (rest parameters)
// Não retorna nenhum valor (void), apenas imprime os números no console
function somar(...numeros) {
    // Aqui você pode implementar lógica adicional, como somar os números
    console.log(numeros);
}
// Função que retorna um valor do tipo string ou number, dependendo da condição
// Se 10 for maior que 5, retorna uma string; caso contrário, retorna um número
function teste() {
    if (10 > 5) {
        return 'Dez é maior que cinco';
    }
    else {
        return 5;
    }
}
// Armazena o resultado da função 'teste' em uma variável
// O tipo da variável será inferido com base no retorno da função
const resultado = teste();
