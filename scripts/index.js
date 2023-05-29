const openPopupButtonEl = document.querySelector('#open-popup-button');
const closePopupButtonEl = document.querySelector('#close-popup-button');


const openPopupAddButtonEl = document.querySelector('#open-add-popup-button');
const closePopupAddButtonEl = document.querySelector('#close-add-popup-button');// две строки ,добавил новые переменные. селектор ищет по моему id в html


const editPopupEl = document.querySelector('#edit-popup');
const addPopupEl = document.querySelector('#add-popup');

const pageTitleEl = document.querySelector('.profile__name');
const pageSubtitleEl = document.querySelector('.profile__description');
const nameInputEl = document.querySelector('#popup__name-input');
const subnameInputEl = document.querySelector('#popup__subname-input');

const pageTextEl = document.querySelector('.element__name');
const pageImageEl = document.querySelector('.element__photo');
const textInputEl = document.querySelector('#popup__text-input');//повторил константы, только надо их править, но смысл поймешь, выше это мы делали для профиля
const imageInputEl = document.querySelector('#popup__image-input');

const editFormEl = document.querySelector('#edit-form');

openPopupButtonEl.addEventListener('click', function () {
  openPopup(editPopupEl);
  nameInputEl.value = pageTitleEl.textContent;
subnameInputEl.value = pageSubtitleEl.textContent;

});

closePopupButtonEl.addEventListener('click', function () {
  closePopup(editPopupEl);
});



editFormEl.addEventListener('submit', function (event) {
  event.preventDefault();

  pageTitleEl.textContent = nameInputEl.value;
  pageSubtitleEl.textContent = subnameInputEl.value;

  closePopup(editPopupEl);
});

function openPopup(popupEl) {
  popupEl.classList.add('popup_opened');
}

function closePopup(popupEl) {
  popupEl.classList.remove('popup_opened');
}



//снизу повторяю функцию как изменение имени и описания, но подставляю свои кнопки,переменные



openPopupAddButtonEl.addEventListener('click', function () {
  openPopup(addPopupEl);
  textInputEl.value = pageTextEl.textContent;
imageInputEl.value = pageImageEl.textContent;

});

closePopupAddButtonEl.addEventListener('click', function () {
  closePopup(addPopupEl);
});



editFormEl.addEventListener('submit', function (event) {
  event.preventDefault();

  pageTextEl.textContent = textInputEl.value;
  pageImageEl.textContent = imageInputEl.value;

  closePopup(addPopupEl);
});

function openPopup(popupEl) {
  popupEl.classList.add('popup_opened');
}

function closePopup(popupEl) {
  popupEl.classList.remove('popup_opened');
}

