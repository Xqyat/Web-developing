const burger = document.querySelector('.burger-menu');
const nav = document.querySelector('.header__nav');
const navEl = document.querySelectorAll('.list__element');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
  navEl.classList.toggle('active');
});

const searchIcon = document.getElementById('searchIcon');
const searchForm = document.getElementById('searchForm');

searchIcon.addEventListener('click', () => { 
    searchForm.classList.toggle('active')
});


const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('subscribeModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const subscribeForm = document.getElementById('subscribeForm');
const emailInput = document.getElementById('emailInput');
const msg = document.getElementById('msg');

openModalBtn.addEventListener('click', () => {
  openModalBtn.classList.toggle('active')
  modal.style.display = 'flex';
  msg.style.display = 'none';
  emailInput.value = '';
  emailInput.focus();
});

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

subscribeForm.addEventListener('submit', () => {
  const email = emailInput.value.trim();
  if (email) {
    msg.style.display = 'block';
    subscribeForm.style.display = 'none';
  }
});

