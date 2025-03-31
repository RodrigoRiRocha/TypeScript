"use strict";
// Definição de uma classe base 'Conta' com propriedades e métodos básicos
class Conta {
    constructor(numeroDaConta) {
        this.saldo = 0; // Propriedade inicializada com valor padrão
        this.numeroDaConta = numeroDaConta;
    }
}
// Subclasse 'ContaSalario' que herda de 'Conta' e adiciona um método para depósito
class ContaSalario extends Conta {
    depositar(valor) {
        this.saldo += valor; // Método para adicionar valor ao saldo
    }
}
// Classe 'ContaCorrente' que implementa a interface 'ITransacional'
class ContaCorrente extends Conta {
    constructor() {
        super(...arguments);
        this.taxaTransferencia = 0; // Propriedade obrigatória da interface, inicializada com valor padrão
    }
    // Implementação do método 'transferir' definido na interface
    transferir(valor, destinatario) {
        destinatario.saldo += (valor - this.taxaTransferencia); // Aplica a taxa de transferência
        return true; // Retorna true para indicar sucesso
    }
}
