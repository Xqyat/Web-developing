// №1

let rectangleLength = 5;
let rectangleWidth = 10;
let rectangleArea = rectangleLength * rectangleWidth;
console.log("Rectangle area -", rectangleArea);

// №2

let squareLength = 7;
let squarePerimetr = squareLength*4;
console.log("Square perimetr -", squarePerimetr);

// №3

let Celsius = 36.6;
let Fahrenheit = (Celsius * 9/5) + 32;
console.log("Celsius in Fahrenheit -", Fahrenheit.toFixed(2));

// №4

let dividend = 20;
let divider = 8;
let quotient = (dividend%divider);
console.log("Quotient -", quotient);

// №5

let firstMultiplier = 20;
let secondMultiplier = 10;
let product = firstMultiplier * secondMultiplier;
console.log("Product -", product);

// №6

let sixthNum = 20;
if (sixthNum % 2 == 0) {
    console.log(sixthNum, "is even");
} else {
    console.log(sixthNum, "isn't even");
}

// №7

let hours = 1;
let minutes = hours * 60;
console.log(hours, "hour(s) =", minutes, "minute(s)");

// №8

let firstComparedNum = 5;
let secondComparedNum = 6;
if (firstComparedNum > secondComparedNum) {
    console.log(firstComparedNum, "is bigger than", secondComparedNum)
} else if (firstComparedNum < secondComparedNum) {
    console.log(firstComparedNum, "is less than", secondComparedNum)
} else {
    console.log(firstComparedNum, "=", secondComparedNum)
}

// №9

let birthDate = 2001;
var currentYear = new Date().getFullYear()
let personAge = currentYear - birthDate;
console.log("Person is", personAge, "years old")

// №10

let firstSummand = 20;
let secondSummand = 10;
let sum = firstSummand * secondSummand;
console.log("Sum -", sum);

// №11

for (let i = 0; i <= 10; i++) {
    console.log(i)
}

// №12

let nNum = 8;
let nNumSum = 0
for (let i = 0; i <= nNum; i++) {
    nNumSum = nNumSum + i;
}
console.log("N =", nNumSum)

// №13

let factorial = 3;
let factorialSum = 1;
if (factorial === 0){
    console.log(1)
}else{
    for (let i = 1; i <= factorial; i++) {
        factorialSum *= i;
}
console.log(factorialSum);
};

// №14

for (let i = 1; i <= 20; i++) {
    if (i % 2 ==0){
        console.log(i);
    }
    else{
        continue;
    }
}

// №15

for (let i = 1; i <= 10; i++) {
    console.log("5 x", i, "=", 5*i);
}

// №16

let sumMultipleThree = 1;
for (let i = 1; i <= 10; i++) {
    if (i % 3 == 0){
        sumMultipleThree = sumMultipleThree * i;
    }else{
        continue;
    }
}
console.log(sumMultipleThree);

// №17 

for (let i = 10; i >= 1; i--) {
    console.log(i)
}

// №18

let nNumMulitiplying = 6;
let nNumMulitiplyingSum = 1;
for (let i = 1; i <= nNumMulitiplying; i++) {
    nNumMulitiplyingSum = nNumMulitiplyingSum * i;
}
console.log(nNumMulitiplyingSum)

// №19

let numsMultipleSeven = 1;
for (let i = 1; i <= 100; i++) {
    if (i % 7 == 0){   
        console.log(i);
    }else{
        continue;
    }
}

// №20

let nSymbol = "h";
let nNum20 = 3;
for (let i = 1; i <= nNum20; i++){
    console.log(nSymbol)
}

// №21

let randomNum = 2;
if (randomNum > 0){
    console.log(randomNum," is positive")
}else if(randomNum < 0){
    console.log(randomNum," is negative")
}else{
    console.log(randomNum," is zero")
}

// №22

let points = 75;
if (points >= 90){
    console.log("Great")
}else if(points >= 70){
    console.log("Good")
}else if(points >= 50){
    console.log("Okay")
}else if(points >= 30){
    console.log("Bad")
}else if(points < 30){
    console.log("Awful")
}

// №23

let randomNum23 = 14;
if (randomNum23 % 3 == 0){
    console.log(randomNum23,"is a multiple of 3")
}else{
    console.log(randomNum23,"isn't a multiple of 3")
}

// №24

let randomNum24 = 23;
if (randomNum24 % 2 == 0) {
    console.log(randomNum24, "is even");
} else {
    console.log(randomNum24, "is odd");
}

// №25

let firstRandomNum = 53;
let secondRandomNum = 10;
if (firstRandomNum > secondRandomNum) {
    console.log(firstRandomNum, "is bigger than", secondRandomNum)
} else if (firstRandomNum < secondRandomNum) {
    console.log(firstRandomNum, "is less than", secondRandomNum)
} else {
    console.log(firstRandomNum, "=", secondRandomNum)
}

// №26

let randomYear = 1900;
if (randomYear % 4 == 0 && randomYear % 100 != 0 || randomYear % 400 == 0){
    console.log(randomYear,"is leap year")
}else{
    console.log(randomYear,"isn't leap year")
}

// №27

let degrees = 12;

if (degrees < 10){
    console.log("You should wear a jacket")
}else if(degrees < 1){
    console.log("You should wear a gloves")
}else{
    console.log("You should wear whatever you want")
}

// №28

let randomNum28 = 55;
if (randomNum28 % 5 == 0 && randomNum28 % 11 == 0){
    console.log(randomNum28, "is a multiple of 5 and 11 at the same time")
}else{
    console.log(randomNum28, "isn't a multiple of 5 and 11 at the same time")
}

// №29

let firstRandomNum29 = 23;
let secondRandomNum29 = 20;
if (firstRandomNum29 == secondRandomNum29) {
    console.log(firstRandomNum29, "=", secondRandomNum29)
} else {
    console.log(firstRandomNum29, "!=", secondRandomNum29)
}

// №30 

let randomSymbol = "y"
if (/[A-Za-z-А-Яа-я]/.test(randomSymbol)){
    console.log(randomSymbol, "is a letter")
}else{
    console.log(randomSymbol, "isn't a letter")
}