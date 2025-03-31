"use strict";
// Definição da classe 'Pessoa', que representa um modelo de objeto com propriedades e métodos
class Pessoa {
    // Construtor da classe, usado para inicializar as propriedades ao criar uma instância
    constructor(nome, renda) {
        this.renda = renda;
        this.nome = nome;
    }
    // Método da classe que retorna uma saudação personalizada
    dizerOla() {
        return `Olá, meu nome é ${this.nome}`;
    }
}
// Definição da classe 'ContaBancaria', que utiliza encapsulamento e possui modificadores de acesso
class ContaBancaria {
    // Construtor da classe, inicializa o número da conta
    constructor(numeroConta) {
        this.saldo = 0; // Propriedade protegida, acessível apenas na classe e subclasses
        this.numeroConta = numeroConta;
    }
    // Método estático, acessível diretamente pela classe sem instanciar
    static retornaNumeroDoBanco() {
        return 125;
    }
    // Método privado, acessível apenas dentro da própria classe
    getSaldo() {
        return this.saldo;
    }
    // Método público para depositar valores na conta
    depositar(valor) {
        this.saldo += valor;
    }
}
// Subclasse que herda de 'ContaBancaria' e sobrescreve o método 'depositar'
class ContaBancariaPessoaFisica extends ContaBancaria {
    // Sobrescrita do método 'depositar' para alterar o comportamento
    depositar(valor) {
        this.saldo = valor * 2; // Exemplo de lógica personalizada
    }
}
// Criação de uma instância da subclasse 'ContaBancariaPessoaFisica'
const contaDoPedro = new ContaBancariaPessoaFisica(123456);
// Uso de um método estático diretamente pela classe
ContaBancaria.retornaNumeroDoBanco();
