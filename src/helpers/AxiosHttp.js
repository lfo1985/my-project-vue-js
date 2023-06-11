import axios from 'axios';
import Token from './Token';
import config from '@/config';
import Usuario from './Usuario';

function AxiosHttp(){

    var token = Token().get();
    var options = { 
        headers: { 
            'Authorization': 'Bearer ' + token
        }
    }

    function get(route, callback = null, callbackErro = null){
        axios
            .get(config.BASE_URL + route, options)
            .then(response => {
                if(callback != null){
                    callback(response.data);
                }
            }).catch(e => {
                if(callbackErro != null){
                    callbackErro(e.response.data);
                } else {
                    alert(e.response.data.msg);
                    window.location.href = '#/';
                    Token().remove();
                    Usuario().remove();
                }
            });
    }

    function post(route, data = {}, callback = null, callbackErro = null){
        axios
            .post(config.BASE_URL + route, data, options)
            .then(function(response){
                if(callback != null){
                    callback(response.data);
                }
            }).catch(e => {
                if(callbackErro != null){
                    callbackErro(e.response.data);
                } else {
                    alert(e.response.data.msg);
                    window.location.href = '#/';
                    Token().remove();
                    Usuario().remove();
                }
            });
    }

    function login(credentials, callback = null, callbackErro = null){
        axios
            .post(config.BASE_URL + 'login', {
                email: credentials.email,
                password: credentials.password
            }).then(function(response){
                Token().set(response.data.token);
                Usuario().set(response.data.usuario);
                if(callback != null){
                    callback(response.data);
                }
            }).catch(e => {
                if(callbackErro != null){
                    callbackErro(e);
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