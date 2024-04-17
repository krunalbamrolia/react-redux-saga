import { base_url, product } from "../../Constant"

let get_product = (action) => {
    return axios.get(base_url + product).then((res) => {
        let data =res.data;
        let status = res.status;
        return (data, status);
        // let hasil = action(res.data.data);
        // console.log(hasil);
        // return hasil;
    })
}

export {get_product}