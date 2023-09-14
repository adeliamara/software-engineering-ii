// Um objeto não representa nenhum conceito OO
// • Uma coleção de código comumente usado e herdado através de herança
// (provavelmente múltipla)

class CoesaoCoincidentalExemplo {
    constructor() {}
  
    calcularMedia(valores: number[]): number {
        if (valores.length === 0) {
            throw new Error('A lista de valores não pode estar vazia.');
        }
        
        const soma = valores.reduce((acumulador, valor) => acumulador + valor, 0);
        return soma / valores.length;
    }
  
    substituirString(texto: string, alvo: string, substituto: string): string {
      return texto.replace(new RegExp(alvo, 'g'), substituto);
    }
  
    validarNumeroPar(numero: number): boolean {
      return numero % 2 === 0;
    }
  
    enviarEmail(destinatario: string, assunto: string, mensagem: string): void {
      console.log(`Enviando e-mail para ${destinatario}`);
      console.log(`Assunto: ${assunto}`);
      console.log(`Mensagem: ${mensagem}`);
    }
  }
  
  const exemplo = new CoesaoCoincidentalExemplo();
  
  // Exemplo de uso dos métodos
  const numeros = [1, 2, 3, 4, 5];
  console.log('Média:', exemplo.calcularMedia(numeros));
  
  const texto = 'Isso é um exemplo. Exemplo é uma palavra comum.';
  console.log('Texto modificado:', exemplo.substituirString(texto, 'exemplo', 'substituição'));
  
  const numero = 10;
  console.log('É número par?', exemplo.validarNumeroPar(numero));
  
  exemplo.enviarEmail('exemplo@email.com', 'Teste', 'Isso é apenas um teste.');
  