// Coesão lógica
// Um módulo faz um conjunto de funções relacionadas, uma das quais é escolhida
// através de um parâmetro ao chamar o módulo
// Semelhante a acoplamento de controle
// Cura: quebrar em métodos diferentes 


// antes


class Calculadora {
  constructor() {}

  operar(a: number, b: number, tipo:string){
    if(tipo  === 'soma'){
      return a + b;
    }
    if(tipo  === 'porduto'){
      return a * b;
    }
    if(tipo  === 'subtração'){
      return a - b;
    }
    
  }


}


//depois
class CalculadoraDepois {
    constructor() {}
  
    somar(a: number, b: number): number {
      return a + b;
    }
  
    subtrair(a: number, b: number): number {
      return a - b;
    }
  
    multiplicar(a: number, b: number): number {
      return a * b;
    }
  
    dividir(a: number, b: number): number {
      if (b === 0) {
        throw new Error('Divisão por zero não é permitida.');
      }
      return a / b;
    }
  }
  

  