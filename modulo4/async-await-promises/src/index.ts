import { Response } from 'express';
import { User } from './constants/types';
import { baseURL } from "./constants/baseURL";
import axios from "axios"


//1a)
// https://labenews.herokuapp.com/
//b) Promise<any[]>
//c)
// axios.get(`${baseURL}/subcribe`)
//     .then(res => res.data)
async function getAllSubscribers(): Promise<any[]> {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
};


//2 A) é a troca de sintaxe de const para arrow function(=>)



const getAllSubscribers1 = async (): Promise<any[]> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
};
getAllSubscribers1()
    .then(console.log)


//3 a) nao terá erro, porem o map deixaria mais claro oq a função irá fazer

//b) para identificaro tipo de cada retorno ou resposta e colocarmos em vetor

const getAllSubscribers2 = async (): Promise<User[]> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data.map((res: any) => {
        return {
            id: res.id,
            name: res.name,
            email: res.email,
        };
    });
};
getAllSubscribers2()


//4a) put e assincrona, pois é o endpoit de criar

// const news = {
//     title: "lala",
//     content: "brisola",
//     date: Date.now()
// }
const createNews = (news: any) => {
    return axios.put(`${baseURL}/news`, news)
}

// async function createNews(
//     title: string,
//     content: string,
//     date: number
// ): Promise<void> {
//     await axios.put(`${baseURL}/news`, {
//         title: title,
//         content: content,
//         date: date
//     });
// }

//5
const sendNotifications1 = async (
    users: User[],
    message: string
  ): Promise<void> => {
  
    try {
          for (const user of users) {
          await axios.post(`${baseURL}/notifications`, {
            subscriberId: user.id,
            message
          });
        }
  
        console.log("All notifications sent");
      } catch {
          console.log("Error");
      }
  };

  //6 a) retorna uma unica promisse para agregar resultados de várias operações assíncronas.

  //b)fazer com que várias promisses aconteçam em paralelo

  const sendNotifications2 = async (
    users: User[],
    message: string
  ): Promise<void> => {
  
      try {
        const promises = users.map(user =>{
          return axios.post(`${baseURL}/notifications`, {
            subscriberId: user.id,
            message: message,
          })
        })
      
        await Promise.all(promises);
  
      } catch {
          console.log("Error");
      }
  };



// createNews(news)
//     .then(getAllSubscribers2)
//     .catch(e => e.response?.data || e.message)
//     .then(console.log)