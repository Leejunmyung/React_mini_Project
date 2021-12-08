import axios from "axios";

const posts =  axios.create({
    baseURL: "http://localhost:3001"
    // baseURL: "http://3.35.140.5"
})

export default posts;