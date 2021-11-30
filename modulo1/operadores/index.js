/*
Exercícios de interpretação de código:
1) 
a false
b false
c true
d Boolean

2)Sim, faltou transformar para number. o que será impresso dessa maneira que está serao os numeros digitados em sequencia
3)Para consertar ele poderia fazer:

let primeiroNumero = Number(prompt("Digite um numero!"));
let segundoNumero = Number(prompt("Digite outro numero!"));
const soma = primeiroNumero + segundoNumero;

console.log(soma);
assim transforma de script pra number e realiza a soma


*/


// Exercícios de escrita de código
// 1

const idadeUsuario = Number (prompt ("Qual sua idade?"));
const idadeAmigo = Number(prompt ("Qual a idade de seu(sua) melhor amigo(a)"));
console.log("Sua idade é maior do que a do seu(sua) melhor amigo(a)?", idadeUsuario > idadeAmigo);



// 2

const NumeroPar = Number(prompt ("Insira um número par"));

const dois = 2
const divisao = NumeroPar / dois;


console.log("resultado da divisão",NumeroPar  / dois );
console.log("restam",NumeroPar%dois);
//c) o padrão é que nenhum numero par dividido por 2nunca vai ter resto
// d) caso o usuario digite um numero impar, sempre sobra 1

// exercicio 3


const idadeEmAnos = Number (prompt ("Qual sua idade em anos?"));
const meses = 12;
const dias = 30*meses;
const horas = 24*dias;
console.log("sua idade em meses é",idadeEmAnos*meses);
console.log("sua idade em dias é",idadeEmAnos*dias);
console.log("sua idade em horas é",idadeEmAnos*horas);



const numero = Number(prompt ("Insira um número "));
const otoNumero = Number(prompt ("Insira um outro número"));

console.log ("O primeiro numero é maior que segundo?",numero > otoNumero);
console.log ("O primeiro numero é igual ao segundo?",numero === otoNumero);

restoNumero = numero % otoNumero;
console.log("resto da divisao numero 1 pelo 2", restoNumero);



console.log ("O primeiro numero é divisível pelo segundo?",restoNumero === 0);
console.log ("O segundo numero é divisível pelo primeiro?",restoNumero !== 0);







