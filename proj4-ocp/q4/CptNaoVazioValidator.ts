import { ImpostoDeRenda } from "./ImpostoRenda";
import { Validator } from "./Validator";

export class CPFNaoVazioValidator implements Validator{
    executar(impostoDeRenda: ImpostoDeRenda): void {
        if (impostoDeRenda.getCPF() != ""){
            throw new Error("CPF nao tem 11 caractetes");
        }
    }   
}