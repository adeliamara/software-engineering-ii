import { Auditavel } from "./Auditavel";
import { AuditoriaFinanceiraService } from "./AuditoriaFinaceiraService";
import { ContaCorrente } from "./ContaCorrente";
import { ContaCorrenteService } from "./ContaCorrenteService";
import { Investimento, TipoInvestimento } from "./Investimento";
import { InvestimentoService } from "./InvestimentoService";
import { TipoTransacao, Transacao } from "./Transacao";
import { TransacaoService } from "./TransacaoService";

const conta1 = new ContaCorrente('12345', 1000);
const conta2 = new ContaCorrente('12346', 1000);
const transacao1 = new Transacao(1, 500, TipoTransacao.CREDITO);
const transacao2 = new Transacao(2, 2000, TipoTransacao.DEBITO);
const investimento1 = new Investimento(1, 10000, TipoInvestimento.RENDA_VARIAVEL);
const investimento2 = new Investimento(1, 10000, TipoInvestimento.RENDA_VARIAVEL);

conta1.adicionarTransacao(transacao1);
conta2.adicionarTransacao(transacao2);

const contaCorrenteService: ContaCorrenteService = new ContaCorrenteService();
const investimentoService: InvestimentoService = new InvestimentoService();
const transacaoService: TransacaoService = new TransacaoService();

const auditoriaService = new AuditoriaFinanceiraService();

const auditaveis: Auditavel[] = [];

auditoriaService.executar([{auditavel: investimentoService, processable: conta1},{auditavel: contaCorrenteService, processable: conta2},{auditavel: investimentoService, processable: investimento1}]);