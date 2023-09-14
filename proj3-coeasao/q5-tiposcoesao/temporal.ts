// Coesão temporal
// Elementos estão agrupados no mesmo módulo porque são processados no mesmo
// intervalo de tempo
// Exemplos comuns:
// • Método de inicialização que provê valores defaults para um monte de coisas
// diferentes
// • Método de finalização que limpa as coisas antes de terminar

class CoesaoTemporalExemplo {
    private estado: string;
  
    constructor() {
      this.estado = 'inicial';
    }
  
    iniciarProcesso(): void {
      this.estado = 'processo_iniciado';
      console.log('Processo iniciado.');
    }
  
    executarEtapa1(): void {

      if (this.estado !== 'processo_iniciado') {
        throw new Error('Erro: Etapa 1 não pode ser executada sem iniciar o processo.');
      } 
      this.estado = 'etapa1_concluida';
      console.log('Etapa 1 concluída.');
    }
  
    executarEtapa2(): void {
      if (this.estado !== 'etapa1_concluida') {
        throw new Error('Erro: Etapa 2 não pode ser executada sem concluir a Etapa 1.');
      } 

      this.estado = 'etapa2_concluida';
      console.log('Etapa 2 concluída.');
    }
  
    encerrarProcesso(): void {
      if (this.estado !== 'etapa2_concluida') {
        throw new Error('Erro: O processo não pode ser encerrado sem concluir todas as etapas.');
      } 
      
      this.estado = 'processo_encerrado';
      console.log('Processo encerrado.');
    }
  }
  
  const exemplo1 = new CoesaoTemporalExemplo();
  
  exemplo1.iniciarProcesso();
  exemplo1.executarEtapa1();
  exemplo1.executarEtapa2();
  exemplo1.encerrarProcesso();


  try{ 
    exemplo1.iniciarProcesso();
    exemplo1.executarEtapa2();
  } catch(e){
    console.log(e)
  }

  