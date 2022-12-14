import axios from "axios";

let key5=`e382f28068514d9e9ac1c831b61820af`
let key3=`b03852aed1984e10bd039b6fbc696d00`
let key4=`ffa22e2f014947329088c827f657fc8f`
let key1=`65b2b59a1f1946299ca0bed8d1e77774`
let key2=`641cda7f13fd428c8f4e34b39d9d2a99`
export const getIndia= (params={}) => {
    return axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=641cda7f13fd428c8f4e34b39d9d2a99`,{
        params: {
            page: params.page,
            pageSize: params.pageSize
        }
    })
}

export const getIndiaRead= (params={}) => {
    return axios.get(`https://newsapi.org/v2/everything?q=jharkhand&sortBy=popularity&apiKey=641cda7f13fd428c8f4e34b39d9d2a99`,{
        params: {
            page: params.page,
            pageSize: params.pageSize
        }
    })
}

export const getWorld= (params={}) => {
    return axios.get(`https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=641cda7f13fd428c8f4e34b39d9d2a99`,{
        params: {
            page: params.page,
            pageSize: params.pageSize
        }
    })
}

export const getWorldRead= (params={}) => {
    return axios.get(`https://newsapi.org/v2/everything?q=uae&sortBy=popularity&apiKey=641cda7f13fd428c8f4e34b39d9d2a99`,{
        params: {
            page: params.page,
            pageSize: params.pageSize
        }
    })
}

export const getBusiness= (params={}) => {
    return axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=641cda7f13fd428c8f4e34b39d9d2a99`,{
        params: {
            page: params.page,
            pageSize: params.pageSize
        }
    })
}

export const getBusinessRead= (params={}) => {
    return axios.get(`https://newsapi.org/v2/everything?q=nz&sortBy=popularity&apiKey=641cda7f13fd428c8f4e34b39d9d2a99`,{
        params: {
            page: params.page,
            pageSize: params.pageSize
        }
    })
}

export const getTech= (params={}) => {
    return axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=641cda7f13fd428c8f4e34b39d9d2a99`,{
        params: {
            page: params.page,
            pageSize: params.pageSize
        }
    })
}

export const getTechRead= (params={}) => {
    return axios.get(`https://newsapi.org/v2/everything?q=tech&sortBy=popularity&apiKey=641cda7f13fd428c8f4e34b39d9d2a99`,{
        params: {
            page: params.page,
            pageSize: params.pageSize
        }
    })
}

export const getMovies= (params={}) => {
    return axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=641cda7f13fd428c8f4e34b39d9d2a99`,{
        params: {
            page: params.page,
            pageSize: params.pageSize
        }
    })
}

export const getMoviesRead= (params={}) => {
    return axios.get(`https://newsapi.org/v2/everything?q=hollywood&sortBy=popularity&apiKey=641cda7f13fd428c8f4e34b39d9d2a99`,{
        params: {
            page: params.page,
            pageSize: params.pageSize
        }
    })
}

export const getSports= (params={}) => {
    return axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=641cda7f13fd428c8f4e34b39d9d2a99`,{
        params: {
            page: params.page,
            pageSize: params.pageSize
        }
    })
}

export const getSportsRead= (params={}) => {
    return axios.get(`https://newsapi.org/v2/everything?q=play&sortBy=popularity&apiKey=641cda7f13fd428c8f4e34b39d9d2a99`,{
        params: {
            page: params.page,
            pageSize: params.pageSize
        }
    })
}

export const getScience= (params={}) => {
    return axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=641cda7f13fd428c8f4e34b39d9d2a99`,{
        params: {
            page: params.page,
            pageSize: params.pageSize
        }
    })
}

export const getScienceRead= (params={}) => {
    return axios.get(`https://newsapi.org/v2/everything?q=scientist&sortBy=popularity&apiKey=641cda7f13fd428c8f4e34b39d9d2a99`,{
        params: {
            page: params.page,
            pageSize: params.pageSize
        }
    })
}

export const getFeed= (params={}) => {
    return axios.get(`https://newsapi.org/v2/top-headlines?country=ch&apiKey=641cda7f13fd428c8f4e34b39d9d2a99`,{
        params: {
            page: params.page,
            pageSize: params.pageSize
        }
    })
}