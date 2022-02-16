import axios, { Axios } from "axios"



export const ListTripsPage = () => {
const [tripList, setTripList] = useState(initialState)





    const getTrip = () => {
axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/victor-xavier/trips")
.then((res)=>{
console.log(res.data)
})

.catch((err)=>{
    console.log(err.res.data)
})
    }
    getTrip()
    

  

    return (
        <div>ListTripsPage</div>)


       
}