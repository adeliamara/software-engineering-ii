import { ImpostoDeRenda } from "./ImpostoRenda";

  // Exemplo de uso
  const cpf = "123.456.789-00";
  const rendimentos = [5000, 2000, 3000];
  const despesas = [1000, 500, 800];

  const impostoDeRenda = new ImpostoDeRenda(cpf, rendimentos, despesas);
  impostoDeRenda.processar();
