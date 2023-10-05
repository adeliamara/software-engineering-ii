import { ImpostoDeRenda } from "./ImpostoRenda";

export class GerarRelatorio {
    executar(impostoDeRenda: ImpostoDeRenda, impostoDevido: number){
        console.log(impostoDeRenda)
        console.log('imposto devido: ' + impostoDevido)
    }
}