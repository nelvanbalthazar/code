import API from '../API';

var auctionListing = {
    init: function(){
        this.vueConfig();
        API.auth();
        console.log("makanan dan minuman");
    },
    vueConfig: function(){
        var app = new Vue({
            el: '#app',
            data: {
                message: 'Hello Vue!',
                arrBasePrice: [
                    {id:'a01', nopol: "A 1234 BD", merek: "Toyota", seri: 'Avanza', cilinder: "1.300", type: "G", warna: "PUTIH", harga: 0},
                    {id:'a02', nopol: "A 1234 BD", merek: "Toyota", seri: 'Avanza', cilinder: "1.300", type: "G", warna: "PUTIH", harga: 0},
                    {id:'a03', nopol: "A 1234 BD", merek: "Toyota", seri: 'Avanza', cilinder: "1.300", type: "G", warna: "PUTIH", harga: 0},
                    {id:'a04', nopol: "A 1234 BD", merek: "Toyota", seri: 'Avanza', cilinder: "1.300", type: "G", warna: "PUTIH", harga: 0},
                    {id:'a05', nopol: "A 1234 BD", merek: "Toyota", seri: 'Avanza', cilinder: "1.300", type: "G", warna: "PUTIH", harga: 0},
                    {id:'a06', nopol: "A 1234 BD", merek: "Toyota", seri: 'Avanza', cilinder: "1.300", type: "G", warna: "PUTIH", harga: 0},
                    {id:'a07', nopol: "A 1234 BD", merek: "Toyota", seri: 'Avanza', cilinder: "1.300", type: "G", warna: "PUTIH", harga: 0},
                    {id:'a08', nopol: "A 1234 BD", merek: "Toyota", seri: 'Avanza', cilinder: "1.300", type: "G", warna: "PUTIH", harga: 0},
                    {id:'a09', nopol: "A 1234 BD", merek: "Toyota", seri: 'Avanza', cilinder: "1.300", type: "G", warna: "PUTIH", harga: 0},
                    {id:'a10', nopol: "A 1234 BD", merek: "Toyota", seri: 'Avanza', cilinder: "1.300", type: "G", warna: "PUTIH", harga: 0}
                ]
            }
        });
    }
}

module.exports = auctionListing;