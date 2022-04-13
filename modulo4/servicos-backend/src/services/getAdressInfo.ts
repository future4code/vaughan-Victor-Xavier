import { Address } from './../types/Addres';
import { Response } from 'express';


import axios from "axios";

// https://viacep.com.br/ws/58052320/json/

const baseURL = "https://viacep.com.br/ws"

export const getAdressInfo = async (zipcode: string): Promise<Address | null> => {
 
    try {
        const response = await axios.get(`${baseURL}/${zipcode}/json/`)
console.log(response)
        const address: Address = {

            state: response.data.uf,
            city: response.data.localidade,
            district: response.data.bairro,
            street: response.data.logradouro,
        }
        return address


    } catch (error) {
        console.error("erro no getAddressInfo", error)
        return null
    }
}