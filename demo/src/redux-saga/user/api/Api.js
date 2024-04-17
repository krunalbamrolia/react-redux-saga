import axios from "axios"
import { GET_USER, base_url } from "../../Constant"

let get_user = (action) =>{
    return axios.get(base_url + GET_USER).then((res) => {
        let data = res.data;
        let status = res.status;
        return{data, status};
    })
}

export {get_user}