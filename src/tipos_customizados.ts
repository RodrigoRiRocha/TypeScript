// Definição de um tipo customizado 'aluno' com propriedades obrigatórias e opcionais
type aluno = {
    nome: string, // Propriedade obrigatória do tipo string
    cursos?: string[], // Propriedade opcional do tipo array de strings
    idade: number, // Propriedade obrigatória do tipo number
}

// Declaração de um array de objetos do tipo 'aluno'
const alunos: aluno[] = [
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
]

// Adicionando um novo objeto do tipo 'aluno' ao array 'alunos'
alunos.push({
    nome: 'Gian',
    cursos: ['Frontend', 'Backend'], // Propriedade opcional preenchida
    idade: 27,
})

// Declaração de um novo objeto do tipo 'aluno' sem a propriedade opcional
const novoAluno: aluno = {
    nome: 'Gian',   
    idade: 27, // Propriedade obrigatória preenchida
}

// Função que recebe um parâmetro do tipo 'aluno' e exibe o nome no console
function exibeAluno (aluno: aluno) {
    console.log(aluno.nome); // Acessando a propriedade obrigatória 'nome'
}
