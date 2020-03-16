import API from '../API';

var trackCar = {
    init: function(){
        this.vueConfig();
        API.auth();
    },
    vueConfig: function(){
        var app = new Vue({
            el: '#app',
            data: {
                message: 'Hello Vue!',
                arrTracs: [
                    {id: 'a01', kota: 'Jakarta', merek: 'Toyota', seri: 'Avanza', model: 'Nana', tahun: 2010, status: 'success upload'},
                    {id: 'a02', kota: 'Jakarta', merek: 'Toyota', seri: 'Avanza', model: 'Nana', tahun: 2010, status: 'inspected'},
                    {id: 'a03', kota: 'Jakarta', merek: 'Toyota', seri: 'Avanza', model: 'Nana', tahun: 2010, status: 'transaction'},
                    {id: 'a04', kota: 'Jakarta', merek: 'Toyota', seri: 'Avanza', model: 'Nana', tahun: 2010, status: 'pelunasan'},
                    {id: 'a05', kota: 'Jakarta', merek: 'Toyota', seri: 'Avanza', model: 'Nana', tahun: 2010, status: 'terjual'},
                    {id: 'a06', kota: 'Jakarta', merek: 'Toyota', seri: 'Avanza', model: 'Nana', tahun: 2010, status: 'terjual'},
                    {id: 'a07', kota: 'Jakarta', merek: 'Toyota', seri: 'Avanza', model: 'Nana', tahun: 2010, status: 'terjual'},
                    {id: 'a08', kota: 'Jakarta', merek: 'Toyota', seri: 'Avanza', model: 'Nana', tahun: 2010, status: 'terjual'},
                    {id: 'a09', kota: 'Jakarta', merek: 'Toyota', seri: 'Avanza', model: 'Nana', tahun: 2010, status: 'terjual'},
                    {id: 'a10', kota: 'Jakarta', merek: 'Toyota', seri: 'Avanza', model: 'Nana', tahun: 2010, status: 'terjual'},
                ],
            }
        });
    }
}

module.exports = trackCar;