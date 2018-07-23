import { all } from 'redux-saga/effects';
import headerSaga from './Modules/Containers/Header/saga';

export default function* rootSaga() {
  yield all([
    headerSaga(),
  ])
}