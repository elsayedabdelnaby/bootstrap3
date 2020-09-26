$(document).ready(function(){
    $('.carousel').carousel({
        interval: 5000
    });

    $('.gear-check').click(function(){
        $('.color-option').fadeToggle();
    });

    //Change Theme Color On Click
    var colorLi = $('.color-option ul li');
    colorLi
        .eq(0).css("backgroundColor", "#e41b17").end()
        .eq(1).css("backgroundColor", "#df10d4").end()
        .eq(2).css("backgroundColor", "#1907b4").end()
        .eq(3).css("backgroundColor", "#c7c408ce");
    
    colorLi.click(function(){
        $("link[href*='theme']").attr("href", $(this).attr('data-value'));
    })
});