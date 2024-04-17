import { takeLatest } from "redux-saga/effects";
import { GET_USER_PENDING } from "../../user/action/Action";
import { HANDLE_GET_USER } from "../user/ManageUser";

function* HANDLE_GET_USER_SAGA(){
    yield takeLatest(GET_USER_PENDING, HANDLE_GET_USER);
}

export {HANDLE_GET_USER_SAGA};