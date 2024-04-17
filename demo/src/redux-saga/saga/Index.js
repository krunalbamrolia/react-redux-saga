import { all } from "redux-saga/effects";
import { HANDLE_GET_USER_SAGA } from "./rootsaga/UserSaga";

function* rootSaga()
{
    yield all([
        HANDLE_GET_USER_SAGA()
    ])
}

export default rootSaga;