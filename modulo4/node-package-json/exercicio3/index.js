let tarefa = [
    "Lavar a louça",
	"Comprar Leite"
]

const addTarefa = process.argv[2]
tarefa.push(addTarefa)
console.log(`nova tarefa ${tarefa} `)