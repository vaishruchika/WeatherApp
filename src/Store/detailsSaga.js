import {put, takeEvery} from 'redux-saga/effects'
import {GET_WEATHER_DETAILS, REQUEST_FAILED, SET_WEATHER_DETAILS} from './constant';

function* getDetails({payload}) {
    try {
        let data = yield fetch(`https://api.weatherapi.com/v1/forecast.json?key=18d6d64ca62a4b8da1260436233108&q=india/${payload}/`)
        data = yield data.json();
        if (data.error) {
            yield put({type: REQUEST_FAILED, error: data.error})
        } else yield put({type: SET_WEATHER_DETAILS, data})
    } catch (error) {
        yield put({type: REQUEST_FAILED, error})
    }

}

function* detailsSaga() {
    yield takeEvery(GET_WEATHER_DETAILS, getDetails)
}

export default detailsSaga;