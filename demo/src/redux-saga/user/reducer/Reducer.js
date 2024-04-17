import { GET_USER_ERROR, GET_USER_PENDING, GET_USER_SUCCESS } from "../action/Action"

let initialstate ={
    user : [],
    isLoading : false,
    isError : null
}

let userReducer = (state = initialstate, action) => {
    switch (action.type) {
        case GET_USER_PENDING:{
            return{ isLoading : true, ...state }
        }
        case GET_USER_SUCCESS:{
            return{ isLoading: false, user : action.data }
        }           
        case GET_USER_ERROR:{
            return{ ...state, isError : action.data}
        } 
    
        default:{
            return{ ...state }
        }
            
    }
}

export default userReducer;