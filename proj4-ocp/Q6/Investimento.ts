export enum TipoInvestimento {
    RENDA_FIXA,
    RENDA_VARIAVEL,
  }

export class Investimento {
    private id: number;
    private valor: number;
    private tipo: TipoInvestimento;
    private statusRisco: string;
  
    constructor(id: number, valor: number, tipo: TipoInvestimento) {
      this.id = id;
      this.valor = valor;
      this.tipo = tipo;
      this.statusRisco = '';
    }
  
    public getId(): number {
      return this.id;
    }
  
    public getValor(): number {
      return this.valor;
    }
  
    public getTipo(): TipoInvestimento {
      return this.tipo;
    }
  
    public setStatusRisco(statusRisco: string): void {
      this.statusRisco = statusRisco;
    }

    public getStatusRisco(): string {
        return this.statusRisco;
      }

      executarAuditoria(): void {
        console.log('investimento auditada')
      }
  }