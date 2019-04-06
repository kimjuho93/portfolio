$(window).scroll(function(e){
    changeColor();
});

function changeColor(){
    let criteria = $(window).scrollTop();
    let change0 = $('.intro').offset().top; 
    let change1 = $('.container-a').offset().top;  
    let change2 = $('.container-1').offset().top;
    let change3 = $('.container-p').offset().top;
    let change4 = $('.container-2').offset().top;
    let change5 = $('.container-3').offset().top;

    
    if ( criteria >= change0 ) {
        $('.logo a').css({
            'color': 'white', 'text-shadow': 'none'
        });
        $('.menu').css({
            'color': 'white', 'text-shadow': 'none'
        });
    }

    if ( criteria >= change1 ) {
        $('.logo a').css({
            'color': 'black', 'text-shadow': 'none'
        });
        $('.menu').css({
            'color': 'black', 'text-shadow': 'none'
        });
    }

    if ( criteria >= change2 - 70 ) {
        $('.logo a').css({
            'color': 'white', 'text-shadow': 'none'
        });
        $('.menu').css({
            'color': 'white', 'text-shadow': 'none'
        });
    }

    if ( criteria >= change3 - 70  ) {
        $('.logo a').css({
            'color': 'black', 'text-shadow': 'none'
        });
        $('.menu').css({
            'color': 'black', 'text-shadow': 'none'
        });
    }

    if ( criteria >= change4 - 70 ) {
        $('.logo a').css({
            'color': 'white', 'text-shadow': 'none'
        });
        $('.menu').css({
            'color': 'white', 'text-shadow': 'none'
        });
    }

    if ( criteria >= change5 - 70 ) {
        $('.logo a').css({
            'text-shadow': '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
        });
        $('.menu').css({
            'text-shadow': '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
        });
    }

};