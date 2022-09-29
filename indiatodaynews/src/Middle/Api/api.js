import axios from 'axios'

export const getData= () => {
    return axios.get(`https://newsapi.org/v2/everything?q=health&sortBy=popularity&apiKey=e382f28068514d9e9ac1c831b61820af`)
}

export const getBusiness= () => {
    return axios.get(`https://newsapi.org/v2/everything?q=india%20crime&sortBy=popularity&apiKey=e382f28068514d9e9ac1c831b61820af`)
}

export const getSports= () => {
    return axios.get(`https://newsapi.org/v2/everything?q=aap&sortBy=relevancy&apiKey=e382f28068514d9e9ac1c831b61820af`)
}

export const getHeadline= (params={}) => {
    return axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=e382f28068514d9e9ac1c831b61820af`,{
        params: {
            page: params.page,
            pageSize: params.pageSize
        }
    })
}

export const getPost= () =>{
    return axios.get(`https://newsapi.in/newsapi/news.php?key=4DrJPblQMPLcMyVmteodPphgzj1X9a&category=hindi_state`)
}
