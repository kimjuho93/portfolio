$(function(){
    $('.hamburger').click(function(){
        $('.hide-menu').toggle(function(){ 
            $('.hide-menu').animate({ height: '320px' }, 10); 
        }); 
    });
});