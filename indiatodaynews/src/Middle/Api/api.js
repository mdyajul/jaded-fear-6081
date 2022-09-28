import axios from 'axios'

export const getData= () => {
    return axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=ffa22e2f014947329088c827f657fc8f`)
}

export const getBusiness= () => {
    return axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=ffa22e2f014947329088c827f657fc8f`)
}

export const getSports= () => {
    return axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=ffa22e2f014947329088c827f657fc8f`)
}

export const getHeadline= (params={}) => {
    return axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=ffa22e2f014947329088c827f657fc8f`,{
        params: {
            page: params.page,
            pageSize: params.pageSize
        }
    })
}
