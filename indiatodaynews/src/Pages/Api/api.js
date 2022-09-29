import axios from "axios";

export const getIndia= (params={}) => {
    return axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=e382f28068514d9e9ac1c831b61820af`,{
        params: {
            page: params.page,
            pageSize: params.pageSize
        }
    })
}


export const getWorld= (params={}) => {
    return axios.get(`https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=e382f28068514d9e9ac1c831b61820af`,{
        params: {
            page: params.page,
            pageSize: params.pageSize
        }
    })
}

export const getWorldRead= (params={}) => {
    return axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=e382f28068514d9e9ac1c831b61820af`,{
        params: {
            page: params.page,
            pageSize: params.pageSize
        }
    })
}

export const getBusiness= (params={}) => {
    return axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e382f28068514d9e9ac1c831b61820af`,{
        params: {
            page: params.page,
            pageSize: params.pageSize
        }
    })
}

export const getTech= (params={}) => {
    return axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=e382f28068514d9e9ac1c831b61820af`,{
        params: {
            page: params.page,
            pageSize: params.pageSize
        }
    })
}

export const getMovies= (params={}) => {
    return axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=e382f28068514d9e9ac1c831b61820af`,{
        params: {
            page: params.page,
            pageSize: params.pageSize
        }
    })
}

export const getSports= (params={}) => {
    return axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=e382f28068514d9e9ac1c831b61820af`,{
        params: {
            page: params.page,
            pageSize: params.pageSize
        }
    })
}

export const getScience= (params={}) => {
    return axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=e382f28068514d9e9ac1c831b61820af`,{
        params: {
            page: params.page,
            pageSize: params.pageSize
        }
    })
}