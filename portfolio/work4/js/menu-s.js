$(function(){
    $('.hamburger-on').click(function(){
        $('.menu-s').animate({ height: '90px' }, 300); 
        $('.hamburger-off').show();
        $(this).hide();
    });

    $('.hamburger-off').click(function(){
        $('.menu-s').animate({ height: '0px' }, 300); 
        $('.hamburger-on').show();
        $(this).hide();
    });
});