$(function(){

    //button active
    $('.btn-in, .btn-up').click(function(){
        $('.s-in').fadeToggle( 500 );
        $('.s-up').fadeToggle( 500 );
    });

    $('.btn-in').click(function(){ 
        $('.btn-up').animate({ left: '400' });
        $(this).animate({ left: '400' });
        $(this).hide();
    });     
    $('.btn-up').click(function(){
        $('.btn-in').animate({ left: '100' });
        $('.btn-in').show();
        $(this).animate({ left: '100' });
    });

    //check e-mail

    $('#e-mail').focusout(function(){

    });

    //confirm PW
    
    $('#pw-confirm').focusout(function(){
        let pw1 = $('#pw').val();
        let pw2 = $('#pw-confirm').val();
    
        if (pw1 != pw2) {
            alert('please check your password');
        }
    });

});
