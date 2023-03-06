import axios from 'axios';

// console.log(process.env.REACT_APP_BASE_URL);
const request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});
// custom method <get, put>
export const get = async (path, option = {}) => {
    //sau async là 1 hàm thì hàm này sẽ trả về promise
    const response = await request.get(path, option);
    return response.data;
};
export default request;
