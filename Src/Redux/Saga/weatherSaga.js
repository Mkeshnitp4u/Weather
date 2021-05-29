import { put, takeLatest, call } from "redux-saga/effects";
import * as types from "../actionTypes";


function* weatherSaga() {
  yield takeLatest(types.WEATHER_API_INITIATED, getWeather);
}

const weatherService = action => {
  // Todo
  return {
  }
};

function* getWeather(action) {
  try {
    const response = yield call(weatherService, action.payload);
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