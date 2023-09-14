class ArrayNumeros {
    private numeros: number[];

    constructor(array: number[]) {
        this.numeros = array;
    }

    ordenar() {
        return this.numeros.sort((a, b) => a - b);
    }

    embaralhar() {
        for (let i = this.numeros.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.numeros[i], this.numeros[j]] = [this.numeros[j], this.numeros[i]];
        }
    }

    calcularMedia() {
        if (this.numeros.length === 0) {
            return 0;
        }
        const soma = this.numeros.reduce((a, b) => a + b, 0);
        return soma / this.numeros.length;
    }

    calcularDesvioPadrao() {
        if (this.numeros.length < 2) {
            return 0;
        }
        const media = this.calcularMedia();
        const somaDosQuadrados = this.numeros.reduce((sum, num) => sum + Math.pow(num - media, 2), 0);
        return Math.sqrt(somaDosQuadrados / (this.numeros.length - 1));
    }
}

// Exemplo de uso
const array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const numerosArray: ArrayNumeros = new ArrayNumeros(array);

console.log(numerosArray.ordenar())
console.log(numerosArray.calcularMedia());
