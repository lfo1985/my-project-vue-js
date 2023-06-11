import axios from 'axios';
import Token from './Token';
import config from '@/config';

function AxiosHttp(){

    var token = Token().get();
    var options = { 
        headers: { 
            'Authorization': 'Bearer ' + token
        }
    }

    function get(route, callback = null, callbackErro = null){
        axios
            .get(config.baseURL + route, options)
            .then(response => {
                if(callback != null){
                    callback(response.data);
                }
            }).catch(e => {
                if(callbackErro != null){
                    callbackErro(e.response.data);
                }
            });
    }

    function post(route, data = {}, callback = null, callbackErro = null){
        axios
            .post(config.baseURL + route, data, options)
            .then(function(response){
                if(callback != null){
                    callback(response.data);
                }
            }).catch(e => {
                if(callbackErro != null){
                    callbackErro(e.response.data);
                }
            });
    }

    function login(credentials, callback = null){
        axios
            .post(config.baseURL + 'login', {
                email: credentials.email,
                password: credentials.password
            }).then(function(response){
                if(!response.data.token){
                    alert(response.data.msg);
                } else {
                    Token().set(response.data.token);
                    if(callback != null){
                        callback(response.data);
                    }
                }
            }).catch(e => {
                if(callback != null){
                    callback(e.response.data);
                }
            });
    }

    return {
        get: get,
        post: post,
        login: login
    }

}

export default AxiosHttp;