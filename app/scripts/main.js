$.fn.fullpage({
    anchors: ['home', 'photography', 'web', 'print', 'contact'],
    menu: '#main-menu',
    resize : false,
    scrollingSpeed: 800,
    easing: 'easeInOutCubic',
    onLeave: function(index, direction) {
        $('.social-links').hide();

        if(index === 1) {
            $('#derp-head').data('changeImage', true);
        }
    },
    afterLoad: function( anchorLink, index, slideIndex, direction){
        if(index === 1 || index === 5){
            $('.social-links').show();
        }
        if ( index !== 1 && $('#derp-head').data('changeImage') ) {
            var imageIndex = Math.ceil(Math.random()*13);
            $('#derp-head').css('background', 'url(images/adam-circle-' + imageIndex + '.png)');
            $('#derp-head').data('changeImage', false);
        }
    }
});

$('body').addClass('loaded');
