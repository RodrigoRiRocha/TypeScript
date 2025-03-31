"use strict";
var casting;
(function (casting) {
    // Casting de uma variável do tipo 'any' para 'number'
    // Permite usar métodos específicos de números, como toFixed()
    let idade = 25;
    idade.toFixed();
    // Casting de uma variável do tipo 'any' para 'string'
    // Permite acessar propriedades específicas de strings, como length
    idade.length;
    // Casting de uma variável do tipo 'any' para um array de strings
    // Permite usar métodos de arrays, como forEach()
    //perigoso fazer isso, pois pode não funcionar corretamente se idade não for um array
    idade.forEach(x => {
        console.log(x);
    });
    // Casting duplo: converte um número para 'unknown' e depois para 'string'
    // Útil em situações onde o tipo intermediário precisa ser tratado como desconhecido
    let nome = 35;
})(casting || (casting = {}));
;
