$(function(){
    let top = $('#work').offset().top;

    $('.scroll-btn').click(function() {
        $('html,body').animate({
            scrollTop: ( top - 50 )}, 700);
    });
});