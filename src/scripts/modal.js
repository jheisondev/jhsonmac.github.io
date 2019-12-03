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

// PORTIFOLIO 

const modal_portifolio = document.querySelector('.mp-1');
modal_portifolio.addEventListener('click', () => iniciaModal('modal-container-portifolio-1'));


const modal_portifolio2 = document.querySelector('.mp-2');
modal_portifolio2.addEventListener('click', () => iniciaModal('modal-container-portifolio-2'));


const modal_portifolio3 = document.querySelector('.mp-3');
modal_portifolio3.addEventListener('click', () => iniciaModal('modal-container-portifolio-3'));


const modal_portifolio4 = document.querySelector('.mp-4');
modal_portifolio4.addEventListener('click', () => iniciaModal('modal-container-portifolio-4'));


const modal_portifolio5 = document.querySelector('.mp-5');
modal_portifolio5.addEventListener('click', () => iniciaModal('modal-container-portifolio-5'));


const modal_portifolio6 = document.querySelector('.mp-6');
modal_portifolio6.addEventListener('click', () => iniciaModal('modal-container-portifolio-6'));

