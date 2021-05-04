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

var NumberofPages = 0;
var CurrentPage = 1;
var zI = 1100;
var timeLocked = false

/*PRELOADER*/
//paste this code under the head tag or in a separate js file.
	// Wait for window load
	$(window).load(function() {
    var elements = document.querySelectorAll('.page');
    for(var i=0; i<elements.length; i++){
      elements[i].style.display = 'none';
      elements[i].onwheel = specialScroll;//listener pour le desktop scroll
      elements[i].addEventListener("touchstart", specialTouchScrollSetup, false);
      elements[i].addEventListener("touchend", specialTouchScroll, false);
      NumberofPages = NumberofPages + 1;
    }
		// Animate loader off screen
		$(".se-pre-con").fadeOut(1500);
    document.getElementById('page1').style.display = 'block';
    //console.log('nombre de pages : '+NumberofPages)

    /*document.getElementById('nav').onmouseout = function(event) {
      if (CurrentPage='page1'){
        document.getElementById('nav').style.opacity=0;
        console.log('mouseout '+event.target);
      }
    }

    /*document.getElementById('nav').onmouseover = function(event) {
      if (CurrentPage='page1'){
        document.getElementById('nav').style.opacity=100;
        console.log('mousein '+event.target)
      }
    }*/
	});

function specialScroll(event) {
  var DestPageNb;
  //event.preventDefault();
  //console.log(event.deltaY);

  if (event.deltaY>0){//Scrolling down
    DestPageNb = Math.min(CurrentPage + 1, NumberofPages);
    //console.log('DestPageNb :'+DestPageNb);
  }
  else if (event.deltaY<0) {
    DestPageNb = Math.max(CurrentPage - 1, 1);
    //console.log('DestPageNb :'+DestPageNb);
  }

  movetoPage(DestPageNb);
}

var TouchDeltaY;

function specialTouchScrollSetup(event) {
  TouchDeltaY = event.changedTouches[0].screenY;
}

function specialTouchScroll(event) {
  var DestPageNb;
  //event.preventDefault();
  //console.log(event.changedTouches[0].screenY);

  if (event.changedTouches[0].screenY<TouchDeltaY){//Scrolling down
    DestPageNb = Math.min(CurrentPage + 1, NumberofPages);
  }
  else if (event.changedTouches[0].screenY>TouchDeltaY) {
    DestPageNb = Math.max(CurrentPage - 1, 1);
  }
  else {
    return
  }

  TouchDeltaY = event.changedTouches[0].screenY

  movetoPage(DestPageNb);
}

function movetoPage(nb) {
  if (nb!=CurrentPage && !timeLocked){
    //Pour l'instant, j'ai un problème si l'utilisateur décide de quitter une page et d'y revenir immédiatement.
    var DestPage = document.getElementById('page'+nb)
    DestPage.style.display = 'none';
    void DestPage.offsetWidth; // trigger a DOM reflow (pour recharger les animations)
    //document.getElementById('page'+CurrentPage).style.zIndex = '1000';
    DestPage.style.display = 'block';
    zI = zI + 1;
    DestPage.style.zIndex = zI;
    //console.log('page'+nb);

    timeLocked = true;
    setTimeout(function(){ timeLocked = false; }, 400);

    var BlockerPos = 0 - 1 + (22*nb);
    BlockerPos = BlockerPos.toString();
    document.getElementById('bblock').style.left = BlockerPos+'px';
    //document.getElementById('b'+nb).style.backgroundPosition='-17px';
    //document.getElementById('b'+CurrentPage).style.backgroundPosition='5px';

    CurrentPage = nb;
    //DestPage.onwheel = specialScroll;
    //Déplacé à l'init
    document.getElementById('nav').style.opacity=100;

    //À mettre après la fin de l'animation (timer 800 ?)
    //document.getElementById('page'+CurrentPage).style.display = 'none';
  }
}
