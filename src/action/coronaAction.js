import Axios from 'axios'
import { GET_DATA } from "./helper"

export const getData = () => {
    return async(dispatch)=>{
     try {
         const res = await Axios.get('https://api.covid19api.com/summary')
         dispatch({type: GET_DATA, payload: res.data})

     } catch (error) {
         console.log(error.response? error.response.data : error)
     }
    }
}