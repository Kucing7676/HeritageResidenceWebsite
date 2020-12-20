$(document).ready(function() {    
    let nav_offset_top = $('.carousel-item').height()-999;
    function navbarFixed() {
        if ($('.carousel').length) {
            $(window).scroll(function() {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.navbar').addClass('fixed-top navscroll');
                } else {
                    $('.navbar').removeClass('fixed-top navscroll');
                }
            })
        }
    }
    navbarFixed();   
})
