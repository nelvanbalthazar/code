import API from '../API';

var inputMobile = {
    init: function(){
        this.vueConfig();
        API.auth();
    },
    vueConfig: function(){
        var app = new Vue({
            el: '#app',
            data: {
                selectedCrossAuction: false,
                selectedNeedExpedition: false,
                arrTracs: [
                    {id: 'a01', kota: 'Jakarta', status: 'terjual', merek: 'Toyota', seri: 'Avanza', model: 'Nana', tahun: 2010},
                    {id: 'a02', kota: 'Jakarta', status: 'terjual', merek: 'Toyota', seri: 'Avanza', model: 'Nana', tahun: 2010},
                    {id: 'a03', kota: 'Jakarta', status: 'terjual', merek: 'Toyota', seri: 'Avanza', model: 'Nana', tahun: 2010},
                    {id: 'a04', kota: 'Jakarta', status: 'terjual', merek: 'Toyota', seri: 'Avanza', model: 'Nana', tahun: 2010},
                    {id: 'a05', kota: 'Jakarta', status: 'terjual', merek: 'Toyota', seri: 'Avanza', model: 'Nana', tahun: 2010},
                    {id: 'a06', kota: 'Jakarta', status: 'terjual', merek: 'Toyota', seri: 'Avanza', model: 'Nana', tahun: 2010},
                    {id: 'a07', kota: 'Jakarta', status: 'terjual', merek: 'Toyota', seri: 'Avanza', model: 'Nana', tahun: 2010},
                    {id: 'a08', kota: 'Jakarta', status: 'terjual', merek: 'Toyota', seri: 'Avanza', model: 'Nana', tahun: 2010},
                    {id: 'a09', kota: 'Jakarta', status: 'terjual', merek: 'Toyota', seri: 'Avanza', model: 'Nana', tahun: 2010},
                    {id: 'a10', kota: 'Jakarta', status: 'terjual', merek: 'Toyota', seri: 'Avanza', model: 'Nana', tahun: 2010},
                ],
            }
        });
    }
}

module.exports = inputMobile;