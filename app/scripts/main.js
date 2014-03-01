$.fn.fullpage({
    anchors: ['home', 'photography', 'web', 'print', 'contact'],
    menu: '#main-menu',
    resize : false,
    scrollingSpeed: 800,
    easing: 'easeInOutCubic',
    onLeave: function(index, direction) {
        $('.social-icons').hide();
        $('.social-icons-shim').show();
    },
    afterLoad: function( anchorLink, index, slideIndex, direction){
        if(index == 1 || index == 5){
            $('.social-icons').show();
            $('.social-icons-shim').hide();
        }
    }
});

$('#main-menu-toggle').on('click', function() {
    console.log('click')
    $('#main-menu').toggleClass('closed');
    $(this).toggleClass('closed');
});

if($(window).width() > 0) {
    $('#main-menu, #main-menu-toggle').removeClass('closed');
}

$('body').addClass('loaded')
