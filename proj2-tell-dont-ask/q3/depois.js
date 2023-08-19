const prompt = require('prompt-sync')();
const input = prompt;

function main() {

    try {
        const renda_mensal = get_number_positive('Insira sua renda mensal: ')
        const valor_emprestimo_desejado = get_number_positive('Insira o valor desejado para emprestimo: ')
        const prazo_desejado = get_number_positive('Insira o prazo desejado para empréstimo: ')
        const status= verifica_se_emprestimo_aprovado(renda_mensal,valor_emprestimo_desejado,prazo_desejado) ? "Aprovado" : "Negado"

        console.log(status)
    } catch (e){
        console.log(e);
    }

}

function verifica_se_emprestimo_aprovado(renda_mensal,valor_emprestimo_desejado,prazo_desejado) {

    if(!numero_de_parcelas_eh_valido(prazo_desejado)){
        return false;
    }

    if(!valor_desejado_esta_acima_do_minimo(valor_emprestimo_desejado)){
        return false;
    }

    const valor_iof = calcular_iof(valor_emprestimo_desejado, prazo_desejado)
    const valor_juros = calcular_juros(valor_emprestimo_desejado, prazo_desejado)
    const valor_total_a_pagar = valor_emprestimo_desejado + valor_juros + valor_iof
    const valor_parcela = calcular_valor_parcela(valor_total_a_pagar, prazo_desejado)

    return parcela_esta_dentro_da_faixa_pagavel(valor_parcela, renda_mensal)

    
}


const numero_de_parcelas_eh_valido = prazo => prazo >= 2 && prazo <=24

const valor_desejado_esta_acima_do_minimo = valor => valor >= 1212

const calcular_iof = (valor, prazo) => (valor * 0.38)/100 + (valor * 0.0082 * prazo * 30)/100 

function calcular_juros(valor, prazo){
    const taxa_selic = 12.75/100
    if(prazo <= 6){
        return 0.5 * taxa_selic * valor
    }
    
    if(prazo <= 12){
        return 0.75 * taxa_selic * valor
    }
    
    if(prazo <= 18){
        return taxa_selic * valor
    }

    return 1.3 * taxa_selic * valor
}

const calcular_valor_parcela = (valor_total_a_pagar, prazo) => valor_total_a_pagar /prazo


const parcela_esta_dentro_da_faixa_pagavel = (valor_parcela, renda_mensal) => valor_parcela <= renda_mensal * 0.4
   

function get_number(msg){
    let value = Number(input(msg))
    if (isNaN(value)){
        throw new Error ('Favor digite um valor numérico')
    }
    return value
}

function get_number_positive(msg){
    let number = get_number(msg)
    
    if (number < 0){
        throw new Error(`O número (${number}) nao é positivo. Digite um numero positivo`)
    }

    return number

}

main()