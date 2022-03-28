import axios from "axios"
import { useEffect } from "react"


export const TripDetailsPage = () => {
useEffect(() => {
  axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/victor-xavier/trip/:id`)
 .then((res)=>{
console.log(res.data)


 }).catch((err)=>{

    
 })
}, [])


    return (
        <div>





        </div>)
}