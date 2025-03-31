"use strict";
// Declaração de um array de objetos do tipo 'aluno'
const alunos = [
    {
        nome: 'Carlos',
        cursos: ['Frontend', 'UX/UI'], // Exemplo de propriedade opcional preenchida
        idade: 27,
    },
    {
        nome: 'Ana',
        cursos: ['Backend', 'DevOps'],
        idade: 30,
    },
];
// Adicionando um novo objeto do tipo 'aluno' ao array 'alunos'
alunos.push({
    nome: 'Gian',
    cursos: ['Frontend', 'Backend'], // Propriedade opcional preenchida
    idade: 27,
});
// Declaração de um novo objeto do tipo 'aluno' sem a propriedade opcional
const novoAluno = {
    nome: 'Gian',
    idade: 27, // Propriedade obrigatória preenchida
};
// Função que recebe um parâmetro do tipo 'aluno' e exibe o nome no console
function exibeAluno(aluno) {
    console.log(aluno.nome); // Acessando a propriedade obrigatória 'nome'
}
