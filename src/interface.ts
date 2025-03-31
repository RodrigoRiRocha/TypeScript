// Definição de uma classe base 'Conta' com propriedades e métodos básicos
class Conta {
    numeroDaConta: number; // Propriedade obrigatória do tipo number
    saldo: number = 0; // Propriedade inicializada com valor padrão

    constructor(numeroDaConta: number) {
        this.numeroDaConta = numeroDaConta;
    }
}

// Subclasse 'ContaSalario' que herda de 'Conta' e adiciona um método para depósito
class ContaSalario extends Conta {
    depositar(valor: number) {
        this.saldo += valor; // Método para adicionar valor ao saldo
    }
}

// Definição de uma interface 'ITransacional' que descreve o contrato para transações
interface ITransacional {
    transferir: (valor: number, destinatario: Conta) => boolean; // Método obrigatório para transferência
    taxaTransferencia: number; // Propriedade obrigatória do tipo number
}

// Definição de uma interface 'IExemplo2' com uma propriedade obrigatória
interface IExemplo2 {
    cnpj: number; // Propriedade obrigatória do tipo number
}

// Interface 'IExemplo3' que estende 'IExemplo2', adicionando novas propriedades
interface IExemplo3 extends IExemplo2 {
    telefone: number; // Propriedade adicional obrigatória
}

// Classe 'ContaCorrente' que implementa a interface 'ITransacional'
class ContaCorrente extends Conta implements ITransacional {
    // Implementação do método 'transferir' definido na interface
    transferir(valor: number, destinatario: Conta) {
        destinatario.saldo += (valor - this.taxaTransferencia); // Aplica a taxa de transferência
        return true; // Retorna true para indicar sucesso
    }

    taxaTransferencia: number = 0; // Propriedade obrigatória da interface, inicializada com valor padrão
}

