'use strict';

const btnsOpenModal = document.querySelectorAll('button[data-window-id]');
const btnsCloseModal = document.querySelectorAll('.modalCloseBtn');
const bluredBackground = document.querySelector(".page__content");
let schowForm =  null;

// открыть модалку
btnsOpenModal.forEach(button => button.addEventListener("click", () => {
    schowForm = document.querySelector(`div[data-window-id = "${button.dataset.windowId}"]`)
    schowForm.classList.toggle("modal__open");
    backgroundClickCheck(schowForm);
    document.body.style.overflow = 'hidden'; // блокируем прокрутку фона скроллом
    bluredBackground.classList.toggle("blurred"); //  делаем фон размытым
}));

// закрыть модалку по крестику
btnsCloseModal.forEach(button => button.addEventListener("click", () => {
    const modulXbutton = button.closest('.modal'); //ищем ближайшую от крестика модалку closest и закрываем ее
    modulXbutton.classList.toggle("modal__open");
    bluredBackground.classList.toggle("blurred"); 
}))

//закрыть модалку по фону
function backgroundClickCheck (schowForm) {
    if (!schowForm.dataset.listenerAttached) { /* проверяем, был ли обработчик ранее навешен . если нет - один раз сюда запустим */
        schowForm.addEventListener('click', (event) => {
            if (!event.target.closest('.modal__form')) {
                schowForm.classList.toggle("modal__open");
                bluredBackground.classList.toggle("blurred");  
                document.body.style.overflow = '';  
            }
        });
    schowForm.dataset.listenerAttached = 'true'; /* навесили флаг о том что есть обработчик. Важно: без этой проверки 
    при каждом открытии модалки будет добавляться новый обработчик. 
     Мы используем data-атрибут как флаг, чтобы навесить обработчик только один раз. */
    }
}

// закрыть модалку по ESC
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && schowForm.classList.contains("modal__open")) {
        schowForm.classList.remove("modal__open");
        bluredBackground.classList.remove("blurred");
        document.body.style.overflow = '';
    }
});