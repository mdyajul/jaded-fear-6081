import axios from 'axios'

export const getData= () => {
    return axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=b03852aed1984e10bd039b6fbc696d00`)
}

export const getBusiness= () => {
    return axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=b03852aed1984e10bd039b6fbc696d00`)
}

export const getSports= () => {
    return axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=b03852aed1984e10bd039b6fbc696d00`)
}

export const getHeadline= (params={}) => {
    return axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=b03852aed1984e10bd039b6fbc696d00`,{
        params: {
            page: params.page,
            pageSize: params.pageSize
        }
    })
}

export const getPost= () =>{
    return axios.get(`https://newsapi.in/newsapi/news.php?key=4DrJPblQMPLcMyVmteodPphgzj1X9a&category=hindi_state`)
}
