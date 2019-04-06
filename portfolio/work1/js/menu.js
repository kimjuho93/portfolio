$(function(){
    $('.hamburger').click(function(){        
        $('.hide-menu').animate({ 'right': '0' }, 500); 
    });

    $('.close').click(function(){        
        $('.hide-menu').animate({ 'right': '-300' }, 500); 
    });
});