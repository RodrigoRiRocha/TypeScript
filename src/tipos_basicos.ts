// Declaração de variáveis booleanas
let estaChovendo: boolean = false;
estaChovendo = true;

// Declaração de variáveis numéricas
let idade: number = 27;
let altura: number = 1.75;

// Declaração de variáveis de string
const nacionalidade: string = 'brasileira';

// Declaração de arrays
const colegas: string[] = ['gian', 'andre', 'luan'];
const tecnologias: Array<string> = ['typescript', 'javascript', 'python'];
const notas: ReadonlyArray<number> = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

// Declaração de tuplas
const lista: [nome: string, idade: number, estaEstudando: boolean] = ['gian', 27, true];

// Declaração de variáveis com union types
let idadeDaAna: number | string = 27;
idadeDaAna = '27 anos'; 

// Declaração de variáveis com tipo any
let dadosDaApi: any;
dadosDaApi = 27;
dadosDaApi = 'string';
dadosDaApi = true;
dadosDaApi = [1, 2, 3];

// Declaração de variáveis com tipo inplicita
let curso = 'typescript';