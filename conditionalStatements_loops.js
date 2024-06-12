//ex 1


let temparature = 10;

if (temparature < 0) {
    console.log("it's freezing!");
} else if (temparature >= 0 && temparature <= 15){
    console.log("it's cold.");
}else if (temparature >=15 && temparature <= 25){
    console.log("it's mild.");
}else {
    console.log("it's warm.");
}

//switch 

switch (true){
case temparature < 0:
    console.log("it's freezing!");
    break;
case temparature >= 0 && temparature <= 15:
    console.log("it's cold.");
    break;
case temparature >=15 && temparature <= 25:
    console.log("it's mild.");
    break;
default:
    console.log("it's warm.");

}




// Exercise 2

//division
let number = 18;
If (number % 2 === 0 && number % 3 === 0) {
console.log("Divisible by both".);

} else if (number % 2 === 0) {
console.log("Divisible by 2.");

} else if (number % 3 === 0) {
console.log("Divisible by 3.");
}
    else {
        console.log("Not divisible by 2 or 3.");

    }

// switch
{
switch (true){
case number % 2 === 0 && number % 3 === 0:
console.log("Divisible by both.");
break;

case number % 2 === 0:
console.log("Divisible by 2.");
break;

case number % 3 === 0:
console.log("Divisible by 3.");
 break;
    default:
        console.log("Not divisible by 2 or 3.");
}
    }




    //ex 3



function printNumbers () {

 for (let i = 1; i <= 10; i++) {
console.log(i);
}
}
printNumbers();


function printEvenNumbers(){
for (let i = 1; i <= 20; i++){
if (i % 2 === 0){
console.log(i);
}
}
}


let sum = 0;
for (let i = 1; i <= 100; i++) {
sum += i;
}
console.log("Sum of numbers from 1 to 100:", sum);
const numbers1 = [1, 2, 3, 4, 5];
for (const num of numbers) {
console.log(num);
}
const numbers2 = [3, 7, 2, 5, 10, 6];
let largest = numbers[0]; // Initialize with the first element
for (const num of numbers2) {
If (num > largest) {
largest = num;
}
}
console.log("Largest number:", largest);




//ex 4 


// print 1 - 10 
let num = 1;
while (num <= 10) {
    console.log(num);
    num++;
}
 

// print even num
let evenNum = 2;
while (evenNum <= 20 ){
console.log(evenNum);
    evenNum +=2;
}

//calculate sum 
let total = 0;
let num2 = 1;
while (num2 <= 100) {
    total += num2;
    num2++;
}
console.log("Sum of numbers from 1 to 100:", total);


//print multiples of 5 < 50
let num3 = 5;
while (num3 < 50) {
    console.log(num3);
    num3 += 5;
}



//Ex 5

//print 1 - 10

let num4 = 1;
do {
    console.log(num4);
    num4++;
} while (num4 <= 10);


//calculate sum

let total1 = 0;
let num1 = 1;
do {
    total1 += num1;
    num1++;
} while (num1 <= 100);
console.log("Sum of numbers from 1 to 100:", total1);


//prompt user
let userInput;
do {
    userInput = parseFloat(prompt("Enter a number greater than 10:"));
} while (isNaN(userInput) || userInput <= 10);
console.log("Valid input:", userInput);




//guess game 
const targetNumber = Math.floor(Math.random() * 10) + 1;
let userGuess;
function getUserGuess() {
    userGuess = parseInt(prompt("Guess a number between 1 and 10:"));
    if (userGuess === targetNumber) {
        alert("Congratulations! You guessed the correct number:");
    } else {
        alert('Try again! The correct number is ${targetNumber}.');
    getUserGuess();
}}
getUserGuess();























