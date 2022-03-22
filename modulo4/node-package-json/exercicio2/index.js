// import chalk from "chalk";

const nome = (process.argv[2])
const numero1 = Number(process.argv[3])
const numero2 = Number(process.argv[4])

switch (nome) {
    case "soma":
        console.table(`\u001b[32m resposta = ${numero1 + numero2} `)
        break;
    case "subt":
        console.table(`\u001b[32m resposta = ${numero1 - numero2} `)
        break;
    case "div":
        console.log(`\u001b[32m resposta = ${numero1 / numero2} `)
        break;
    case "mult":

        console.table(`  resposta = ${numero1 * numero2} `)
        break
    default: console.log("\033[31m erro em 1 ou mais parametros")

}
var red, blue, green, reset;
red = '\u001b[31m';
blue = '\u001b[34m';
reset = '\u001b[0m';
green = '\u001b[32m';


