var prevScrollpos = window.scrollY;

/* Get the header element and it's position */
var headerDiv = document.querySelector(".header");

function getAbsoluteHeight(el) {
    var styles = window.getComputedStyle(el);
    var margin = parseFloat(styles['marginTop']) +
                parseFloat(styles['marginBottom']);

    return Math.ceil(el.offsetHeight + margin);
}

window.onscroll = function() {
    var currentScrollPos = window.scrollY;
    var delta = prevScrollpos - currentScrollPos

    /* if scrolling down, let it scroll out of view as normal */
    if (delta < 0.5){
        headerDiv.classList.remove("fixedToTop");
        headerDiv.style.top = `${-getAbsoluteHeight(headerDiv)}px`;
    }
    /* otherwise if we're scrolling up, fix the nav to the top */
    else {
        headerDiv.classList.add("fixedToTop");
        headerDiv.style.top = "0px";
    }

    prevScrollpos = currentScrollPos;
}