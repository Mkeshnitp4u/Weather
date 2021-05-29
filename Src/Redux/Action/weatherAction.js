import { WEATHER_API_INITIATED } from '../Constant';
export const changeCount = () => {
    return {
        type: WEATHER_API_INITIATED,
    }
}