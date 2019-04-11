$(document).ready(function(){
    let btnTopSelected = $('.btn-top:nth-child(n)');
    let btnFixedSelected = $('.btn-f:nth-child(n)');

    $(btnTopSelected).click(function(){
        $('.btn-top').removeClass('btn-top-active');
        $(this).addClass('btn-top-active');
        $('.tab').removeClass('tab-w-active');

        let btnTopIndex = $(this).index();
        for (let i = 0; i < 5; i++) {  
            if ( btnTopIndex == i) {
                let tabSelected = $('.tab:nth-child(' + (i + 1) + ')');
                let tabIndex = $('.tab:nth-child(' + (i + 1) + ')').index();
                $(tabSelected).addClass('tab-w-active');
                console.log(tabIndex);
            }
        }
        console.log(btnTopIndex);
    });

    $(btnFixedSelected).click(function(){
        $('.btn-f').removeClass('btn-f-active');
        $(this).addClass('btn-f-active');
        $('.tab-h').removeClass('tab-h-active');
       
        let btnFixedIndex = $(this).index();
        for (let i = 0; i < 5; i++) {  
            if ( btnFixedIndex == i) {
                let tabHomeSelcted = $('.tab-h:nth-child(' + (i + 1) + ')');
                let tabHomeIndex = $('.tab-h:nth-child(' + (i + 1) + ')').index();
                $(tabHomeSelcted).addClass('tab-h-active');
                console.log(tabHomeIndex);
            }
        }
        console.log(btnFixedIndex);
    });
});

