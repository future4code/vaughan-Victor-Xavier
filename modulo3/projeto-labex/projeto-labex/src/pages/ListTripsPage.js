import axios, { Axios } from "axios"
import { useEffect, useState } from "react"



export const ListTripsPage = () => {
    const [tripList, setTripList] = useState([])

//    const seeDetails =(event)=>{
//        console.log(event.target.value)
//    }

    useEffect(() => {
        getTrip()
    }, [])

    const getTrip = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/victor-xavier/trips")
            .then((res) => {
                setTripList(res.data.trips)

            })

            .catch((err) => {
                console.log(err.res.data)
            })
    }
    const infoTrip = tripList.map((info) => {
        return (
            <div>
                <h2> {info.name} </h2>
                <p>{info.description}</p>
                <p> {info.planet} </p>
                <p> duração em anos {info.durationInDays} </p>
                <p> data: {info.date} </p>
                <button  >detalhes</button>

            </div>

        )
    })




    return (
        <div>
            {infoTrip}

        </div>)



}