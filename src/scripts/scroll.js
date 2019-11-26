// Scroll sections

const menuItem = document.querySelectorAll('.nav a[href^="#"]');

menuItem.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})

function getScrollTopByHref(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(event) {
    event.preventDefault();
    const to = getScrollTopByHref(event.target);

    ScrollToPosition(to);
}

function ScrollToPosition(to) {
    window.scroll({
        top: to,
        behavior: "smooth", 
    });
}