import axios from 'axios';
import API from '../API';
const feather = require('feather-icons');

var urlList = API.url.host + '/unknown';
var urlPost = API.url.host + '/users';

var sample = {
    init: function(){
        this.vueConfig();
        API.auth();
    },
    vueConfig: function(){
        var app = new Vue({
            el: '#app',
            data: {
                isLoading: true,
                message: 'Hello Vue!',
                items: [],
                cols: [
                    {field: "color", label: "Color", checked: true},
                    {field: "name", label: "Name", checked: true},
                    {field: "pantone_value", label: "Pantone Value", checked: true},
                    {field: "year", label: "Year", checked: true},
                ],
                selectedItem: null,
                objBody: {
                    name: null,
                    job: null
                },
                isSubmit: false,
                isSuccessSubmit: false,
                isFailedSubmit: false,
            },
            methods: {
                // FETCH Data
                // ====================== //
                fetchData: function(){
                    axios.get(urlList).then((response) => {
                        this.isLoading = false;
                        this.items = response.data.data;
                        setTimeout(()=>{
                            feather.replace();
                        }, 500);
                    }).catch( (error) =>{
                        console.log(error);
                    });
                },

                // POST Data
                // ====================== //
                postData: function(){
                    var $this = this;
                    $this.isSubmit = true;
                    $this.isFailedSubmit = false;
                    $this.isSuccessSubmit = false;
                    axios.post(urlPost, this.objBody).then(function(response){
                        $this.isSubmit = false;
                        $this.isSuccessSubmit = true;
                        setTimeout(()=>{
                            $('#input-user').modal('hide');
                            $this.fetchData();
                            $this.isSuccessSubmit = false;
                        }, 2000);
                    }).catch(function (error) {
                        $this.isSubmit = false;
                        $this.isFailedSubmit = true;
                    });
                },

                // Select Data
                // ====================== //
                selectItem: function(e){
                    this.selectedItem = e;
                }
            },
            beforeMount(){
                this.fetchData();
             },
        });
    }
}

module.exports = sample;