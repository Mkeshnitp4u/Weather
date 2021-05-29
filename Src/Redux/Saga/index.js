import { fork, all } from "redux-saga/effects";
import weatherSaga from './weatherSaga';
export default function* rootSaga() {
    yield all([
        fork(weatherSaga)
    ])
}
