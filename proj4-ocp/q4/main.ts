import { CPFNumCaracteresValidator } from "./CPFNumCaracteresValidator";
import { CPFNaoVazioValidator } from "./CptNaoVazioValidator";
import { ImpostoDeRenda } from "./ImpostoRenda";

  // Exemplo de uso
  const cpf = "123.456.789-00";
  const rendimentos = [5000, 2000, 3000];
  const despesas = [1000, 500, 800];



  const impostoDeRenda = new ImpostoDeRenda(cpf, rendimentos, despesas);


  const cpfvazio = new CPFNaoVazioValidator()
  const numCaracteres = new CPFNumCaracteresValidator()
  impostoDeRenda.processar([cpfvazio, numCaracteres]);



