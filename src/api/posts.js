import axios from "axios";

const posts =  axios.create({
    baseURL: "http://3.35.140.5/api/item"
    // baseURL: "http://3.35.140.5"
})

export default posts;