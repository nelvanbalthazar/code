const feather = require('feather-icons');
import 'select2';   

$.fn.select2.defaults.set( "theme", "bootstrap" );

var libConfig = {
    init: function(){
        $(window).on('load', ()=>{
            feather.replace();
            $('[data-toggle="tooltip"]').tooltip();
            this.customSelectDropdown();
        });
        
        $(window).on('resize',()=>{
            this.customSelectDropdown();
        });
        
        $('.dropdown-menu').click(function(e) {
            e.stopPropagation();
        });
    },
    customSelectDropdown: function(){
        $(".select-dropdown").select2();
        $(".select-dropdown-no-search").select2({
            minimumResultsForSearch: -1,
            placeholder: '--Pilih--'
        });
    }
}

module.exports = libConfig;