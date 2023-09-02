import {GET_WEATHER_DETAILS} from "./constant";

export const getWeatherDetails = (data) => {
    return {
        type: GET_WEATHER_DETAILS, payload: data
    };
}
