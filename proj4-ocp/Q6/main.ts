import { Auditavel } from "./Auditavel";
import { AuditoriaFinanceiraService } from "./AuditoriaFinaceiraService";
import { ContaCorrente } from "./ContaCorrente";
import { ContaCorrenteService } from "./ContaCorrenteService";
import { Investimento, TipoInvestimento } from "./Investimento";
import { InvestimentoService } from "./InvestimentoService";
import { TipoTransacao, Transacao } from "./Transacao";

const conta1 = new ContaCorrente('12345', 1000);
const conta2 = new ContaCorrente('12346', 1000);
const transacao1 = new Transacao(1, 500, TipoTransacao.CREDITO);
const transacao2 = new Transacao(2, 2000, TipoTransacao.DEBITO);
const investimento1 = new Investimento(1, 10000, TipoInvestimento.RENDA_VARIAVEL);
const investimento2 = new Investimento(1, 10000, TipoInvestimento.RENDA_VARIAVEL);


conta1.adicionarTransacao(transacao1);
conta2.adicionarTransacao(transacao2);

const auditoriaService = new AuditoriaFinanceiraService();

const auditaveis: Auditavel[] = [conta1, conta2, investimento1, investimento2, transacao1, transacao2];

auditoriaService.executar(auditaveis);
