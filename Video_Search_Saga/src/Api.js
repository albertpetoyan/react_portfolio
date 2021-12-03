import axios from "axios";

export default class Api {
    static videoSearch = async(text) => {
      return axios.get("https://api.pexels.com/videos/search",{    
        params:{
          query: text
          // page : page
        },
        headers: {
          Authorization: '563492ad6f917000010000013e131d82ffe646e2b009d730195ec6a8'
        }
      })
    }

    static videoRequest = async(id) => {
      return axios.get(`https://api.pexels.com/videos/videos/${id}`,{    
       
        headers: {
          Authorization: '563492ad6f917000010000013e131d82ffe646e2b009d730195ec6a8'
        }
      })
    }

    static popularRequest = async() => {
      return axios.get('https://api.pexels.com/videos/popular',{    
       
        headers: {
          Authorization: '563492ad6f917000010000013e131d82ffe646e2b009d730195ec6a8'
        }
      })
    }
}

