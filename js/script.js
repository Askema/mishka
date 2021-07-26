var nav = document.querySelector('.nav__list');
var toggle = document.querySelector('.page-header__toggle');

var modalButton = document.querySelectorAll('.modal-btn');
var modal = document.querySelector('.modal');

nav.classList.add('nav__list--closed');
toggle.classList.add('page-header__toggle--closed');

toggle.addEventListener('click', function (evt) {
    evt.preventDefault();
    toggle.classList.toggle('page-header__toggle--closed');
    toggle.classList.toggle('page-header__toggle--open');
    nav.classList.toggle('nav__list--closed');
});

for (var i = 0; i < modalButton.length; i++) {
    modalButton[i].addEventListener('click', function (evt) {
        evt.preventDefault();
        modal.classList.add('modal--open');
    })
}

document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        modal.classList.remove('modal--open');
    }
})
