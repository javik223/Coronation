//ScrollMagic is installed from CDN. No need to require
import $ from "jquery";

var controller = new ScrollMagic.Controller();


$('.comp').each(function() {
    var tween = TweenMax.fromTo($(this), 1, {yPercent: "40%"}, {yPercent: "0%"});
    var scene = new ScrollMagic.Scene({
                                        triggerElement: ".comp"
                                    })
                                    .setTween(tween)
                                    // .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
                                    .addTo(controller);    
});