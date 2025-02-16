/**
 * Q37, lista 01 - A lanchonete Gostosura vende apenas um tipo de sanduíche, cujo recheio inclui duas fatias de queijo, uma fatia de presunto e um hambúrguer. Sabendo que cada fatia de queijo ou presunto pesa 50 gramas, e que o hambúrguer pesa 100 gramas, faça um algoritmo em que o dono forneça a quantidade de sanduíches a fazer, e a máquina informe as quantidades (em quilos) de queijo, presunto e carne necessários para compra.
 */

// variáveis
let fatiaQueijo = 50; // 50 gramas, cada sanduíche tem duas fatias
let fatiaPresunto = 50;
let hamburguer = 100;

// entrada
let sanduichesAFazer = 5;

// processamento
let quiloQueijos = (sanduichesAFazer * fatiaQueijo * 2) / 1000;
let quiloPresunto = (sanduichesAFazer * fatiaPresunto) / 1000;
let quiloHamburguer = (sanduichesAFazer * hamburguer) / 1000;

// saída
console.log("\t** LANCHONETE **");
console.log("Para " + sanduichesAFazer + " sanduíches é necessário: ");
console.log("- " + formatar(quiloQueijos) + "kg de queijo");
console.log("- " + formatar(quiloPresunto) + "kg de presunto");
console.log("- " + formatar(quiloHamburguer) + "kg de hambúrguer");

function formatar(valor) {
    return valor.toLocaleString('pt-br', {
        minimumFractionDigits: 3,
        maximumFractionDigits: 3
    })
}