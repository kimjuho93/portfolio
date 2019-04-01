$(window).scroll(function(e){
    parallax();
});

function parallax(){
    let scrolled = $(window).scrollTop();
    let g_1_img = $('.g-1-img').offset().top; 
    let container3 = $('.container-3').offset().top; 

    if(scrolled >= g_1_img) {
        $('.g-1-img').css('top',+(scrolled*0.1-g_1_img*0.1)+'px');
    }

    if(scrolled >= container3) {
        $('#container-3-img').css('top',+(scrolled*0.15-container3*0.15)+'px');
    }
}

let start = $(window).scrollTop();
let g_1_img = $('.g-1-img').offset().top; 
let container3 = $('.container-3').offset().top; 

console.log(start);
console.log(g_1_img);
console.log(container3);
