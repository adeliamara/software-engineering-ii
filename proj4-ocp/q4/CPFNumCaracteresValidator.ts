import { ImpostoDeRenda } from "./ImpostoRenda";
import { Validator } from "./Validator";

export class CPFNumCaracteresValidator implements Validator {
    executar(impostoDeRenda: ImpostoDeRenda): void {
        console.log(impostoDeRenda.getCPF().length)
        if (impostoDeRenda.getCPF().length !=11){
            throw new Error("CPF nao tem 11 caractetes");
        }
        
    }
     
}