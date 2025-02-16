/**
 * Q19, lista 01. Solicite o salário bruto de uma pessoa e desconte 7% do INSS e 14% do IRRF.
 */

let salarioBruto = 1000;
let inss = salarioBruto * 0.07;
let irrf = salarioBruto * 0.14;


console.log("Salário bruto: R$" + formatarDinheiro(salarioBruto));
console.log("(-) INSS: R$" + formatarDinheiro(inss));
console.log("(-) IRRF: R$" + formatarDinheiro(irrf));


function formatarDinheiro(valor) {
    return valor.toLocaleString('pt-br', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}