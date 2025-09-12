
// №1

let header = document.getElementById("header");
let changeHeaderBtn = document.getElementById("changeHeaderBtn");
changeHeaderBtn.addEventListener('click', function()
{
  header.textContent = "Заголовок изменен!";
});

// №2 
let box = document.querySelector('.box');
box.addEventListener('mouseover', function() {
box.classList.add('hovered');
box.textContent = 'Навёлся';

});
box.addEventListener('mouseout', function() {
box.classList.remove('hovered');
box.textContent = 'Наведи на меня';
});

// №3

let inputField = document.getElementById('inputField')
let output = document.getElementById('output')
inputField.addEventListener('input', function(){
  output.textContent = inputField.value;
})

// №4

let backgroundBox = document.getElementById('backgroundBox')
backgroundBox.addEventListener('dblclick', function(){
  backgroundBox.style.background = 'green';
})

// №5

let agreeCheckbox = document.getElementById('agreeCheckbox')
let submitButton = document.getElementById('submitButton')
agreeCheckbox.addEventListener('change', function(){
  submitButton.disabled = !agreeCheckbox.checked
})

// №6

let windowSize = document.getElementById('windowSize')
function updateSize() {
  windowSize.textContent = `Ширина: ${window.innerWidth}px, Высота: ${window.innerHeight}px`;
}
updateSize(); 
window.addEventListener('resize', updateSize);
