$(document).ready(function() {
$('#down').on('click', function() { // Au clic sur un élément
  console.log("t'as cliqué là, nan ?"); //debugging
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
        if( window.scrollY > 300)
        {
            document.body.classList.add( 'scrolled1' );
        } else {
            document.body.classList.remove( 'scrolled1' );
        }
        if( window.scrollY > 500)
        {
            document.body.classList.add( 'scrolled2' );
        } else {
            document.body.classList.remove( 'scrolled2' );
        }
        if( window.scrollY > 700)
        {
            document.body.classList.add( 'scrolled3' );
        } else {
            document.body.classList.remove( 'scrolled3' );
        }
        if( window.scrollY > 900)
        {
            document.body.classList.add( 'scrolled4' );
        } else {
            document.body.classList.remove( 'scrolled4' );
        }
        if( window.scrollY > 1100)
        {
            document.body.classList.add( 'scrolled5' );
        } else {
            document.body.classList.remove( 'scrolled5' );
        }
        if( window.scrollY > 1300)
        {
            document.body.classList.add( 'scrolled6' );
        } else {
            document.body.classList.remove( 'scrolled6' );
        }
        if( window.scrollY > 1500)
        {
            document.body.classList.add( 'scrolled7' );
        } else {
            document.body.classList.remove( 'scrolled7' );
        }
    });
};

new ScrollDetector();

/*PRELOADER*/
$(window).load(function() {
	$(".se-pre-con").fadeOut(1500);
  console.log("la page a fini de charger, nan ?"); //debugging
});

/*SHOW ACTION du gform*/
$(document).ready(function() {
  $('#informbutton').on('click', function(){ // Au clic sur <a id="close">
    console.log("t'as cliqué là, nan ?"); //debugging
    document.getElementById("gformwrapper").classList.remove( 'hidden' ); // On lui ajoute la classe hidden
    document.getElementById("informbutton").classList.add( 'hidden' ); // On lui ajoute la classe hidden
  });
});

/*CLOSE ACTION du gform*/
$(document).ready(function() {
  $('#close').on('click', function(){ // Au clic sur <a id="close">
    console.log("t'as cliqué là, nan ?"); //debugging
    document.getElementById("gformwrapper").classList.add( 'hidden' );
    document.getElementById("informbutton").classList.remove( 'hidden' ); // On lui ajoute la classe hidden
  });
});

/*$(document).ready(function() {
  $('#gform').on('click', function(){ // Au clic sur <a id="gform">
    console.log("t'as cliqué là, nan ?"); //debugging
    var element = document.getElementById("gform"); // On enregistre <div id="gform">
    element.classList.add( 'hidden' ); // On lui ajoute la classe hidden
  });
});*/
