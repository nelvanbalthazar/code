import API from '../API';

var calculationPrice = {
    init: function(){
        this.vueConfig();
        API.auth();
        console.log("makanan");
    },
    vueConfig: function(){
        var app = new Vue({
            el: '#app',
            data: {
                message: 'Hello Vue!',
                items: [
                    {zone: "Jakarta - 03 Mei 2018 Live", lot: 1, nopol: "A 1234 BD", merek: "Toyota", seri: "Avanza", cilinder: "1.300", type: "G", tahun: 2010, basePrice: "130,000,000", paymentIbid: "135,000,000"},
                    {zone: "Jakarta - 03 Mei 2018 Live", lot: 1, nopol: "A 1234 BD", merek: "Toyota", seri: "Avanza", cilinder: "1.300", type: "G", tahun: 2010, basePrice: "130,000,000", paymentIbid: "135,000,000"},
                    {zone: "Jakarta - 03 Mei 2018 Live", lot: 1, nopol: "A 1234 BD", merek: "Toyota", seri: "Avanza", cilinder: "1.300", type: "G", tahun: 2010, basePrice: "130,000,000", paymentIbid: "135,000,000"},
                    {zone: "Jakarta - 03 Mei 2018 Live", lot: 1, nopol: "A 1234 BD", merek: "Toyota", seri: "Avanza", cilinder: "1.300", type: "G", tahun: 2010, basePrice: "130,000,000", paymentIbid: "135,000,000"},
                    {zone: "Jakarta - 03 Mei 2018 Live", lot: 1, nopol: "A 1234 BD", merek: "Toyota", seri: "Avanza", cilinder: "1.300", type: "G", tahun: 2010, basePrice: "130,000,000", paymentIbid: "135,000,000"},
                    {zone: "Jakarta - 03 Mei 2018 Live", lot: 1, nopol: "A 1234 BD", merek: "Toyota", seri: "Avanza", cilinder: "1.300", type: "G", tahun: 2010, basePrice: "130,000,000", paymentIbid: "135,000,000"},
                    {zone: "Jakarta - 03 Mei 2018 Live", lot: 1, nopol: "A 1234 BD", merek: "Toyota", seri: "Avanza", cilinder: "1.300", type: "G", tahun: 2010, basePrice: "130,000,000", paymentIbid: "135,000,000"},
                    {zone: "Jakarta - 03 Mei 2018 Live", lot: 1, nopol: "A 1234 BD", merek: "Toyota", seri: "Avanza", cilinder: "1.300", type: "G", tahun: 2010, basePrice: "130,000,000", paymentIbid: "135,000,000"},
                    {zone: "Jakarta - 03 Mei 2018 Live", lot: 1, nopol: "A 1234 BD", merek: "Toyota", seri: "Avanza", cilinder: "1.300", type: "G", tahun: 2010, basePrice: "130,000,000", paymentIbid: "135,000,000"},
                    {zone: "Jakarta - 03 Mei 2018 Live", lot: 1, nopol: "A 1234 BD", merek: "Toyota", seri: "Avanza", cilinder: "1.300", type: "G", tahun: 2010, basePrice: "130,000,000", paymentIbid: "135,000,000"},
                ],
            }
        });
    }
}

module.exports = calculationPrice;