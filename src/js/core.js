var core = {
    init: function(){
        $('.toggle-header').on('click', ()=>{
            $('.wrapper').toggleClass('on');
        });
    },
}

module.exports = core;