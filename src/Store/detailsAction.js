import {LOAD_USERS_LOADING, WEATHER_DETAILS} from "./constant";

export const getWeatherDetails=(data)=> {
    return {
        type: WEATHER_DETAILS, payload: data
    };
}
