'use strict';
import TweenMax from 'gsap';
import $ from 'jquery';

var Menu = (function(options){
    // Check if menu item is available
    if (options.menuContainer.length <= 0) {
        throw new Error('There\'s no DOM element selected');
        return;
    }

    // Children elements
    const children = options.menuContainer.find('div');
    const links = options.menuContainer.find('li');
    const linksContainer = options.menuContainer.find('ul');

    let isVisible = false;
    


    // Timeline playhead
    var timeline = new TimelineMax({yoyo: true, paused: true, onComplete: () => {
        isVisible = true;
    }, onReverseComplete: () => {
        isVisible = false;
    }});
    
    // Timeline Configuration
    timeline.set(options.menuContainer, {display: 'block', autoAlpha: 0});
    timeline.set(children, {autoAlpha: 0, yPercent: "10%", position: "relative"});
    timeline.set(links, {autoAlpha: 0, yPercent: "100%"});
    timeline.to(options.menuContainer, 0.6, {autoAlpha: 1});
    timeline.staggerTo(children, 1, {autoAlpha: 1, yPercent: "0%"}, 0.1);
    timeline.staggerTo(links, 0.5, {autoAlpha: 1, yPercent: "0%", ease:Quad.easeOut}, 0.1, 1);

    // Reveal Menu
    var show = function() {
        isVisible = true;
        timeline.timeScale(1.5);
        timeline.play();
    };

    // Hide Menu
    var hide = function() {
        isVisible = false;
        timeline.timeScale(3);
        timeline.reverse();
    };

    // Toggle visibility of Menu overlay
    var toggle = function() {
        if (isVisible === false) {
            show();
        } else {
            hide();
        }
    };

    // Use ESC key to hide the menu overlay
    $(document).keydown(function(e) {
      var code = e.keyCode || e.which;
      if (code === 27) {
        hide();
      }
    });

    return {
        show: show,
        hide: hide,
        toggle: toggle
    };
}({
    menuContainer: $('.nav')
}));

export default Menu;