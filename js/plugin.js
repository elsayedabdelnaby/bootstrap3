$(document).ready(function(){
    $('.carousel').carousel({
        interval: 5000
    });

    $('.gear-check').click(function(){
        $('.color-option').fadeToggle();
    });
});