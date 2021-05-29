import { put, takeLatest, call } from "redux-saga/effects";
import * as types from "../actionTypes";
import API from '../../Service'


function* weatherSaga() {
  yield takeLatest(types.WEATHER_API_INITIATED, getWeather);
}

const weatherService = action => {
  const { endPoint, params } = action.payload
  return API.get(endPoint, params)
}

function* getWeather(action) {
  try {
    const response = yield call(weatherService, action);
    yield put({
      type: types.WEATHER_API_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    yield put({
      type: types.WEATHER_API_FAILURE,
      payload: error,
    });
  }
}

export default weatherSaga;