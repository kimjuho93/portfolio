$(function(){
  let criteria = $(window).scrollTop();
  let start = $('.container-4').offset().top; 

  if(criteria >= start - 300) {
    $('.left').addClass('left-ani');
    $('.right').addClass('right-ani');
    $('.section-l').addClass('section-l-ani');
    $('.section-l div').addClass('section-l-c-ani');
    $('.section-r').addClass('section-r-ani');
    $('.section-r div').addClass('section-r-c-ani');
  }
});

$(window).scroll(function(e){
  contaier4Ani();
});

function contaier4Ani(){
  let criteria = $(window).scrollTop();
  let start = $('.container-4').offset().top; 

  if(criteria >= start - 300) {
    $('.left').addClass('left-ani');
    $('.right').addClass('right-ani');
    $('.section-l').addClass('section-l-ani');
    $('.section-l div').addClass('section-l-c-ani');
    $('.section-r').addClass('section-r-ani');
    $('.section-r div').addClass('section-r-c-ani');
  }
}
