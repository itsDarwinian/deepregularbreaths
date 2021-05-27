let numberOfPages = 0;
let currentPage = 1;
let zI = 1100;
let timeLocked = false;
let touchDeltaY = 0;

const routes = [
  { title: "Accueil", hash: "#", pageNumber: 1 },
  { title: "Bienvenue", hash: "#bienvenue", pageNumber: 2 },
  { title: "Salles", hash: "#salles", pageNumber: 3 },
  {
    title: "Capacites afflictions",
    hash: "#capacites-afflictions",
    pageNumber: 4,
  },
  { title: "Secrets", hash: "#secrets", pageNumber: 5 },
  { title: "Boite", hash: "#boite", pageNumber: 6 },
  { title: "Plus", hash: "#plus", pageNumber: 7 },
];

const routesByHashName = routes.reduce((map, route) => {
  map[route.hash] = route;

  return map;
}, {});

const routesByPageNb = routes.reduce((list, route) => {
  list[route.pageNumber - 1] = route;

  return list;
}, []);

const displayPage = () => {
  const elements = document.querySelectorAll(".page");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.display = "none";

    // desktop scroll listener
    elements[i].addEventListener("wheel", specialScroll, false);
    // mobile touch listeners
    elements[i].addEventListener("touchstart", specialTouchScrollSetup, false);
    elements[i].addEventListener("touchend", specialTouchScroll, false);
  }
  // Animate loader off screen
  const preloaderPage = document.querySelector(".se-pre-con");
  preloaderPage.classList.add("off");

  const preloaderPageDisplayTimeout = setTimeout(() => {
    preloaderPage.style.display = "none";
    clearTimeout(preloaderPageDisplayTimeout);
  }, 1500);

  document.getElementById("page1").style.display = "block";
  console.log("nombre de pages : " + elements.length);
  numberOfPages = elements.length;
};

// TODO : debounce that function (called 150 times in scroll sometimes)
const specialScroll = (event) => {
  var destPageNb;
  //event.preventDefault();
  //console.log(event.deltaY);

  if (event.deltaY > 0) {
    //Scrolling down
    destPageNb = Math.min(currentPage + 1, numberOfPages);
    //console.log('destPageNb :'+destPageNb);
  } else if (event.deltaY < 0) {
    destPageNb = Math.max(currentPage - 1, 1);
    //console.log('destPageNb :'+destPageNb);
  }

  movetoPage(destPageNb, true);
};

const specialTouchScrollSetup = (event) => {
  touchDeltaY = event.changedTouches[0].screenY;
};

const specialTouchScroll = (event) => {
  var destPageNb;
  //event.preventDefault();
  //console.log(event.changedTouches[0].screenY);

  if (event.changedTouches[0].screenY < touchDeltaY) {
    destPageNb = Math.min(currentPage + 1, numberOfPages);
  } else if (event.changedTouches[0].screenY > touchDeltaY) {
    destPageNb = Math.max(currentPage - 1, 1);
  } else {
    return;
  }

  touchDeltaY = event.changedTouches[0].screenY;

  movetoPage(destPageNb, true);
};

const onHistoryChange = () => {
  movetoPage(routesByHashName[window.location.hash].pageNumber, false);
};

const movetoPage = (nb, shouldChangeLocation) => {
  if (nb != currentPage && !timeLocked) {
    /*if (shouldChangeLocation && nb >= 1 && nb <= routes.length) {
      console.log(nb);
      window.location.hash = routesByPageNb[nb - 1].hash;
    }*/

    //Pour l'instant, j'ai un problème si l'utilisateur décide de quitter une page et d'y revenir immédiatement.
    var destPage = document.getElementById("page" + nb);

    destPage.style.display = "none";
    void destPage.offsetWidth; // trigger a DOM reflow (pour recharger les animations)
    destPage.style.display = "block";

    zI = zI + 1;
    destPage.style.zIndex = zI;
    //console.log('page'+nb);

    timeLocked = true;

    const timeLockTimeout = setTimeout(() => {
      timeLocked = false;
      clearTimeout(timeLockTimeout);
    }, 400);

    var blockerPos = 22 * nb - 1;
    blockerPos = blockerPos.toString();
    document.getElementById("bblock").style.left = blockerPos + "px";

    currentPage = nb;
    //destPage.onwheel = specialScroll;
    //Déplacé à l'init
    document.getElementById("nav").style.opacity = 100;

    //À mettre après la fin de l'animation (timer 800 ?)
    //document.getElementById('page'+currentPage).style.display = 'none';
  }
};

const flipCard = (element) => {
  for(let i = 0; i < element.children.length; i++) {
    face = element.children[i];

    if(face.classList.contains("face-invisible"))
      face.classList.remove("face-invisible")
    else
      face.classList.add("face-invisible")
  }
}

const onDocumentReady = () => {
  displayPage();
};

document.addEventListener("DOMContentLoaded", onDocumentReady, false);
window.onhashchange = () => onHistoryChange();
