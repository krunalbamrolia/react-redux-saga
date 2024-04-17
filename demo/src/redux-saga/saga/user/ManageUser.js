import { call, put } from "redux-saga/effects";
import { GET_USER_ERROR, GET_USER_SUCCESS } from "../../user/action/Action";
import { get_user } from "../../user/api/Api";

function* HANDLE_GET_USER (action){
    try{
        let{status, data} = yield call (get_user, action)
        console.log(status,"api status");

        if (status == 200) {
            yield put({type: GET_USER_SUCCESS, data});
        }else{
            yield put({type: GET_USER_ERROR, data});
        }
    }catch(error){
        yield put({type: GET_USER_ERROR, error });
    }
}


export {HANDLE_GET_USER};