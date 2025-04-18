'use strict';

const schowForm = document.getElementById("modal_uniqueName");
const btnOpenModal = document.getElementById('button__openModal');
const btnCloseModal = document.getElementById('modalCloseBtn');
const bluredBackground = document.querySelector(".page__content");

// открыть модалку
btnOpenModal.addEventListener("click", () => {
    schowForm.classList.toggle("modal__open");
    document.body.style.overflow = 'hidden'; // блокируем прокрутку фона скроллом
    bluredBackground.classList.toggle("blurred"); //  делаем фон размытым
})

// закрыть модалку по крестику
btnCloseModal.addEventListener("click", ()=> {
    schowForm.classList.toggle("modal__open");
    bluredBackground.classList.toggle("blurred"); //  делаем фон не размытым
    document.body.style.overflow = ''; // разблокируем прокрутку фона скроллом
})

// закрыть модалку по фону
schowForm.addEventListener('click', (event) => {
    if (!event.target.closest('.modal__form')) {
        schowForm.classList.toggle("modal__open");
        bluredBackground.classList.toggle("blurred");  
        document.body.style.overflow = '';  
    }
});

// закрыть модалку по ESC
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && schowForm.classList.contains("modal__open")) {
        schowForm.classList.remove("modal__open");
        bluredBackground.classList.remove("blurred");
        document.body.style.overflow = '';
    }
});