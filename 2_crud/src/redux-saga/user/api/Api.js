import axios from "axios"
import { DELETE_USER, GET_USER, POST_USER, UPDATE_USER, base_url } from "../../Constant"

let get_user = (action) =>{
    return axios.get(base_url + GET_USER).then((res)=>{
        let data = res.data;
        let status = res.status;
        return{data,status};
    })
}

let post_user = (action) =>{
    return axios.post(base_url + POST_USER,action.payload).then((res)=>{
        let data = res.data;
        let status = res.status;
        return{data,status};
    })
}

let delete_user = (action) =>{
    return axios.delete(base_url + DELETE_USER + action.payload).then((res)=>{
        let data = res.data;
        let status = res.status;
        return{data,status};
    })
}

let fatch_user = (action) =>{
    return axios.get(base_url + GET_USER + action.payload).then((res)=>{
        let data = res.data;
        let status = res.status;
        return{data,status};
    })
}

let update_user = (action) =>{
    return axios.get(base_url + UPDATE_USER + action.payload.id, action.payload.userData).then((res)=>{
        let data = res.data;
        let status = res.status;
        return{data,status};
    })
}

export {get_user, post_user, delete_user, fatch_user, update_user };