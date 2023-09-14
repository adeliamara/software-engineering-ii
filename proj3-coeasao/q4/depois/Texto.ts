class Texto {
    private texto: string;

    constructor(texto: string) {
        this.texto = texto;
    }

    removerEspacos() {
        return this.texto.replace(/\s+/g, '');
    }

    quebrarEmPalavras() {
        return this.texto.split(/\s+/);
    }
}


const texto = "Este é um exemplo de texto";
const textoInstanciado = new Texto(texto);
console.log(textoInstanciado.removerEspacos()); // "Esteéumexemplodetexto"
console.log(textoInstanciado.quebrarEmPalavras()); // ["Este", "é", "um", "exemplo", "de", "texto"]
