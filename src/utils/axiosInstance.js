import axios from 'axios'
export default axios.create({
    baseURL:"https://follow-taxes.herokuapp.com/api/v1/public",
    headers: {Authorization: "Bearer 3|0pxwn2BA1qWg77Et5BZvAD4DxjxUqfy0OTEEvejs"}
})