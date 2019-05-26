$(function(){
    let tab = $('.spec-tab:nth-child(n)');
    $(tab).click(function(){
        $(tab).removeClass('spec-tab-active');
        $(this).addClass('spec-tab-active');
        $('.trim').removeClass('trim-active');
        let tabIndex = $(this).index();
        for (let i = 0; i < tab.length; i++) {  
            if ( tabIndex == i) {
                let trimIndex = $('.trim:nth-child(' + (i + 1) + ')');
                $(trimIndex).addClass('trim-active');
            }
        }
    });
});