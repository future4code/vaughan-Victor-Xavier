// 1 pelo process.argv
const nome= process.argv[2]
const idade = Number(process.argv[3])



console.table(`Oi, meu nome é ${nome}, e eu tenho ${idade} anos`)
console.table(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade + 7}`)