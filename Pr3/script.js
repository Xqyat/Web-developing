const select = document.getElementById('taskSelector');
for(let i=1; i<=28; i++) {
  const option = document.createElement('option');
  option.value = i;
  option.text = `Задание №${i}`;
  select.appendChild(option);
}