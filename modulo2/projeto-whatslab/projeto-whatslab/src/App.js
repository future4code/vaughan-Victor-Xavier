// import React, { useState } from 'react';
// import './App.css';
// //import styled from 'styled-components'




// const App = () => {
//   // const [mensagem, updateMensagem] = useState('')
//   // const [mensagens , updateMensagens] = useState('')
//   // const inputMensagem = (event) =>{
//   //   updateMensagem(event.target.value)
//   // }

//   // const formSubmit = (event) =>{
//   //   event.preventDefaut()
//   //   if(mensagem.trim()){
//   //     updateMensagem('')
//   //   }
//   // }
//   state = {



//   }
//   render() 






//     return (
// //       <main  >
// //         <ul>
// //           <li>
// //             <span>
// //               oi
// //             </span>
// //           </li>
// //           <li>
// //             <span>
// //               oi
// //             </span>
// //           </li>
// //         </ul>
// // <form className='form' onSubmit={formSubmit} >
// //   <input onChange={inputMensagem} value={mensagem} placeholder='Mensagem...'>
// //   </input >
// // </form>

// //       </main>
// //     )
// //   }











// export default App;



import React from 'react';
import './App.css';
import './enter.js';


//import styled from 'styled-components'




class App extends React.Component {
  state = {

    comentario: [],

    inputComentario: "",
    inputUsuario: ""


  }
   guardaUsuario = (event) => {
    this.setState({ inputUsuario: event.target.value })
   }
   guadaComentario = (event) => {
    this.setState({ inputComentario: event.target.value })
  }
  // onChangeInputComentario = (event) => {
  //   this.setState({ inputUsuario: event.target.value })

  // }
  // onChangeInputUsuario = (event) => {
  //   this.setState({ inputComentario: event.target.value })


  enviarComentario = () => {

    const novaMensagem = {
      inputUsuario: this.state.inputUsuario,
      inputComentario: this.state.inputComentario
    }

    const copia = [...this.state.comentario, novaMensagem];

    // console.log(this.state.comentario)
    
    this.setState({ comentario: copia, inputUsuario:'',inputComentario:''  });

  }

  render() {
    // const listaDeComentario = this.state.comentario.map((coment) => {

    // return (

    //  <p>{this.props.inputUsuario}</p>
    //   //   inputUsuario: {coment.inputUsuario}
    //   // inputComentario: {coment.input}


    // )





    return (

      <div className='mainContainer ' >
       
        <div className='gradeMensagem containerMensagem ' > 
        {this.state.comentario.map((coment) =>{
           return( <p> <b> {coment.inputUsuario}</b>: {coment.inputComentario}</p>
      )
      } 
        )}
        </div >
        <input onChange={this.guardaUsuario}
          value={this.state.inputUsuario}
          placeholder='Seu Nick' />
        <form action=''>
          <input 
          id="send"
          
          className='gradeDigite'
            onChange={this.guadaComentario} value={this.state.inputComentario}
           
            placeholder='Mensagem'
          />
        </form>
        <button onClick={this.enviarComentario}>Enviar</button>


      </div>
    )
  }

}









export default App;









































