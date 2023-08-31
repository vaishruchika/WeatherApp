import {put, takeEvery} from 'redux-saga/effects'
import {REQUEST_FAILED, SET_WEATHER_DETAILS, WEATHER_DETAILS} from './constant';

function* getDetails({payload}) {
    try{let data = yield fetch(`http://api.weatherapi.com/v1/forecast.json?key=18d6d64ca62a4b8da1260436233108&q=india/${payload}/`);
    data = yield data.json();
    yield put({type: SET_WEATHER_DETAILS, data})}
    catch(error){
        yield put({ type: REQUEST_FAILED, error })
    }
}
function* detailsSaga() {
    yield takeEvery(WEATHER_DETAILS, getDetails)
}

export default detailsSaga;