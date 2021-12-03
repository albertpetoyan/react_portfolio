import {takeLatest, put, call} from 'redux-saga/effects';
import { 
    API_SUCCESS,
    API_REQUEST,
    API_REQ,
    API_SUC,
    POPULAR_REQ,
    PUPULAR_SUC 
} from "./action";
import  Api  from '../Api';


export default function* watcher() {
    yield takeLatest(API_REQUEST, search)
    yield takeLatest(API_REQ, video)
    yield takeLatest(POPULAR_REQ, popular)
}

function* search(action)  {
   try {
       const response = yield call(Api.videoSearch, action.payload)
        yield put({
            type: API_SUCCESS,
            payload: response.data.videos
        })

   } catch (error) {
       console.log(error);
   }
}

function* video(action)  {
    try {
        const response = yield call(Api.videoRequest, action.payload)
         yield put({
            type: API_SUC,
            payload: response.data.video_files
         })
 
    } catch (error) {
        console.log(error);
    }
 }

 function* popular(action)  {
    try {
        const response = yield call(Api.popularRequest)
        yield put({
           type: PUPULAR_SUC,
           payload: response.data.videos
        })
 
    } catch (error) {
        console.log(error);
    }
 }
  