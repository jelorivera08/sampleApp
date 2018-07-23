import { put, takeEvery } from 'redux-saga/effects'
import { delay } from 'redux-saga';

function* headerSaga() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

function* incrementAsync() {
 yield delay(1000);
 yield put({type:"INCREMENT_ASYNC_REDUCER"});
}

export default headerSaga;