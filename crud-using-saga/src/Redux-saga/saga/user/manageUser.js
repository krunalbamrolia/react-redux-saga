import { call, put } from 'redux-saga/effects'
import { delete_user, get_user, post_user, update_user } from "../../User/api/Api";
import { 
        DELETE_USER_ERROR, 
        DELETE_USER_SUCCESS, 
        GET_USER_ERROR, 
        GET_USER_SUCCESS, 
        POST_USER_ERROR, 
        POST_USER_SUCCESS, 
        UPDATE_USER_ERROR, 
        UPDATE_USER_SUCCESS } from '../../User/action/Action';


// get data
function* HANDLE_GET_USER(action) {
    // console.log(action, "action from manage");
    try {
        let { data, status } = yield call(get_user, action);
        // console.log(status,"status from manage");
        if (status === 200) {
            yield put({ type: GET_USER_SUCCESS, data });
        }
        else {
            yield put({ type: GET_USER_ERROR, data });
        }
    }
    catch(err) {
        yield put({ type: GET_USER_ERROR, err});
    }
}


// post data 
function* HANDLE_POST_USER(action) {
    // console.log(action,"manage action");
    try {
        let { data, status } = yield call(post_user, action);
        // console.log(data,"data from manage");
        if (status == 201 || status == 200) {
            yield put({ type: POST_USER_SUCCESS, data });
        }
        else {
            yield put({ type: POST_USER_ERROR, data });
        }
    }
    catch(err) {
        yield put({ type: POST_USER_ERROR, err});
    }
}

// delete data
function* HANDLE_DELETE_USER(action) { 
    try {
        let { data, status } = yield call(delete_user, action);
        if (status == 200) {
            yield put({ type: DELETE_USER_SUCCESS, data });
        }
        else {
            yield put({ type: DELETE_USER_ERROR, data });
        }
    }
    catch(err) {
        yield put({ type: DELETE_USER_ERROR, err});
    }
}

//update data
function* HANDLE_UPDATE_USER(action) {
    try {
        let { data, status } = yield call(update_user, action)
        if (status == 200) {
            yield put({type: UPDATE_USER_SUCCESS, data})
        }
        else {
            yield put({type:UPDATE_USER_ERROR, data})
        }
    }
    catch (err) {
        yield put({type:UPDATE_USER_ERROR, data:err})
    }
}

export {HANDLE_GET_USER,HANDLE_POST_USER,HANDLE_DELETE_USER,HANDLE_UPDATE_USER};