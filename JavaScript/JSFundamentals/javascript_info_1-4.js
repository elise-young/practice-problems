//https://javascript.info/variables

let admin, name;
name = "John";
admin = name;
alert(admin);


let ourPlanet = "Earth";
let currVisitor = "Jane";

//const/uppercase is ok for age, but not birthday

//https://javascript.info/function-basics

//is "else" required? In the example given, no. The function will end on return.

//Rewrite the function to perform the same but without if and in a single line
function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
  } //ternary operator
function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
} //works because because age > 18 is a boolean

//Write a function min(a,b) which returns the least of two numbers a and b.

function min(a, b) {
    return a > b ? b : a;
}

//Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
function pow(x,n) {
    let answer = x;
    for (let i = 1; i < n; i++) {
        answer *= x;
    }

    return answer;
}

let x = prompt("enter number for x");
let n = prompt("enter number for n");

alert((n<1) ? "use a positive number bigger than 0" : pow(x,n));

//https://javascript.info/arrow-functions-basics


//Rewrite function to arrow function
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
  );

