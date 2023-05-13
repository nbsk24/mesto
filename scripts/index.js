const openPopupButtonEl = document.querySelector('#open-popup-button');
const closePopupButtonEl = document.querySelector('#close-popup-button');
const editPopupEl = document.querySelector('#edit-popup');
const pageTitleEl = document.querySelector('.profile__name');
const pageSubtitleEl = document.querySelector('.profile__description');
const nameInputEl = document.querySelector('#name-input');
const subnameInputEl = document.querySelector('#subname-input');
const editFormEl = document.querySelector('#edit-form');

openPopupButtonEl.addEventListener('click', function () {
  openPopup(editPopupEl);
});

closePopupButtonEl.addEventListener('click', function () {
  closePopup(editPopupEl);
});

nameInputEl.value = pageTitleEl.textContent;
subnameInputEl.value = pageSubtitleEl.textContent;

editFormEl.addEventListener('submit', function (event) {
  event.preventDefault();

  pageTitleEl.textContent = nameInputEl.value;
  pageSubtitleEl.textContent = subnameInputEl.value;

  closePopup(editPopupEl);
});

function openPopup(popupEl) {
  popupEl.classList.add('popup_is-opened');
}

function closePopup(popupEl) {
  popupEl.classList.remove('popup_is-opened');
}