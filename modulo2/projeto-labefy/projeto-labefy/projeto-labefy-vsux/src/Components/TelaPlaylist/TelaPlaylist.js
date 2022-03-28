import React from "react";
import axios, { Axios } from "axios";

export default class TelaPlaylist extends React.Component{
   state = {
       playlist: []
   }
   componentDidMount(){
       this.getPlaylist()
   }

   getPlaylist = ()=>{
       const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
       axios.get(url)
       .then((res)=>{
           console.log(res)

       })
       .catch((err)=>{
        console.log(err.response)
       })

   }
    render(){
        return(
            <div>
                playlist
            </div>
        )
    }
}