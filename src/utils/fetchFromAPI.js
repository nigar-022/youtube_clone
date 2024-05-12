import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    method: 'GET',
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '0fd9e5d8aamsh76bde2e365e00ffp1fc1e4jsnfa6abbdc89d9',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };


  export const fetchAPIData = async (url) => {

    try{

       const { data } =  await axios.get(`${BASE_URL}/${url}`,options)

       return data

    } catch(error) {
        console.error(error)
    }

   
  }

