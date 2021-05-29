import { WEATHER_API_INITIATED } from '../actionTypes';
export const wetherDetail = (payload) => {
    return {
        type: WEATHER_API_INITIATED,
        payload
    }
}