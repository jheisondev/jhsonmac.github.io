function iniciaModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('mostrar');
    modal.addEventListener('click', (event) => {
      if(event.target.id == modalId || event.target.id == 'exit') {
        modal.classList.remove('mostrar');
      }
    }); 
  }
}


const button = document.querySelector('.modal-more');
button.addEventListener('click', () => iniciaModal('modal-container'));


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