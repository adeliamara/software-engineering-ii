// Um módulo tem coesão funcional se as operações do módulo puderem ser descritas
// numa única frase de forma coerente
// Num sistema OO:
// • Cada operação na interface pública do objeto deve ser funcionalmente coesa
// • Cada objeto deve representar um único conceito coeso
// Exemplo: um objeto que esconde algum conceito ou estrutura de dados ou recurso e
// onde todos os métodos são relacionados por um conceito ou estrutura de dados ou
// recurso
// • Meyer chama isso de "information-strength module"

class CoesaoFuncionalExemplo {
    calcularSoma(valores: number[]): number {
      return valores.reduce((acumulador, valor) => acumulador + valor, 0);
    }
  
    calcularMedia(valores: number[]): number {
      if (valores.length === 0) {
        throw new Error('A lista de valores não pode estar vazia.');
      }
  
      const soma = this.calcularSoma(valores);
      return soma / valores.length;
    }
  
    encontrarValorMinimo(valores: number[]): number {
      if (valores.length === 0) {
        throw new Error('A lista de valores não pode estar vazia.');
      }
  
      return valores.reduce((minimo, valor) => (valor < minimo ? valor : minimo), valores[0]);
    }
  }
  
  const exemplo3 = new CoesaoFuncionalExemplo();
  
  const numeros2 = [1, 2, 3, 4, 5];
  const soma = exemplo3.calcularSoma(numeros2);
  const media = exemplo3.calcularMedia(numeros2);
  const minimo = exemplo3.encontrarValorMinimo(numeros2);
  
  console.log('Soma:', soma);
  console.log('Média:', media);
  console.log('Valor Mínimo:', minimo);
  