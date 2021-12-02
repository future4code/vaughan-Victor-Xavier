// leitura de codigo 
//exercicio 1
// a.
// b.
// c. 11
// d. 3
// e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// f. 9

// exercicio 2
// SUBI NUM ÔNUBUS EM MIRROCOS 27


// Escrita de codigos
//1

const nomeUsuario = prompt ("Qual seu nome de usuário?");
const emailUsuario = prompt ("Qual seu email?");
console.log("O e-mail" , emailUsuario , "foi cadastrado com sucesso. Seja bem-vinda(o)," , nomeUsuario );

//2

const comidasFavoritas = [ "churrasco", "pizza", "hamburguer", "cuscuz", "macarrão"]
console.log(`${comidasFavoritas[0]} \n ${comidasFavoritas[1]} \n ${comidasFavoritas[2]} \n ${comidasFavoritas[3]} \n ${comidasFavoritas[4]}`);


console.log("Essas são minhas comidas preferidas:" , comidasFavoritas);


const comidaUsuario = prompt ("Qual sua comida preferida?");
comidasFavoritas[1] = comidaUsuario


console.log("troca de comida pelo usuario", comidasFavoritas);


//3

array = []
let lisataDeTarefas = array

const tarefa1 = prompt("digite uma terefa que você faz no seu dia(tarefa nº 1");
const tarefa2 = prompt("digite outra terefa que você faz no seu dia tarefa nº 2 ");
const tarefa3 = prompt("Ultima terefa que você faz no seu dia tarefa nº 3");

lisataDeTarefas = [tarefa1 , tarefa2, tarefa3]

console.log(lisataDeTarefas)

 const numeroDaTarefa = prompt("Diga qual dessas tarefas você ja realizou, a 0, 1 ou 2.")



 lisataDeTarefas.splice(numeroDaTarefa,1);


console.log("tarefas a fazer", lisataDeTarefas)
