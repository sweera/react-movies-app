// import axios from 'axios'
// import {APP_KEY,BASE_URL} from '../config/api_config'
// import React from 'react'

// export const getMovies = async (movieName,type) => {
//     const url = "https://api.themoviedb.org/3/search/${type.value}?api_key=${APP_KEY}&query=${movieName.value}"
    
//     const api_call = await fetch(url)

//     const response = await api_call.json()

//     const results = await response.results

//     return results

//     console.log('results',results)
// }

import axios from "axios"
import { API_KEY, BASE_URL } from "../config/api_config"

export const getMovies = async () => {
  const sourceurl = "movie/now_playing"
  const url = BASE_URL + "/" + sourceurl + "?" + "api_key=" + `${API_KEY}`
  console.log(url)
  try {
    const response = await axios.get(url, {
      params: {
        api_key: API_KEY,
        
      },
    })
   // console.log("the data is: ", response.data)
    const items = response.data.results

    return items
  } catch (err) {
    throw err
  }
}

