import axios from "axios"
import { API_KEY, BASE_URL } from "../config/api_config"

export const getMoviesOrTvShows = async (type, genre) => {

  const url = BASE_URL + '/' + type + "/" + genre + "?" + "api_key=" + API_KEY;
  console.log(url)
  try {
    const response = await axios.get(url);
    // console.log("the data is: ", response.data)
    const items = response.data.results

    return items
  } catch (err) {
    throw err
  }
}

export const searchShows = async (type, query) => {
  const url = BASE_URL + '/' + "search" + '/' + type + "?" + "api_key=" + API_KEY + "&query=" + query;

  try {
    const response = await axios.get(url);
    const items = response.data.results
    return items
  } catch (err) {
    throw err
  }
}

