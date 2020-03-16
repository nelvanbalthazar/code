import API from '../API';

var blank = {
    init: function(){
        this.vueConfig();
        API.auth();
        console.log("MASUK PAK EKO");
    },
    vueConfig: function(){
        var app = new Vue({
            el: '#app',
            data: {
                message: 'Hello Vue!',
            }
        });
    }
}

module.exports = blank;