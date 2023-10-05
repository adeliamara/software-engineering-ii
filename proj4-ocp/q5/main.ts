import { ContaCorrente } from "./ContaCorrente";
import { ContaCorrenteService } from "./ContaCorrenteService";
import { Investimento, TipoInvestimento } from "./Investimento";
import { InvestimentoService } from "./InvestimentoService";
import { TipoTransacao, Transacao } from "./Transacao";

const conta = new ContaCorrente('12345', 1000);
const transacao1 = new Transacao(1, 500, TipoTransacao.CREDITO);
const transacao2 = new Transacao(2, 2000, TipoTransacao.DEBITO);

conta.adicionarTransacao(transacao1);
conta.adicionarTransacao(transacao2);

const transacoesInvalidas = ContaCorrenteService.filtrarTransacoesInvalidas(conta);
console.log('Transações inválidas:', transacoesInvalidas);

const investimento = new Investimento(1, 10000, TipoInvestimento.RENDA_VARIAVEL);
InvestimentoService.avaliarRisco(investimento);
console.log('investimento risco:', investimento.getStatusRisco())