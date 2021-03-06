// Looping a triangle

// Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######

for (let i=1; i <=7;i++) {
    console.log("#".repeat(i));
}


// FizzBuzz

// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
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
// When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
let fb = "FizzBuzz";
let fizzBuzz2 = function(fNum,bNum,start,end) {
    for (i=start;i <=end; i++) {
        console.log((i % fNum === 0|| i % bNum === 0) ? fb : i);
    }}
fizzBuzz2(3,5,1,100);

// Chessboard

// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

// Passing this string to console.log should show something like this:
let chess = "";
for (i = 1;i <= 8;i++) {
    for (n = i;n <= i+7;n++) {
        chess += ((n % 2 === 0) ? " ":"#");
    }
    chess += "\n";
}
console.log(chess)
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # #

// When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

function chessBoard(size) {
    let chess = "";
    for (i = 1;i <= size;i++) {
        for (n = i;n < i+size;n++) {
            chess += ((n % 2 === 0) ? " ":"#");
        }
        chess += "\n";
    }
    console.log(chess)
}
chessBoard(11);

// Minimum

// The previous chapter introduced the standard function Math.min that returns its smallest argument. We can build something like that now. Write a function min that takes two arguments and returns their minimum.
function minimum(n1,n2) {
    return n1 > n2 ? n2 : n1;
}

// Recursion

// We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

//     Zero is even.

//     One is odd.

//     For any other number N, its evenness is the same as N - 2.

// Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

// Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

// // Your code here.

function isEven(n) {
    if (n > 0) {
        if (n === 2) return true;
        else if (n === 1) return false;
        else return isEven(n-2);
    } else {
        if (n === 2) return true;
        else if (n === 1) return false;
        else return isEven(n+2);    
    }
}
console.log(isEven(6))

// Bean counting
/*You can get the Nth character, or letter, from a string by writing "string"[N]. 
*The returned value will be a string containing only one character (for example, "b"). The first character has position 0, 
*which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, 
*and its characters have positions 0 and 1.
*Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.*/

function countBs(myString) {
    let countB = 0;
    for (let i = 0; i < myString.length;i++) {
        countB += (myString[i] === "B") ? 1 : 0;
    }
    return countB;
}

// Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.
function countChar(myString, myChar) {
    let countChar = 0;
    for (let i = 0; i < myString.length;i++) {
        countChar += (myString[i] === myChar) ? 1 : 0;
    }
    return countChar;
}

console.log(countBs("BBC")); // → 2
console.log(countChar("kakkerlak", "k")); // → 4