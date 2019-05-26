$(function(){
    $('.menu-btn').click(function(){
        $(this).toggleClass('menu-close');
        $('.slide-menu').animate({ width: 'toggle' }, 200);
    });
});