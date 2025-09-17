
// №1.1

let header = document.getElementById("header");
let changeHeaderBtn = document.getElementById("changeHeaderBtn");
changeHeaderBtn.addEventListener('click', function()
{
  header.textContent = "Заголовок изменен!";
});

// №1.2 
let box = document.querySelector('.box');
box.addEventListener('mouseover', function() {
box.classList.add('hovered');
box.textContent = 'Навёлся';

});
box.addEventListener('mouseout', function() {
box.classList.remove('hovered');
box.textContent = 'Наведи на меня';
});

// №1.3

let inputField = document.getElementById('inputField')
let output = document.getElementById('output')
inputField.addEventListener('input', function(){
  output.textContent = inputField.value;
})

// №1.4

let backgroundBox = document.getElementById('backgroundBox')
backgroundBox.addEventListener('dblclick', function(){
  backgroundBox.style.background = 'green';
})

// №1.5

let agreeCheckbox = document.getElementById('agreeCheckbox')
let submitButton = document.getElementById('submitButton')
agreeCheckbox.addEventListener('change', function(){
  submitButton.disabled = !agreeCheckbox.checked
})

// №1.6

let windowSize = document.getElementById('windowSize')
function updateSize() {
  windowSize.textContent = `Ширина: ${window.innerWidth}px, Высота: ${window.innerHeight}px`;
}
updateSize(); 
window.addEventListener('resize', updateSize);

// №1.7

let link = document.getElementById('link')
link.addEventListener('mouseover', function(){
  link.textContent = 'Вы навели мышь'
})
link.addEventListener('mouseout', function(){
  link.textContent = 'Ссылка'
})

// №1.8

let hideMe = document.getElementById('hideMe')
hideMe.addEventListener('click', function(){
  hideMe.style.display = 'none';
})

// №1.9

let textField = document.getElementById('textField');

textField.addEventListener('input', function() {
  if (textField.value.length > 10) {
    textField.value = textField.value.slice(0, 10);
  }
});

// №1.10

let toggleBox = document.getElementById('toggleBox')
let toggleButton = document.getElementById('toggleButton')
toggleButton.addEventListener('click', function(){
  toggleBox.classList.toggle('active')
  toggleBox.classList.toggle('inactive')
})

// №2.1

let block2__task1 = document.getElementById('block2__task1')
block2__task1.insertAdjacentHTML('afterend', '<button>Нажми меня</button>')

// №2.2

let example = document.getElementById('example')
example.classList.add('highlight')

// №2.3

let simpleButton = document.querySelector('.button')
simpleButton.classList.remove('active')

// №2.4

let resizedBox = document.querySelector('.box')
resizedBox.style.height = '100px';
resizedBox.style.width = '100px';

// №2.5

header.textContent = "Добро пожаловать!";

// №2.6

let myButton = document.getElementById('myButton')
myButton.addEventListener('click', function(){
  this.textContent = "Проверьте консоль"
  console.log("Кнопка нажата")
})

// №2.7 

let myList = document.getElementById('myList')
myList.insertAdjacentHTML('beforeend', '<li>5</li>')

// №2.8

let deleteMe = document.getElementById('deleteMe')
deleteMe.remove()

// №2.9

link.href = 'https://www.example.com';

// №2.10

let highlight = document.querySelector('.highlight')
highlight.style.color = 'blue'

// №3.1

let items = document.querySelectorAll('.item')
let strArray = ['hello', 'my', 'friend']
function updateItemsText(items, strArray) {
  items.forEach((item, index) => {
    if (index < strArray.length) {
      item.textContent = strArray[index];
    }
  });
}
updateItemsText(items, strArray);

// №3.2

let productArray = ['milk', 'bread', 'beaf']
let productList = document.getElementById('productList')

function updateProductArr(productArray){
  productArray.forEach(element => {
    productList.insertAdjacentHTML('afterbegin', `<li>${element}</li>`)
  });
  
}
updateProductArr(productArray)

// №3.3

let objectList = document.getElementById('objectList')
let objectArray = [
  {id: 'object1', name: 'bread'},
  {id: 'object2', name: 'cookies'},
  {id: 'object3', name: 'sweets'},
  {id: 'object4', name: 'eggs'},
  {id: 'object5', name: 'pork'}
];

function updateObjectArr(objectArray){
  objectArray.forEach(element => {
    let li = document.createElement('li'); 
    li.textContent = element.name;         
    li.classList.add('highlight');         
    objectList.appendChild(li); 
  });
  
}
updateObjectArr(objectArray)

// №3.4

let dataArray = [
  { name: 'bread', price: 40, quantity: 2 },
  { name: 'milk', price: 50, quantity: 1 },
  { name: 'eggs', price: 100, quantity: 12 }
];

function createTable(dataArray) {
  let container = document.getElementById('tableContainer');
  let table = document.createElement('table');
  
  let thead = document.createElement('thead');
  let headerRow = document.createElement('tr');
  Object.keys(dataArray[0]).forEach(key => {
    let th = document.createElement('th');
    th.textContent = key;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);
  
  let tbody = document.createElement('tbody');
  dataArray.forEach(item => {
    let tr = document.createElement('tr');
    Object.values(item).forEach(value => {
      let td = document.createElement('td');
      td.textContent = value;
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);

  container.appendChild(table);
}

createTable(dataArray);


// №3.5

let styleArray = [
  { id: 'item1', color: 'red', fontWeight: 'bold' },
  { id: 'item2', color: 'green', fontWeight: 'normal' },
  { id: 'item3', color: 'blue', fontWeight: 'lighter' }
];

function applyStyles(styleArray) {
  styleArray.forEach(obj => {
    let element = document.getElementById(obj.id);
    if (element) {
      element.style.color = obj.color;
      element.style.fontWeight = obj.fontWeight;
    }
  });
}

applyStyles(styleArray);

// 4.1 

let images = [
  { url: '1.1.jpg' },
  { url: '1.2.jpg' },
  { url: '1.3.jpg' },
  { url: '1.4.jpg' },
  { url: '1.5.jpg' }
];

let gallery = document.getElementById('gallery');

function createGallery(images) {
  for (let i = 0; i < images.length; i += 3) {
    let row = document.createElement('div');
    row.classList.add('gallery-row');
    let group = images.slice(i, i + 3);
    group.forEach(image => {
      let img = document.createElement('img');
      img.src = image.url;
      img.addEventListener('click', function()  {
        row.querySelectorAll('img').forEach(imgEl => {
          imgEl.classList.remove('active', 'inactive');
        });
        row.querySelectorAll('img').forEach(imgEl => {
          if (imgEl !== img) imgEl.classList.add('inactive');
        });
        img.classList.add('active');
      });
      row.appendChild(img);
    });
    gallery.appendChild(row);
  }
}

createGallery(images);

// 4.2

let form = document.getElementById('userForm');
let tableBody1 = document.getElementById('resultTable').querySelector('tbody');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  let nameInput = form.name;
  let ageInput = form.age;
  
  let name = nameInput.value.trim();
  let age = Number(ageInput.value);
  
  ageInput.style.border = '';
  
  if (!name || !ageInput.value) {
    alert('Пожалуйста, заполните все поля.');
    return;
  }
  
  if (age < 18) {
    ageInput.style.border = '2px solid red';
    alert('Возраст должен быть не меньше 18');
    return;
  }
  
  let tr = document.createElement('tr');
  
  let tdName = document.createElement('td');
  tdName.textContent = name;
  
  let tdAge = document.createElement('td');
  tdAge.textContent = age;
  
  tr.appendChild(tdName);
  tr.appendChild(tdAge);
  
  tableBody1.appendChild(tr);
  
  form.reset();
});

// 4.3

let products = [
  { name: 'Хлеб', price: 40, quantity: 2 },
  { name: 'Молоко', price: 50, quantity: 1 },
  { name: 'Яйца', price: 100, quantity: 12 },
  { name: 'Мясо', price: 300, quantity: 3 },
];

let tableBody = document.getElementById('productTable').querySelector('tbody');
let minPriceInput = document.getElementById('minPrice');

function renderTable(filteredProducts) {
  tableBody.innerHTML = ''; 
  
  filteredProducts.forEach(product => {
    let tr = document.createElement('tr');
    
    let tdName = document.createElement('td');
    tdName.textContent = product.name;
    
    let tdPrice = document.createElement('td');
    tdPrice.textContent = product.price;
    
    let tdQuantity = document.createElement('td');
    tdQuantity.textContent = product.quantity;
    
    tr.appendChild(tdName);
    tr.appendChild(tdPrice);
    tr.appendChild(tdQuantity);
    
    tableBody.appendChild(tr);
  });
}


renderTable(products);

minPriceInput.addEventListener('input', () => {
  let minPrice = Number(minPriceInput.value);
  if (!minPrice) {
    renderTable(products);
  } else {
    let filtered = products.filter(p => p.price >= minPrice);
    renderTable(filtered);
  }
});

