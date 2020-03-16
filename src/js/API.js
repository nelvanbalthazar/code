import axios from 'axios';
import json from '../json/baseURL.json';


var API = {
    url: {
        host: json.baseUrl,
    },
    init: () =>{
        var instance = axios.create({
            timeout: 8000,
            headers: {'Content-Type': 'application/javascript'}
        });
        if(localStorage.getItem('token') != null){
            instance.defaults.headers.common['Authorization'] = localStorage.getItem('token');
        }
    },
    auth: () =>{
        if(localStorage.getItem('token') == null){
            window.location.replace("/");
        }
    }
}

module.exports = API;