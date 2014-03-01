$.fn.fullpage({
    anchors: ['home', 'photography', 'web', 'print', 'contact'],
    menu: '#main-menu',
    resize : false,
    scrollingSpeed: 800,
    easing: 'easeInOutCubic',
    onLeave: function(index, direction) {
        $('.social-icons').hide();
        $('.social-icons-shim').show();

        if( !$('#main-menu').data('userControlled') ) {
            $('#main-menu, #main-menu-toggle').removeClass('open');
        }
    },
    afterLoad: function( anchorLink, index, slideIndex, direction){
        if(index == 1 || index == 5){
            $('.social-icons').show();
            $('.social-icons-shim').hide();
        }
    }
});

$('#main-menu-toggle').on('click', function() {
    $('#main-menu, #main-menu-toggle').toggleClass('open');
    $('#main-menu').data('userControlled', true);
});

$('body').addClass('loaded');
