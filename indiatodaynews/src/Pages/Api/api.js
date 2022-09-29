import axios from "axios";


 



export const getIndia= (params={}) => {
    return axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=b03852aed1984e10bd039b6fbc696d00`,{
        params: {
            page: params.page,
            pageSize: params.pageSize
        }
    })
}


export const getWorld= (params={}) => {
    return axios.get(`https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=b03852aed1984e10bd039b6fbc696d00`,{
        params: {
            page: params.page,
            pageSize: params.pageSize
        }
    })
}