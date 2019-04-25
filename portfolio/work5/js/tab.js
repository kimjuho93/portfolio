$(function(){
    let btnFixedSelected = $('.btn-f:nth-child(n)');

    $(btnFixedSelected).click(function(){
        $('.btn-f').removeClass('btn-f-active');
        $(this).addClass('btn-f-active');
        $('.tab-h').removeClass('tab-h-active');
       
        let btnFixedIndex = $(this).index();
        for (let i = 0; i < 4; i++) {  
            if ( btnFixedIndex == i) {
                let tabHomeSelcted = $('.tab-h:nth-child(' + (i + 1) + ')');
                $(tabHomeSelcted).addClass('tab-h-active');
            }
        }
    });

    let btnRecordSelected = $('.btn-r:nth-child(n)');

    $(btnRecordSelected).click(function(){
        $('.btn-r').removeClass('btn-r-active');
        $(this).addClass('btn-r-active');
        $('.record').removeClass('record-active');
       
        let recordIndex = $(this).index();
        for (let i = 0; i < 4; i++) {  
            if ( recordIndex == i) {
                let recordSelcted = $('.record:nth-child(' + (i + 1) + ')');
                $(recordSelcted).addClass('record-active');
            }
        }
    });

    $(function(){
        let criteria = $(window).scrollTop();
        let fixedTab = $('.home-header-fixed');
        let top = $('.top');

        if(criteria >= 50) {
            $(fixedTab).addClass('fixed');
            $(top).css({'margin-top': '45px'});
        } else {
            $(fixedTab).removeClass('fixed');
            $(top).css({'margin-top': '0px'});
        }
    });
    
    $(window).scroll(function(e){
        fixedTab();
    });
    
    function fixedTab(){
        let criteria = $(window).scrollTop();
        let fixedTab = $('.home-header-fixed');
        let top = $('.top');
    
        if(criteria >= 50) {
            $(fixedTab).addClass('fixed');
            $(top).css({'margin-top': '45px'});
        } else {
            $(fixedTab).removeClass('fixed');
            $(top).css({'margin-top': '0px'});
        }
    }      
});

