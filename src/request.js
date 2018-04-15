import axios from 'axios';


axios.defaults.timeout = 5000;
// axios.defaults.baseURL = 'http://ordercenter.earth.xpaas.lenovo.com';



axios.interceptors.request.use(config => {
    config;
}, error => {
    Promise.reject(error);
});

axios.interceptors.response.use(response => {
    response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

export default axios;
