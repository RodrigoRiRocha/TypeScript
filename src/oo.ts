// Definição da classe 'Pessoa', que representa um modelo de objeto com propriedades e métodos
class Pessoa {
    nome: string; // Propriedade obrigatória do tipo string
    renda?: number; // Propriedade opcional do tipo number

    // Construtor da classe, usado para inicializar as propriedades ao criar uma instância
    constructor(nome: string, renda?: number) {
        this.renda = renda;
        this.nome = nome;
    }

    // Método da classe que retorna uma saudação personalizada
    dizerOla(): string {
        return `Olá, meu nome é ${this.nome}`;
    }
}

// Definição da classe 'ContaBancaria', que utiliza encapsulamento e possui modificadores de acesso
class ContaBancaria {
    protected saldo: number = 0; // Propriedade protegida, acessível apenas na classe e subclasses
    public numeroConta: number; // Propriedade pública, acessível de qualquer lugar

    // Construtor da classe, inicializa o número da conta
    constructor(numeroConta: number) {
        this.numeroConta = numeroConta;
    }

    // Método estático, acessível diretamente pela classe sem instanciar
    static retornaNumeroDoBanco() {
        return 125;
    }

    // Método privado, acessível apenas dentro da própria classe
    private getSaldo() {
        return this.saldo;
    }

    // Método público para depositar valores na conta
    depositar(valor: number) {
        this.saldo += valor;
    }
}

// Subclasse que herda de 'ContaBancaria' e sobrescreve o método 'depositar'
class ContaBancariaPessoaFisica extends ContaBancaria {
    // Sobrescrita do método 'depositar' para alterar o comportamento
    depositar(valor: number): void {
        this.saldo = valor * 2; // Exemplo de lógica personalizada
    }
}

// Criação de uma instância da subclasse 'ContaBancariaPessoaFisica'
const contaDoPedro = new ContaBancariaPessoaFisica(123456);
// Uso de um método estático diretamente pela classe
ContaBancaria.retornaNumeroDoBanco();