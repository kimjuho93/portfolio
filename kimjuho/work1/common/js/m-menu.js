$(function(){
    $('.m-menu-btn').click(function(){
        $(this).toggleClass('menu-close');
        $('.slide-menu').animate({ width: 'toggle' }, 200);
        $('.down-drop').removeClass('drop-down-active');
        $('.down-drop').next('ul').slideUp(200);
    });
    
    $('.down-drop:nth-child(n)').click(function(){
        $(this).next('ul').slideToggle(200);
        $('.down-drop:nth-child(n)').not(this).next('ul').slideUp(200);
        $(this).toggleClass('down-drop-active');
        $('.down-drop:nth-child(n)').not(this).removeClass('down-drop-active');
    });
});