import { create } from 'apisauce'

const API_KEY = "d1590d6dd2b701158456cb54f625b911"

const api = create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
})

export default {
    get: (endPoint, param) => api.get(`/${endPoint}`, { ...param, appid: API_KEY })
}


