import axios from 'axios';
import API from '../API';

var urlLogin = API.url.host + '/login';

var login = {
    init: function(){
        this.vueConfig();
        if(localStorage.getItem('token') != null){
            window.location.replace("./input-mobile.html");
        }
    },
    vueConfig: function(){
        var app = new Vue({
            el: '#app',
            data: {
                isSubmit: false,
                email: "",
                password: "",
            },
            methods: {
                submitLogin: function(){
                    let self = this;
                    this.isSubmit = true;
                    axios({
                        method: 'post',
                        url: urlLogin,
                        data: {
                            email: this.email,
                            password: this.password
                        }
                    }).then(res =>{
                        console.log(res.data);
                        
                        if(res.data.message === "Login Berhasil")
                        {
                            self.isSubmit = true;
                            localStorage.setItem("token", res.data.data.access_token);
                            localStorage.setItem("name", res.data.data.fullname);
                            localStorage.setItem("name", res.data.data.company);
                            localStorage.setItem("message", res.data.message);
                            window.location.replace("./input-mobile.html");
                        } 
                        else 
                        {
                            self.isSubmit = false;
                        }
                        
                    }, err =>{
                        console.log(err);
                        self.isSubmit = false;
                    });
                }
            }
        });
    }
}

module.exports = login;