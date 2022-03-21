//             ~~~~~~~~CHAPTER 1: 3,2,1 Code~~~~~~~~~~
//Write a program that displays your name and age. Here’s the result for mine.

const myName = "Klack";
let myAge = 29;
console.log(myName, myAge);

//Write a program that displays the results of adding, subtracting, multiplying and dividing 6 by 3.

let calcAdd = 6+3;
let calcSub = 6-3;
let calcMult = 6*3;
let calcDiv = 6/3;
console.log(calcAdd,calcSub,calcMult,calcDiv);

//Observe the following program and try to predict the values it displays.
/* console.log(4 + 5);
* console.log("4 + 5");
* console.log("4" + "5");
* Check your prediction by executing it.*/

//answer: 9  4 + 5  45  


//             ~~~~~~~~Chapter 2: Play with variables~~~~~~~~~

//Write a program that asks the user for his first name and his last name. The program then displays them in one sentence.

let userFirstName = prompt("Enter your first name:");
let userLastName = prompt("Enter your last name:");
console.log(`Hello ${userFirstName} ${userLastName}`);

//Observe the following program and try to predict the final values of its variables.
/*let a = 2;
a -= 1;
a++;
let b = 8;
b += 2;
const c = a + b * b;
const d = a * b + b;
const e = a * (b + b);
const f = a * b / a;
const g = b / a * a;
console.log(a, b, c, d, e, f, g);*/

//answer: 2 10 102 30 40 10 10

//Write a program that asks the user for a raw price. After that, it calculates the corresponding final price using a VAT rate of 20.6%.
let userPrice = prompt("Enter a price:");
let finalPrice = Number(userPrice)*1.206;
console.log(`The final price with VAT is ${finalPrice}`)

//Write a program that asks for a temperature in Celsius degrees, then displays it in Fahrenheit degrees.
let userTempC = prompt("Enter a temperature in Celcius:");
let tempF = (Number(userTempC)*9/5) + 32;
console.log(`The temperature is ${tempF}F`);

//Observe the following program.
let number1 = 5;
let number2 = 3;
// TODO: type your code here (and nowhere else!)

let temp = number1;
number1 = number2;
number2 = temp;
//End my code
console.log(number1); // Should show 3
console.log(number2); // Should show 5

//             ~~~~~~~~Chapter 3: Add Conditions~~~~~~~~~

//Write a program that accepts a day name from the user, then shows the name of the following day. Incorrect inputs must be taken into account.

//Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases.

//Take a look at the following program.
let nb1 = Number(prompt("Enter nb1:"));
let nb2 = Number(prompt("Enter nb2:"));
let nb3 = Number(prompt("Enter nb3:"));
if (nb1 > nb2) {
nb1 = nb3 * 2;
} else {
nb1++;
if (nb2 > nb3) {
nb1 += nb3 * 3;
} else {
nb1 = 0;
nb3 = nb3 * 2 + nb2;
}
}
console.log(nb1, nb2, nb3);
/*Before executing it, try to guess the final values of variables nb1, nb2 and nb3 depending on their
initial values. Complete the following table:

Initial values -    nb1 final value - nb2 final value - nb3 final value
nb1=nb2=nb3=4       0                   4               12
nb1=4,nb2=3,nb3=2   4                   3               2
nb1=2,nb2=4,nb3=0   3                   4               4
Check your predictions by executing the program.*/

//Write a program that accepts a month number (between 1 and 12), then shows the number of days of that month. Leap years are excluded. Incorrect inputs must be taken into account.
let monthNum = Number(prompt("Enter number between 1 and 12 corresponding to month"));
if (monthNum > 12 || monthNum < 1) {
    console.log("Enter a valid number");
} else if (monthNum % 2 !==0 && monthNum < 8) {
    console.log(31);
} else if (monthNum === 2) {
    console.log(28);
} else if (monthNum % 2 === 0 && monthNum < 8) {
    console.log(30);
} else if (monthNum % 2 === 0 && monthNum > 7) {
    console.log(31);
} else if (monthNum % 2 !== 0 && monthNum > 7) {
    console.log(30);
} else {
    console.log("Are you sure that's a number?")
}

/*Write a program that asks for a time under the form of three information (hours, minutes,
seconds). The program calculates and shows the time one second after. Incorrect inputs must
be taken into account.*/
let userHours = Number(prompt("Enter hour"));
let userMin = Number(prompt("Enter minute"));
let userSec = Number(prompt("Enter sec"));
let finalHour = 0;
let finalMin = 0;
let finalSec = 0;
if (userHours === 23 && userMin === 59 && userMin === 59) {
    console.log(`${finalHour}h${finalMin}m${finalSec} (midnight)`);
} else if (userMin === 59 && userSec === 59) {
    finalHour = userHours + 1;
    console.log(`${finalHour}h${finalMin}m${finalSec}s`); 
} else if (userSec === 59) {
    finalHour = userHours;
    finalMin = userMin+1;
    console.log(`${finalHour}h${finalMin}m${finalSec}s`); 
} else {
    finalHour = userHours;
    finalMin = userMin;
    finalSec = userSec+1;
    console.log(`${finalHour}h${finalMin}m${finalSec}s`); 
}

//             ~~~~~~~~Chapter 4: Repeat Statements~~~~~~~~~

//Write a program that launches a carousel for 10 turns, showing the turn number each time.
//When it’s done, improve it so that the number of turns is given by the user.

let turns = Number(prompt("How many times do you want to go around the carousel?"))
for (let i = 1; i < turns + 1; i++) {
    console.log(i);
}

//Check the following program that shows even numbers (divisible by 2) between 1 and 10.
for (let i = 1; i <= 10; i++) {
if (i % 2 === 0) {
console.log(`${i} is even`);
}
}
/*Improve the program so that it also shows odd numbers. Improve it again to replace the initial
number 1 by a number given by the user.
This program must show exactly 10 numbers including the first one, not 11 numbers!*/
let firstNum = Number(prompt("enter a number under 10"))
for (let i = firstNum; i <= 10; i++) {
    if (i % 2 === 0) {
    console.log(`${i} is even`);
    } else {
        console.log(`${i} is false`);
    }
    }

/*Write a program that continues to ask the user for a number until the entered number is less
than or equal to 100.
When you are done with the above, improve the program so that the terminating number is
between 50 and 100.*/



function isNumInRange(number) {
    while (number > 100 && number < 50) {
        number = prompt("Enter a better number");
    }
    return number;
}
isNumInRange(prompt("Enter a number!"));

/*Write a program that asks the user for a number, then shows the multiplication table for this
number.
When you are done, improve the program so it only accepts numbers between 2 and 9 (use the
previous exercise as a blueprint).*/

function multTable(num) {
    while (num < 2 || num > 9) {
        num = prompt("Enter a better number (2-9)");
    }
    for (let i = 0; i <= 10; i++) {
        console.log(`${num}*${i} = ${(num*i)}`);
    }
}
multTable(prompt("Enter a number!"));

/*Write a program that plays “neither yes, nor no” with the user. Specifically, the programs asks
the user to enter text until either “yes” or “no” is typed, which ends the game.*/

// if (userInput === yes || userInput === no)  --> if either is true, return true
// if (userInput !== yes || userInput !== no) --> if either is true, return true... if either yes or no, this will keep returning true forever


function yesOrNo(userInput) {
    while (userInput !== "yes" && userInput !== "no") {
        userInput = prompt("Answer the question!");     
    }
    console.log("The game ended");
}
yesOrNo(prompt("Answer the question:"));

/*Write a program that shows all numbers between 1 and 100 with the following exceptions:
• It shows "Fizz" instead if the number is divisible by 3.
• It shows "Buzz" instead if the number is divisible by 5 and not by 3.*/

let f = "Fizz";
let b = "Buzz";
let fizzBuzz = function(fNum,bNum,start,end) {
    for (i=start;i <=end; i++) {
        if (i % fNum !== 0 && i % bNum === 0) {
            console.log(b);
        } else if (i % fNum === 0) {
            console.log(f);
        } else {
            console.log(i);
        }
    }
}
fizzBuzz(3,5,1,100);

/*When it’s done, improve it so that the program shows "FizzBuzz" instead for numbers divisible
both by 3 and by 5.*/


let f = "Fizz";
let b = "Buzz";
let fizzBuzz = function(fNum,bNum,start,end) {
    for (i=start;i <=end; i++) {
        if (i % fNum === 0 && i % bNum === 0) {
            console.log(f+b);
        } else if (i % fNum === 0) {
            console.log(f);
        } else if (i % bNum === 0) {
            console.log(b);
        } else {
            console.log(i);
        }
    }
}
fizzBuzz(3,5,1,100);

//             ~~~~~~~~Chapter 5: Write Functions~~~~~~~~~

//Complete the following program so that it asks the user for his first and last names, then show result of the sayHello() function.
// Say hello to the user
function sayHello(firstName, lastName) {
    const message = `Hello, ${firstName} ${lastName}!`;
    return message;
    }
let first = prompt("Enter your first name");
let last = prompt("Enter your last name");
sayHello(first,last);

//Complete the following program so that the square1() and square2() functions work properly.
// Square the given number 

function square1(x) {
    return x*x;
    }
// Square the given number x
const square2 = x => x*x;
console.log(square1(0)); // Must show 0
console.log(square1(2)); // Must show 4
console.log(square1(5)); // Must show 25
console.log(square2(0)); // Must show 0
console.log(square2(2)); // Must show 4
console.log(square2(5)); // Must show 25

//When it’s done, update the program so that it shows the square of every number between 0 and 10. 
const square2 = x => x*x;
for (let i = 0; i < 11;i++) {
    console.log(square2(i));
}
//Let’s pretend the JavaScript Math.min() function doesn’t exist. Complete the following program
//so that the min() function returns the minimum of its two received numbers.

// TODO: write the min() function
function min(n1,n2) {
    return n1 > n2 ? n2 : n1;
}
console.log(min(4.5, 5)); // Must show 4.5
console.log(min(19, 9)); // Must show 9
console.log(min(1, 1)); // Must show 1

//Complete the following program so that it offers the four basic arithmetical operations: addition,
//subtraction, multiplication and division. You can use either a function declaration or a function expression.

// TODO: complete program
function calculate(n1,operator,n2) {
    if (operator === "+") return n1+n2;
    else if (operator === "-") return n1-n2;
    else if (operator === "/") {
        if (n2 !== 0) return n1/n2;
        else return "Infinity";
    } else if (operator === "*") return n1*n2;
    else return "invalid operator";
}
console.log(calculate(4, "+", 6)); // Must show 10
console.log(calculate(4, "-", 6)); // Must show -2
console.log(calculate(2, "*", 0)); // Must show 0
console.log(calculate(12, "/", 0)); // Must show Infinity

/*Write a program containing two functions to calculate the circumference and area of a circle
defined by its radius. Test it using user input.
Here are some tips for solving this exercise:
• Circumference and area calculation formulas should be part of your secondary school
memories… Or a Google click away :)
• The value of number π (Pi) is obtained with Math.PI in JavaScript.
• You might want to use the exponentiation operator² ** to perform computations.*/

function circle(r) {
    let circ = (Math.PI*r*2);
    let area = (Math.PI*(r ** 2))
    return `The circumference is ${circ} and the area is ${area}`;
}
console.log(circle(3))

