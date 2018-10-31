import axios from 'axios/dist/axios'

axios.default.baseURL='http://localhost:3000';

export let getsliders=()=>{
    return axios.get('/sliders')
};
