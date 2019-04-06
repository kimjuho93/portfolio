$(function(){
    $('.hamburger-on').click(function(){
        $('.menu-s').animate({ height: '90px' }, 100); 
        $('.hamburger-off').show();
        $(this).hide();
    });

    $('.hamburger-off').click(function(){
        $('.menu-s').animate({ height: '0px' }, 100); 
        $('.hamburger-on').show();
        $(this).hide();
    });
});