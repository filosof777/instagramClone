let elFormInput = document.querySelector(".header-form__input");
let elIconSearch = document.querySelector(".header-form__icon-search");
let elIconClose = document.querySelector(".header-form__icon-close"); 

elFormInput.addEventListener('mouseup', () => {
  elIconSearch.classList = ('d-none')
  elFormInput.style.paddingLeft = '5px'
  elIconClose.style.display = 'block'
});

elFormInput.addEventListener('mouseover', () => {
  elIconSearch.classList = ('d-flex')
  elFormInput.style.paddingLeft = '5px'
  elIconClose.style.display = 'none'
});

elFormInput.addEventListener('keyup', () => {
  console.log(elFormInput.value);
});