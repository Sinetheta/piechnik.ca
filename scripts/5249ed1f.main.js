$.fn.fullpage({anchors:["home","photography","web","print","contact"],menu:"#main-menu",resize:!1,scrollingSpeed:800,easing:"easeInOutCubic",onLeave:function(a,b){var c=a+("down"===b?1:-1);$("#page-header").fadeOut(),$(".social-links").hide(),1===a&&$("#derp-head").data("changeImage",!0),$("body").removeClass("section-1 section-2 section-3 section-4 section-5"),$("body").addClass("section-"+c)},afterLoad:function(a,b){if($("#page-header").fadeIn(),$("#page-header")[1===b?"addClass":"removeClass"]("navbar-vertical"),$("#page-header")[1===b?"removeClass":"addClass"]("navbar-horizontal"),(1===b||5===b)&&$(".social-links").show(),1!==b&&$("#derp-head").data("changeImage")){var c=Math.ceil(13*Math.random());$("#derp-head").css("background","url(images/adam-circle-"+c+".png)"),$("#derp-head").data("changeImage",!1)}}}),$("body").addClass("loaded");