import { GET_NEWS, NEWS_RECIEVED } from './types'
import { put, takeLatest, all } from 'redux-saga/effects'

function* fetchNews() {
    const json = yield fetch('https://jsonplaceholder.typicode.com/posts/1').then(response => response.json());

    yield put({type:NEWS_RECIEVED,json});
}

function* actionWatcher(){
    yield takeLatest('GET_NEWS',fetchNews)
}

export default function* rootSaga(){
    yield all([
        actionWatcher()
    ])
}