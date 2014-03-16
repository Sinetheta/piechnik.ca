$.fn.fullpage({
    anchors: ['home', 'photography', 'web', 'print', 'contact'],
    menu: '#main-menu',
    resize : false,
    scrollingSpeed: 800,
    easing: 'easeInOutCubic',
    onLeave: function(leaving, direction) {
        var wasClickNavigation = function() {
            return $('body').is('[class*="entering-"]')
        }
        var entering = leaving + (direction === 'down'? 1: -1);
        $('body').removeClass('section-1 section-2 section-3 section-4 section-5 leaving-');
        $('body').addClass('leaving-' + leaving);
        $('.social-links').hide();

        if(leaving === 1) {
            $('.derp-head').data('changeImage', true);
        }
        if(!wasClickNavigation()) {
            $('body').addClass('entering-' + entering);
        }
    },
    afterLoad: function(anchorLink, index, slideIndex, direction) {
        $('body').removeClass('leaving-1 leaving-2 leaving-3 leaving-4 leaving-5 entering-1 entering-2 entering-3 entering-4 entering-5');
        $('body').addClass('section-' + index);
        $('#page-header').fadeIn();
        $('#page-header')[index === 1? 'addClass': 'removeClass']('navbar-vertical');
        $('#page-header')[index === 1? 'removeClass': 'addClass']('navbar-horizontal');

        if(index === 1 || index === 5){
            $('.social-links').show();
        }
        if ( index !== 1 && $('.derp-head').data('changeImage') ) {
            var imageIndex = Math.ceil(Math.random()*13);
            $('.derp-head').css('background', 'url(images/adam-circle-' + imageIndex + '.png)');
            $('.derp-head').data('changeImage', false);
        }
    }
});

$('body').on('click', '[data-target]', function(e) {
    if(target === origin) {
        return false
    }
    var origin = $('body').prop('class').match(/section-(\d)/)[1];
    var target = $(e.target).data('target');
    $('body').addClass('leaving-' + origin + ' entering-' + target);
});

$('body').addClass('loaded');
