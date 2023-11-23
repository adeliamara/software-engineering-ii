# Problema 

Em um sistema bancário temos as seguintes classes:

```java
public class ContaBancaria {
    private double saldo;

    public ContaBancaria(double saldoInicial) {
        this.saldo = saldoInicial;
    }

    public void depositar(double valor) { saldo += valor; }

    public void sacar(double valor) { saldo -= valor; }
}

public class ContaPoupanca extends ContaBancaria {
    public ContaPoupanca(double saldoInicial) {
        super(saldoInicial);
    }

    @Override
    public void sacar(double valor) {
        if (valor > 1000) {
            throw new
                RuntimeException("Não pode sacar mais de 1000 em uma poupança");

        }
        super.sacar(valor);
    }
}
```

Explique por que motivo a herança entre as classes não é justificada e proponha uma solução.

# Solução 
A pré condição da classe filha é mais rigorosa do que da classe pai, assim não segue o principio de Liskov. Poderia usar composção para resolver o problema. Assim, a classe ContaPoupanca teria a instancia de uma ContaBancaria dentro dela e herdar todos os comportamentos de conta bancária.

```java
public class ContaBancaria {
    private double saldo;

    public ContaBancaria(double saldoInicial) {
        this.saldo = saldoInicial;
    }

    public void depositar(double valor) {
        saldo += valor;
    }

    public void sacar(double valor) {
        saldo -= valor;
    }

    public double getSaldo() {
        return saldo;
    }
}

public class ContaPoupanca {
    private ContaBancaria contaBancaria;

    public ContaPoupanca(double saldoInicial) {
        this.contaBancaria = new ContaBancaria(saldoInicial);
    }

    public void depositar(double valor) {
        contaBancaria.depositar(valor);
    }

    public void sacar(double valor) {
        if (valor > 1000) {
            throw new RuntimeException("Não pode sacar mais de 1000 em uma poupança");
        }
        contaBancaria.sacar(valor);
    }

    public double getSaldo() {
        return contaBancaria.getSaldo();
    }
}

```