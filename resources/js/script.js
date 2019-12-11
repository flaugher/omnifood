$(document).ready(function() {

    /* Show or hide sticky navigation when scrolling */
    $('.js--section-features').waypoint(function(direction) {
        if (direction == 'down') {
            // If user scrolls down, display sticky navigation
            $('nav').addClass('sticky');
        } else {
            // If user scrolls up, hide sticky navigation
            $('nav').removeClass('sticky');
        }
    }, {
        // Activate sticky nav 60px before we hit the nav section
        offset: '60px'  // Notice there's no semicolon!
    });

    /* Scroll when buttons clicked */
    $('.js--scroll-to-plans').click(function() {
        // Animation scrolls to the top of the js-section-plans section in one second
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });
    $('.js--scroll-to-start').click(function() {
        // Animation scrolls to the top of the js-section-plans section in one second
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });

    // If you know JS, there's a better way to do this: https://css-tricks.com/snippets/jquery/smooth-scrolling/
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top
              }, 1000);
              return false;
            }
          }
        });
    });



    // Waypoint example from its website
    // var waypoints = $('#handler-first').waypoint(function(direction) {
    //     notify(this.element.id + ' hit 25% from top of window')
    //   }, {
    //     offset: '25%'
    //   })

})