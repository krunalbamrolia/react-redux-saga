import { call, put } from "redux-saga/effects";
import { delete_user, fatch_user, get_user, post_user, update_user } from "../../user/api/Api";
import { DELETE_USER_ERROR, DELETE_USER_SUCCESS, 
        FATCH_USER_ERROR, FATCH_USER_SUCCESS, 
        GET_USER_ERROR, GET_USER_SUCCESS, 
        POST_USER_ERROR, POST_USER_SUCCESS, 
        UPDATE_USER_ERROR, UPDATE_USER_SUCCESS} from "../../user/action/Action";

function* HANDLE_GET_USER(action){
    try{
        let{status, data} = yield call(get_user,action)
        
        if(status == 200){
            yield put({type: GET_USER_SUCCESS, data});
        }else{
            yield put({type: GET_USER_ERROR,data});
        }
    }
    catch(error){
        yield put({type: GET_USER_ERROR, error});
    }
}

function* HANDLE_POST_USER(action){
    console.log(action);
    try{
        let{data, status} = yield call(post_user,action)
        console.log(data);
        console.log(status);
        
        if(status == 200 || status == 201){
            yield put({type: POST_USER_SUCCESS, data});
        }else{
            yield put({type: POST_USER_ERROR,data});
        }
    }
    catch(error){
        yield put({type: POST_USER_ERROR, error});
    }
}

function* HANDLE_DELETE_USER(action){
    try{
        let{data, status} = yield call(delete_user,action)
        
        if(status == 200){
            yield put({type: DELETE_USER_SUCCESS, data});
        }else{
            yield put({type: DELETE_USER_ERROR,data});
        }
    }
    catch(error){
        yield put({type: DELETE_USER_ERROR, error});
    }
}

function* HANDLE_FATCH_USER(action){
    console.log(action);
    try{
        let{data, status} = yield call(fatch_user, action)
        
        if(status == 200){
            yield put({type: FATCH_USER_SUCCESS, data});
        }else{
            yield put({type: FATCH_USER_ERROR,data});
        }
    }
    catch(error){
        yield put({type: FATCH_USER_ERROR, error});
    }
}

function* HANDLE_UPDATE_USER(action){
    console.log(action);
    try{
        let{data, status} = yield call(update_user, action)
        
        if(status == 200){
            yield put({type: UPDATE_USER_SUCCESS, data});
        }else{
            yield put({type: UPDATE_USER_ERROR,data});
        }
    }
    catch(error){
        yield put({type: UPDATE_USER_ERROR, error});
    }
}

export {HANDLE_GET_USER, HANDLE_POST_USER, HANDLE_DELETE_USER, HANDLE_FATCH_USER, HANDLE_UPDATE_USER};