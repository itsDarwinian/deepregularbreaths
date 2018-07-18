$(document).ready(function() {
$('#down').on('click', function() { // Au clic sur un élément
  var page = $(this).attr('href'); // Page cible
  var speed = 750; // Durée de l'animation (en ms)
  $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
  return false;
  });
});

var ScrollDetector = function()
{
    "use strict";

    window.addEventListener( 'scroll', function() {
        if( window.scrollY > 100)
        {
            document.body.classList.add( 'scrolled' );
        } else {
            document.body.classList.remove( 'scrolled' );
        }
        if( window.scrollY > 200)
        {
            document.body.classList.add( 'scrolled1' );
        } else {
            document.body.classList.remove( 'scrolled1' );
        }
        if( window.scrollY > 400)
        {
            document.body.classList.add( 'scrolled2' );
        } else {
            document.body.classList.remove( 'scrolled2' );
        }
        if( window.scrollY > 600)
        {
            document.body.classList.add( 'scrolled3' );
        } else {
            document.body.classList.remove( 'scrolled3' );
        }
        if( window.scrollY > 800)
        {
            document.body.classList.add( 'scrolled4' );
        } else {
            document.body.classList.remove( 'scrolled4' );
        }
        if( window.scrollY > 1000)
        {
            document.body.classList.add( 'scrolled5' );
        } else {
            document.body.classList.remove( 'scrolled5' );
        }
        if( window.scrollY > 1200)
        {
            document.body.classList.add( 'scrolled6' );
        } else {
            document.body.classList.remove( 'scrolled6' );
        }
        if( window.scrollY > 1400)
        {
            document.body.classList.add( 'scrolled7' );
        } else {
            document.body.classList.remove( 'scrolled7' );
        }
    });
};

new ScrollDetector();
