$(document).ready(function() {

    $('.js--section-features').waypoint(function(direction) {
        if (direction == 'down') {
            // If user scrolls down, display sticky navigation
            $('nav').addClass('sticky');
        } else {
            // If user scrolls up, hide sticky navigation
            $('nav').removeClass('sticky');
        }
    });

    // var waypoints = $('#handler-first').waypoint(function(direction) {
    //     notify(this.element.id + ' hit 25% from top of window')
    //   }, {
    //     offset: '25%'
    //   })

})