import axios from "axios"

export const getData = (params = {}) => {
    return axios.get(`https://confused-jade-crown.cyclic.app/products`, {
        params: {
            category: params.category        //men,women,kids
        }
    });
}