/**
 * Q41, lista 01. Faça um algoritmo que receba o peso de uma pessoa, calcule e mostre:
 * a) o novo peso se a pessoa engordar 15% sobre o peso digitado;
 * b) o novo peso se a pessoa emagrecer 20% sobre o peso digitado. 
 */
let peso = 100; // em quilo
let engordar = peso * 1.15;
let emagrecer = peso * 0.80;

console.log("Peso atual: " + peso + "kg");
// console.log("Engordou 15%: " + engordar + "kg");
console.log("Engordou 15%: " + (Math.round(engordar)) + "kg");
console.log("Emagreceu 20%: " + (Math.round(emagrecer)) + "kg");

