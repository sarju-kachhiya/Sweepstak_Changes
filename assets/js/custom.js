$(document).ready(function() {
    $(window).scroll(function() {
        var sticky = $('.sw-header-section'),
            scroll = $(window).scrollTop();

        if (scroll >= 300) {
            sticky.addClass('fixed');
        } else {
            sticky.removeClass('fixed');
        }

        // scroll to top button
        if ($(this).scrollTop() > 300) {
            $('.sw-scroll-to-top').fadeIn();
        } else {
            $('.sw-scroll-to-top').fadeOut();
        }
    });

    $('.sw-scroll-to-top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

});