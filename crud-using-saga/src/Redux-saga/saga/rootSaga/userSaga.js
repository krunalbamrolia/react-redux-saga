import { takeLatest} from 'redux-saga/effects'
import { 
        HANDLE_GET_USER, 
        HANDLE_POST_USER, 
        HANDLE_DELETE_USER, 
        HANDLE_UPDATE_USER} from "../user/manageUser"
import { 
        DELETE_USER_PENDING, 
        GET_USER_PENDING, 
        POST_USER_PENDING, 
        UPDATE_USER_PENDING } from "../../User/action/Action"


// get user
function* HANDLE_GET_USER_SAGA() {   
    yield takeLatest(GET_USER_PENDING, HANDLE_GET_USER)
}

//post user 
function* HANDLE_POST_USER_SAGA() {
    yield takeLatest(POST_USER_PENDING, HANDLE_POST_USER)
}

// delete user 
function* HANDLE_DELETE_USER_SAGA() {
    yield takeLatest(DELETE_USER_PENDING, HANDLE_DELETE_USER)
}

// UPDATE USER 
function* HANDLE_UPDATE_USER_SAGA() {
    yield takeLatest(UPDATE_USER_PENDING, HANDLE_UPDATE_USER)
}


export{HANDLE_GET_USER_SAGA,HANDLE_POST_USER_SAGA,HANDLE_DELETE_USER_SAGA,HANDLE_UPDATE_USER_SAGA};