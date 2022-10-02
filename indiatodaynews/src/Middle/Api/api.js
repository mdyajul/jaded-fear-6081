import axios from 'axios'

let key2=`e382f28068514d9e9ac1c831b61820af`
let key3=`b03852aed1984e10bd039b6fbc696d00`
let key4=`ffa22e2f014947329088c827f657fc8f`
let key1=`65b2b59a1f1946299ca0bed8d1e77774`


export const getData= () => {
    return axios.get(`https://newsapi.org/v2/everything?q=health&sortBy=popularity&pageSize=20&apiKey=${key2}`)
}

export const getBusiness= () => {
    return axios.get(`https://newsapi.org/v2/everything?q=india%20crime&sortBy=popularity&pageSize=20&apiKey=${key2}`)
}

export const getSports= () => {
    return axios.get(`https://newsapi.org/v2/everything?q=aap&sortBy=relevancy&pageSize=20&apiKey=${key2}`)
}

export const getHeadline= (params={}) => {
    return axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${key2}`,{
        params: {
            page: params.page,
            pageSize: params.pageSize
        }
    })
}

export const getPost= () =>{
    return axios.get(`https://newsapi.in/newsapi/news.php?key=4DrJPblQMPLcMyVmteodPphgzj1X9a&category=hindi_state`)
}
