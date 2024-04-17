import { all } from "redux-saga/effects";
import { HANDLE_DELETE_USER_SAGA, HANDLE_FATCH_USER_SAGA, HANDLE_GET_USER_SAGA, HANDLE_POST_USER_SAGA, HANDLE_UPDATE_USER_SAGA } from "./rootsaga/UserSaga";

function* rootSaga()
{
    yield all([
        HANDLE_GET_USER_SAGA(), 
        HANDLE_POST_USER_SAGA(),
        HANDLE_DELETE_USER_SAGA(),
        HANDLE_FATCH_USER_SAGA(),
        HANDLE_UPDATE_USER_SAGA()
    ])
}

export default rootSaga;