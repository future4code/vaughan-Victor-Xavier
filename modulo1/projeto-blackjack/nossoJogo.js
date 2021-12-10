/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


blackjack = confirm("Voce deseja iniciar uma partida?")



if (blackjack) {
   let usuarioCarta1 = comprarCarta()
   let usuarioCarta2 = comprarCarta()
   let pcCard1 = comprarCarta()
   let pcCard2 = comprarCarta()

   let usuarioPontuacao = usuarioCarta1.valor + usuarioCarta2.valor
   let pcPontuacao = pcCard1.valor + pcCard2.valor
   console.log(`Usuario card: ${usuarioCarta1.texto} + ${usuarioCarta2.texto} Sua pontuação total é: ${usuarioPontuacao}`)
   console.log(`PC card: ${pcCard1.texto} + ${pcCard2.texto} A pontuação total do NPC é ${pcPontuacao} `)

   if (pcPontuacao < usuarioPontuacao && usuarioPontuacao <= 21) {
      console.log(`You WIN!!!`)
   }
   else if (pcPontuacao > usuarioPontuacao && pcPontuacao <= 21) {
      console.log(`You LOSE!!!`)

   }

   else if (pcPontuacao === usuarioPontuacao ) {
      console.log(`DRAWWWWW`)
   }

   else {
      console.log(`acabou o jogo!`)
   }
}




