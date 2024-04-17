import { GET_PRODUCT_ERROR, GET_PRODUCT_SUCESS } from "../../User/user-action/UserAction";
import { get_product } from "../../User/user-api/UserApi";

function* HANDLE_GET_PRODUCT (action) {
    try{
        let{status, data} = yield call (get_product, action)
        if(status === 200){
            yield put({type: GET_PRODUCT_SUCESS, data});
        }else{
            yield put({type: GET_PRODUCT_ERROR, data});
        }
    }catch(error){
        yield put({type:  GET_PRODUCT_ERROR, error})
    }
}

exports ({HANDLE_GET_PRODUCT});