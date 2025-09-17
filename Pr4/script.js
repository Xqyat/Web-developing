// BURGER MENU
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger--active');
  nav.classList.toggle('nav--active');
});

// Закрываем меню при клике на пункт (для UX)
nav.querySelectorAll('.nav__item').forEach(item => {
  item.addEventListener('click', () => {
    burger.classList.remove('burger--active');
    nav.classList.remove('nav--active');
  });
});

// SUBSCRIBE MODAL
const openSubscribeBtn = document.getElementById('openSubscribe');
const modal = document.getElementById('modalSubscribe');
const modalOverlay = document.getElementById('modalOverlay');
const closeSubscribeBtn = document.getElementById('closeSubscribe');
const subscribeForm = document.getElementById('subscribeForm');
const successMessage = document.getElementById('successMessage');

openSubscribeBtn.addEventListener('click', () => {
  modal.classList.add('modal--active');
  successMessage.style.display = 'none';
  subscribeForm.style.display = 'flex';
  subscribeForm.reset();
});

closeSubscribeBtn.addEventListener('click', () => {
  modal.classList.remove('modal--active');
});

modalOverlay.addEventListener('click', () => {
  modal.classList.remove('modal--active');
});

subscribeForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailValue = document.getElementById('emailInput').value.trim();
  if (emailValue) {
    subscribeForm.style.display = 'none';
    successMessage.style.display = 'block';
    setTimeout(() => {
      modal.classList.remove('modal--active');
    }, 2000);
  }
});

// SEARCH with suggestions
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const suggestionBox = document.getElementById('searchSuggestions');

// Создаем массив слов/фраз для поиска из содержимого страницы
// Можно брать заголовки, параграфы и др.
const searchContent = [];

// На странице берем текст из заголовков, параграфов и т.д.
document.querySelectorAll('main, footer').forEach(container => {
  const texts = container.innerText
    .toLowerCase()
    .match(/\b[а-яёa-z0-9]{3,}\b/gi); // слова минимум 3 символа
  if (texts) {
    texts.forEach(word => {
      if (!searchContent.includes(word)) {
        searchContent.push(word);
      }
    });
  }
});

// Функция фильтрации подсказок
function filterSuggestions(query) {
  if (!query) return [];
  const lowerQuery = query.toLowerCase();
  
  return searchContent
    .filter(word => word.startsWith(lowerQuery))
    .slice(0, 5);
}

// Отрисовка подсказок
searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim();
  const suggestions = filterSuggestions(query);
  
  suggestionBox.innerHTML = '';
  
  if (suggestions.length > 0 && query.length > 0) {
    suggestions.forEach(suggestion => {
      const li = document.createElement('li');
      li.textContent = suggestion;
      li.addEventListener('click', () => {
        searchInput.value = suggestion;
        suggestionBox.classList.remove('show');
        doSearch(suggestion);
      });
      suggestionBox.appendChild(li);
    });
    suggestionBox.classList.add('show');
  } else {
    suggestionBox.classList.remove('show');
  }
});

// Скрываем подсказки при клике вне поля
document.addEventListener('click', (e) => {
  if (!searchInput.contains(e.target) && !suggestionBox.contains(e.target)) {
    suggestionBox.classList.remove('show');
  }
});

// Поиск по странице при клике на кнопку или Enter
searchButton.addEventListener('click', () => {
  doSearch(searchInput.value.trim());
});
searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    doSearch(searchInput.value.trim());
    suggestionBox.classList.remove('show');
  }
});

// Функция поиска и подсветки элементов
function doSearch(query) {
  if (!query) return alert('Введите запрос для поиска.');

  // Выбираем статьи, заголовки и параграфы где искать
  const elements = document.querySelectorAll('main article, main h1, main h3, main h6, main p');

  let found = false;
  // Убираем предыдущие подсветки
  elements.forEach(el => {
    el.style.backgroundColor = '';
  });

  elements.forEach(el => {
    if (el.textContent.toLowerCase().includes(query.toLowerCase())) {
      el.style.backgroundColor = '#fffbcc';
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      found = true;
    }
  });

  if (!found) alert('По запросу ничего не найдено!');
}
