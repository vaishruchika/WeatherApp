import {GET_WEATHER_DETAILS, REQUEST_FAILED, SET_WEATHER_DETAILS} from "./constant";

export const weatherDetails = (state = {
    data: [],
    loading: false,
    error: ''
}, action) => {
    switch (action.type) {
        case GET_WEATHER_DETAILS:
            return {
                ...state,
                loading: true,
                error: ''
            }
        case SET_WEATHER_DETAILS:
            return {
                ...state,
                data: action.data,
                loading: false
            }
        case REQUEST_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error
            };

        default:
            return state
    }
}