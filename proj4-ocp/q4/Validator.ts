import { ImpostoDeRenda } from "./ImpostoRenda";

export interface Validator {
    executar(impostoDeRenda: ImpostoDeRenda): void;
} 