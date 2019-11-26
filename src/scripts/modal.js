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

const modal_portifolio = document.querySelector('.mp-1');
modal_portifolio.addEventListener('click', () => iniciaModal('modal-container-portifolio'));

const modal_portifolio2 = document.querySelector('.mp-2');
modal_portifolio2.addEventListener('click', () => iniciaModal('modal-container-portifolio-2'));