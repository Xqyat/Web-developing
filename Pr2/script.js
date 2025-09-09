const select = document.getElementById('taskSelector');
for(let i=1; i<=63; i++) {
  const option = document.createElement('option');
  option.value = i;
  option.text = `Задание №${i}`;
  select.appendChild(option);
}

const tasksParams = {
  1: [{name:'length',label:'Длина'}, {name:'width',label:'Ширина'}],
  2: [{name:'length',label:'Длина стороны квадрата'}],
  3: [{name:'celsius',label:'Градусы Цельсия'}],
  4: [{name:'dividend',label:'Делимое'}, {name:'divider',label:'Делитель'}],
  5: [{name:'a',label:'Первый множитель'}, {name:'b',label:'Второй множитель'}],
  6: [{name:'number',label:'Число'}],
  7: [{name:'hours',label:'Часы'}],
  8: [{name:'a',label:'Первое число'}, {name:'b',label:'Второе число'}],
  9: [{name:'birthYear',label:'Год рождения'}],
  10: [{name:'a',label:'Первое слагаемое'}, {name:'b',label:'Второе слагаемое'}],
  11: [],
  12: [{name:'n',label:'Число N'}],
  13: [{name:'n',label:'Число для факториала'}],
  14: [],
  15: [],
  16: [],
  17: [],
  18: [{name:'n',label:'Число для факториала'}],
  19: [],
  20: [{name:'symbol',label:'Символ'}, {name:'n',label:'Количество'}],
  21: [{name:'num',label:'Число'}],
  22: [{name:'points',label:'Баллы'}],
  23: [{name:'num',label:'Число'}],
  24: [{name:'num',label:'Число'}],
  25: [{name:'a',label:'Первое число'}, {name:'b',label:'Второе число'}],
  26: [{name:'year',label:'Год'}],
  27: [{name:'degrees',label:'Температура'}],
  28: [{name:'num',label:'Число'}],
  29: [{name:'a',label:'Первое число'}, {name:'b',label:'Второе число'}],
  30: [{name:'symbol',label:'Символ'}],
  31: [{name:'a',label:'Первое число'}, {name:'b',label:'Второе число'}],
  32: [{name:'a',label:'Первое число'}, {name:'b',label:'Второе число'}],
  33: [{name:'num',label:'Число'}],
  34: [{name:'num',label:'Число'}],
  35: [{name:'num',label:'Число'}],
  36: [{name:'celsius',label:'Градусы Цельсия'}],
  37: [{name:'base',label:'Основание'}, {name:'exp',label:'Степень'}],
  38: [{name:'a',label:'Первое число'}, {name:'b',label:'Второе число'}],
  39: [{name:'a',label:'Первое число'}, {name:'b',label:'Второе число'}],
  40: [{name:'age',label:'Возраст'}],
  41: [{name:'array',label:'Массив (через запятую)'}],
  42: [{name:'array',label:'Массив (через запятую)'}],
  43: [{name:'array',label:'Массив (через запятую)'}, {name:'element',label:'Добавляемый элемент'}],
  44: [{name:'array',label:'Массив (через запятую)'}, {name:'element',label:'Добавляемый элемент'}],
  45: [{name:'array',label:'Массив (через запятую)'}],
  46: [{name:'array',label:'Массив (через запятую)'}],
  47: [{name:'array',label:'Массив (через запятую)'}],
  48: [{name:'array1',label:'Массив 1 (через запятую)'}, {name:'array2',label:'Массив 2 (через запятую)'}],
  49: [{name:'array',label:'Массив (через запятую)'}, {name:'count',label:'Кол-во удаляемых'}],
  50: [{name:'array',label:'Массив (через запятую)'}, {name:'index',label:'Индекс'}],
  51: [{name:'array',label:'Массив (через запятую)'}],
  52: [{name:'string',label:'Строка'}],
  53: [{name:'array',label:'Массив (через запятую)'}],
  54: [{name:'array',label:'Массив (через запятую)'}],
  55: [{name:'array',label:'Массив (через запятую)'}],
  56: [{name:'name',label:'Имя'}, {name:'age',label:'Возраст'}],
  57: [{name:'person',label:'Объект JSON'}, {name:'city',label:'Город'}],
  58: [{name:'person',label:'Объект JSON'}],
  59: [{name:'person',label:'Объект JSON'}, {name:'newName',label:'Новое имя'}],
  60: [{name:'obj',label:'Объект JSON'}, {name:'name',label:'Имя свойства'}],
  61: [{name:'obj',label:'Объект JSON'}, {name:'name',label:'Имя свойства'}],
  62: [{name:'obj1',label:'Объект JSON 1'}, {name:'obj2',label:'Объект JSON 2'}],
  63: [{name:'obj',label:'Объект JSON'}]
};

const container = document.getElementById('inputsContainer');
const runButton = document.getElementById('runButton');
const resultOutput = document.getElementById('resultOutput');

select.addEventListener('change', () => {
  container.innerHTML = '';
  const task = parseInt(select.value);
  if (isNaN(task)) return;

  const params = tasksParams[task] || [];
  params.forEach(param => {
    const inputType = (param.name.includes('array') || param.name === 'person' || param.name.startsWith('obj')) ? 'text' : 'number';
    const input = document.createElement('input');
    input.type = inputType;
    input.name = param.name;
    input.placeholder = param.label;
    input.style.marginRight = '10px';
    container.appendChild(input);
  });
});

function parseInputValue(value, name) {
  if (name.includes('array') || name === 'person' || name.startsWith('obj')) {
    try {
      return JSON.parse(value);
    } catch {
      if (name.includes('array')) {
        return value.split(',').map(s => s.trim()).map(s => isNaN(s) ? s : Number(s));
      }
      return value;
    }
  }
  return isNaN(value) || value === '' ? value : Number(value);
}

// №1
function calculateRectangleArea(length, width) {
    return "Rectangle area - " + (length * width);
}

// №2
function calculateSquarePerimeter(length) {
    return "Square perimeter - " + (length * 4);
}

// №3
function celsiusToFahrenheit(celsius) {
    return "Celsius in Fahrenheit - " + ((celsius * 9 / 5) + 32).toFixed(2);
}

// №4
function calculateRemainder(dividend, divider) {
    return "Remainder - " + (dividend % divider);
}

// №5
function calculateProduct(a, b) {
    return "Product - " + (a * b);
}

// №6
function checkEven(number) {
    return number + (number % 2 === 0 ? " is even" : " isn't even");
}

// №7
function hoursToMinutes(hours) {
    return hours + " hour(s) = " + (hours * 60) + " minute(s)";
}

// №8
function compareNumbers(a, b) {
    if (a > b) return a + " is bigger than " + b;
    if (a < b) return a + " is less than " + b;
    return a + " = " + b;
}

// №9
function calculateAge(birthYear) {
    let currentYear = new Date().getFullYear();
    return "Person is " + (currentYear - birthYear) + " years old";
}

// №10
function calculateSum(a, b) {
    return "Sum - " + (a + b);
}

// №11
function printNumbersUpTo10() {
    let result = [];
    for (let i = 0; i <= 10; i++) {
        result.push(i);
    }
    return result;
}

// №12
function sumNumbersToN(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return "N = " + sum;
}

// №13
function factorial(n) {
    if (n === 0) return 1;
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

// №14
function printEvenNumbersTo20() {
    let result = [];
    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) result.push(i);
    }
    return result;
}

// №15
function multiplicationTable5() {
    let result = [];
    for (let i = 1; i <= 10; i++) {
        result.push("5 x " + i + " = " + (5 * i));
    }
    return result;
}

// №16
function productMultiplesOf3To10() {
    let product = 1;
    for (let i = 1; i <= 10; i++) {
        if (i % 3 === 0) product *= i;
    }
    return product;
}

// №17
function printNumbersDownFrom10() {
    let result = [];
    for (let i = 10; i >= 1; i--) {
        result.push(i);
    }
    return result;
}

// №18
function factorialN(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

// №19
function multiplesOf7To100() {
    let result = [];
    for (let i = 1; i <= 100; i++) {
        if (i % 7 === 0) result.push(i);
    }
    return result;
}

// №20
function printSymbolNTimes(symbol, n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        result.push(symbol);
    }
    return result;
}

// №21
function checkPositiveNegativeZero(num) {
    if (num > 0) return num + " is positive";
    if (num < 0) return num + " is negative";
    return num + " is zero";
}

// №22
function pointAssessment(points) {
    if (points >= 90) return "Great";
    if (points >= 70) return "Good";
    if (points >= 50) return "Okay";
    if (points >= 30) return "Bad";
    return "Awful";
}

// №23
function isMultipleOf3(num) {
    return num + (num % 3 === 0 ? " is a multiple of 3" : " isn't a multiple of 3");
}

// №24
function evenOrOdd(num) {
    return num + (num % 2 === 0 ? " is even" : " is odd");
}

// №25
function compareTwoNumbers(a, b) {
    if (a > b) return a + " is bigger than " + b;
    if (a < b) return a + " is less than " + b;
    return a + " = " + b;
}

// №26
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) return year + " is leap year";
    return year + " isn't leap year";
}

// №27
function dressAdvice(degrees) {
    if (degrees < 1) return "You should wear gloves";
    if (degrees < 10) return "You should wear a jacket";
    return "You should wear whatever you want";
}

// №28
function multipleOf5And11(num) {
    if (num % 5 === 0 && num % 11 === 0) return num + " is a multiple of 5 and 11 at the same time";
    return num + " isn't a multiple of 5 and 11 at the same time";
}

// №29
function checkEquality(a, b) {
    return a === b ? a + " = " + b : a + " != " + b;
}

// №30
function isLetter(symbol){
    return /[A-Za-zА-Яа-я]/.test(symbol) ? symbol + " is a letter" : symbol + " isn't a letter";
}

// №31
function summary(a, b) {
    return a + b;
}

// №32
function multiplying(a, b) {
    return a * b;
}

// №33
function evenOddChecker(num) {
    return num % 2 === 0;
}

// №34
function factorialFunction(num) {
    if (num === 0) return 1;
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    return fact;
}

// №35
function numMultipleThree(num) {
    return num % 3 === 0;
}

// №36
function celsiusToFahrenheitFunction(celsius) {
    return ((celsius * 9 / 5) + 32).toFixed(2);
}

// №37
function power(base, exponent) {
    return Math.pow(base, exponent);
}

// №38
function smallestNum(a, b) {
    if (a > b) return b + " is smallest";
    if (a < b) return a + " is smallest";
    return "Numbers are equal";
}

// №39
function largestNum(a, b) {
    if (a < b) return b + " is largest";
    if (a > b) return a + " is largest";
    return "Numbers are equal";
}

// №40
function checkAge(age) {
    return age >= 18 ? "Совершеннолетний" : "Несовершеннолетний";
}

// №41
function printArrayElements(array) {
    return array;
}

// №42
function findFirstEven(array) {
    return array.find(e => e % 2 === 0);
}

// №43
function pushArray(array, element) {
    array.push(element);
    return array;
}

// №44
function unshiftArray(array, element) {
    array.unshift(element);
    return array;
}

// №45
function mapDoubleArray(array) {
    return array.map(e => e * 2);
}

// №46
function popArray(array) {
    array.pop();
    return array;
}

// №47
function shiftArray(array) {
    array.shift();
    return array;
}

// №48
function concatArrays(array1, array2) {
    return array1.concat(array2);
}

// №49
function spliceArrayStart(array, count) {
    array.splice(0, count);
    return array;
}

// №50
function spliceArrayFromIndex(array, index) {
    let newArray = array.splice(index);
    return { originalArray: array, newArray };
}

// №51
function joinArrayToString(array) {
    return array.join('');
}

// №52
function splitStringToArray(string) {
    return string.split('');
}

// №53
function sumArray(array) {
    return array.reduce((acc, val) => acc + val, 0);
}

// №54
function multiplyArrayBy10(array) {
    return array.map(e => e * 10);
}

// №55
function findFirstNegative(array) {
    return array.find(e => e < 0);
}

// №56
function createPerson(name, age) {
    return { name, age };
}

// №57
function addCityToPerson(person, city) {
    person.city = city;
    return person;
}

// №58
function deleteAgeFromPerson(person) {
    delete person.age;
    return person;
}

// №59
function changePersonName(person, newName) {
    person.name = newName;
    return person;
}

// №60
function nameChecker(obj, name) {
    return Object.hasOwn(obj, name);
}

// №61
function nameShowing(obj, name) {
    return obj[name];
}

// №62
function objectComparison(obj1, obj2) {
    return obj1 === obj2;
}

// №63
function printObjectKeys(obj) {
    return Object.keys(obj);
}


function getFunctionByTask(task) {
  switch(task) {
    case 1: return calculateRectangleArea;
    case 2: return calculateSquarePerimeter;
    case 3: return celsiusToFahrenheit;
    case 4: return calculateRemainder;
    case 5: return calculateProduct;
    case 6: return checkEven;
    case 7: return hoursToMinutes;
    case 8: return compareNumbers;
    case 9: return calculateAge;
    case 10: return calculateSum;
    case 11: return printNumbersUpTo10;
    case 12: return sumNumbersToN;
    case 13: return factorial;
    case 14: return printEvenNumbersTo20;
    case 15: return multiplicationTable5;
    case 16: return productMultiplesOf3To10;
    case 17: return printNumbersDownFrom10;
    case 18: return factorialN;
    case 19: return multiplesOf7To100;
    case 20: return printSymbolNTimes;
    case 21: return checkPositiveNegativeZero;
    case 22: return pointAssessment;
    case 23: return isMultipleOf3;
    case 24: return evenOrOdd;
    case 25: return compareTwoNumbers;
    case 26: return isLeapYear;
    case 27: return dressAdvice;
    case 28: return multipleOf5And11;
    case 29: return checkEquality;
    case 30: return isLetter;
    case 31: return summary;
    case 32: return multiplying;
    case 33: return evenOddChecker;
    case 34: return factorialFunction;
    case 35: return numMultipleThree;
    case 36: return celsiusToFahrenheitFunction;
    case 37: return power;
    case 38: return smallestNum;
    case 39: return largestNum;
    case 40: return checkAge;
    case 41: return printArrayElements;
    case 42: return findFirstEven;
    case 43: return pushArray;
    case 44: return unshiftArray;
    case 45: return mapDoubleArray;
    case 46: return popArray;
    case 47: return shiftArray;
    case 48: return concatArrays;
    case 49: return spliceArrayStart;
    case 50: return spliceArrayFromIndex;
    case 51: return joinArrayToString;
    case 52: return splitStringToArray;
    case 53: return sumArray;
    case 54: return multiplyArrayBy10;
    case 55: return findFirstNegative;
    case 56: return createPerson;
    case 57: return addCityToPerson;
    case 58: return deleteAgeFromPerson;
    case 59: return changePersonName;
    case 60: return nameChecker;
    case 61: return nameShowing;
    case 62: return objectComparison;
    case 63: return printObjectKeys;
    default: return null;
  }
}

runButton.addEventListener('click', () => {
  const task = parseInt(select.value);
  if (!task) {
    resultOutput.textContent = "Пожалуйста, выберите задание.";
    return;
  }
  const inputs = container.querySelectorAll('input');
  const args = [];
  inputs.forEach(input => args.push(parseInputValue(input.value, input.name)));

  const func = getFunctionByTask(task);
  if (!func) {
    resultOutput.textContent = "Функция для данного задания не найдена.";
    return;
  }

  try {
    const res = func(...args);
    if (Array.isArray(res)) resultOutput.textContent = res.join('\n');
    else if (typeof res === 'object') resultOutput.textContent = JSON.stringify(res, null, 2);
    else resultOutput.textContent = res;
  } catch(e) {
    resultOutput.textContent = "Ошибка выполнения: " + e.message;
  }
});