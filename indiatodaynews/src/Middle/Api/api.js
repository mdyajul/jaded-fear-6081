import axios from 'axios'

export const getData= () => {
    return axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=65b2b59a1f1946299ca0bed8d1e77774`)
}

export const getBusiness= () => {
    return axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=65b2b59a1f1946299ca0bed8d1e77774`)
}

export const getSports= () => {
    return axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=65b2b59a1f1946299ca0bed8d1e77774`)
}