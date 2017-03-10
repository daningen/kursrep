#!/usr/bin/env node

/**
 * @preserve eaa6ae66d3b09e535485d00506a2fac4
 *
 * eaa6ae66d3b09e535485d00506a2fac4
 * linux
 * node1
 * daer16
 * 2017-02-21 20:45:25
 * v2.2.30 (2017-02-14)
 *
 * Generated 2017-02-21 21:45:25 by dbwebb lab-utility v2.2.30 (2017-02-14).
 * https://github.com/mosbth/lab
 */"use strict";


//import dbwebb from "./.dbwebb.js";
const dbwebb = require("./.dbwebb.js");

var ANSWER = null;
console.log(dbwebb.prompt + "Ready to begin.");



/** ======================================================================
 * node1 - JavaScript med Nodejs
 *
 * JavaScript using nodejs.
 *
 */



/** ----------------------------------------------------------------------
 * Section 1 . nodejs built-ins
 *
 * In this section we try out some of the new nodejs and ES6 features.
 *
 */



/**
 * Exercise 1.1
 *
 * Create a variable called `numbersArray` holding the numbers 4,51,33,11,94.
 *
 * Use find to get the first occurence of a number bigger than or equal to 42.
 *
 * Answer with the number.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var numbersArray = [4, 51, 33, 11, 94];

function checkAdult(age) {
    return age >= 42;
}

ANSWER = numbersArray.find(checkAdult);



// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.1", ANSWER, true);

/**
 * Exercise 1.2
 *
 * Find the smallest number in `numbersArray` by using the spread operator
 * `...` and the function `Math.min()`.
 *
 * Answer with the smallest number.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var numbersArray = [4, 51, 33, 11, 94];


ANSWER = Math.min.apply(null, numbersArray);

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.2", ANSWER, false);

/**
 * Exercise 1.3
 *
 * Create a function called `meaningOfLife()` with one default parameter with
 * the value of 42.
 *
 * The function should return the sentence 'The meaning of life is '
 * concatenated with the parameter.
 *
 * Answer with a call to the `meaningOfLife()` function without any
 * parameters.
 *
 * Write your code below and put the answer into the variable ANSWER. */

function meaningOfLife(age = 42) {
    var mySentence = "The meaning of life is " + age;
    return mySentence;
}


ANSWER = meaningOfLife();

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.3", ANSWER, false);

/**
 * Exercise 1.4
 *
 * Check if the word Wildebeast contains the letters 'oo'. Return true or
 * false depending on the answer.
 *
 * Tip: Use nodejs function `includes`.
 *
 * Write your code below and put the answer into the variable ANSWER.*/

var str = "Wildebeast";
var n = str.includes("oo");




ANSWER = n;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.4", ANSWER, false);

/**
 * Exercise 1.5
 *
 * Check if the word Wildebeast starts with the letters 'El'. Return true or
 * false depending on the answer.
 *
 * Tip: Use nodejs function `startsWith`.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var str = "Wildebeast";





ANSWER = str.startsWith("El");

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("1.5", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 2 . Filtering arrays
 *
 * In this section we filter arrays in different ways.
 *
 */



/**
 * Exercise 2.1
 *
 * Use `numbersArray` from above holding the numbers 4,51,33,11,94.
 *
 * Use a for-loop to save all numbers smaller than 42 in a new array.
 *
 * Answer with the resulting array.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var numbersArray = [4, 51, 33, 11, 94];


/* Denna snutt fungerar men det ska ju vara en for loop
var arr = numbersArray.filter(function(item) {
      return item < 42;
    });
*/
var res = [];
for (var i in numbersArray) {
    if (numbersArray[i] < 42) {
        res.push(numbersArray[i]);
    }
    //var x = res.substring(0,res.length-1)
}

ANSWER = res;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.1", ANSWER, true);

/**
 * Exercise 2.2
 *
 * Create a variable called `moreNumbersArray` holding the numbers
 * 4,51,33,11,94,70,33.
 *
 * Use the built-in higher-order function `filter` and a callback function to
 * filter out all numbers bigger than or equal to 42.
 *
 * Use arrow-notation to keep the code short and concise.
 *
 * Answer with the resulting array.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var moreNumbersArray = [4, 51, 33, 11, 94, 70, 33];
var filteredNumbers = moreNumbersArray.filter(function(value) {
        return value < 42;
    });



ANSWER = filteredNumbers;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("2.2", ANSWER, false);

/** ----------------------------------------------------------------------
 * Section 3 . Transforming arrays
 *
 * In this section we change arrays using the higher-order functions map and
 * reduce.
 *
 */



/**
 * Exercise 3.1
 *
 * Create a variable called `stringArray` holding the strings 'Jim
 * Lovell','Jack Swigert','Fred Haise'.
 *
 * Use a for-loop to concatenate the string ' was on the apollo 13' too each
 * name in the array.
 *
 * Store the result in a new array and answer with that array.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var stringArray = ['Jim Lovell', 'Jack Swigert', 'Fred Haise'];
var res2 = [];
var x;
for (i = 0; i < stringArray.length; i++) {


    console.log("i is: " + i + " contains: " + stringArray[i]);
    x = stringArray[i].concat(" was on the apollo 13");
    console.log("my concat string is: " + x);
    res2.push(x);

}




ANSWER = res2;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.1", ANSWER, true);

/**
 * Exercise 3.2
 *
 * Use the `stringArray` from above and the built-in higher-order function
 * `map` to concatenate the string ' was not on the apollo 12' and each name.
 *
 * Use arrow notation to keep the code simple and concise.
 *
 * Answer with the resulting array.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var oneString = " was not on the apollo 12";
var stringArray = ['Jim Lovell', 'Jack Swigert', 'Fred Haise'];

var theNames = stringArray.map(function(theName) {
    return theName + oneString;

}
);


ANSWER = theNames;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.2", ANSWER, false);

/**
 * Exercise 3.3
 *
 * Create a variable called `maybePrimeNumber` holding the numbers
 * 113,128,131,136,139,148,151,156,163.
 *
 * In a for-loop sum all prime numbers from `maybePrimeNumber`, you need to
 * find out whether or not the number is a prime number.
 *
 * Answer with the resulting sum.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

var maybePrimeNumber = [113, 128, 131, 136, 139, 148, 151, 156, 163];
var sum = 0;

for (var i = 0; i < maybePrimeNumber.length; i++) {
    if (maybePrimeNumber[i] % 2 !==0) {
        sum += maybePrimeNumber[i];
        console.log("theSum is " + sum);
    }
}


ANSWER = sum;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.3", ANSWER, true);

/**
 * Exercise 3.4
 *
 * Create a function `isNotPrime()` that takes one parameter (an integer) and
 * tests if that number is a prime number. If the number is not prime, the
 * number is returned otherwise return 0.
 *
 * Use the built-in higher-order functions `reduce` to sum all numbers that
 * are NOT prime numbers.
 *
 * Answer with the resulting sum.
 *
 * Write your code below and put the answer into the variable ANSWER.
 */

function isNotPrime(x) {
    if (x % 2 === 0) {
        return x; //not prime
    } else {
        return 0;
    }
}

var primeTest = maybePrimeNumber.reduce(function (acc, val) {
    return isNotPrime(val) + acc;
}, 0);

/*for (var i; i < numberToCheck; i++) {
   if (numberToCheck % 2 === 0) {
     return false; //not prime
   }
 }
 return true;*/




ANSWER = primeTest;

// I will now test your answer - change false to true to get a hint.
dbwebb.assert("3.4", ANSWER, true);


process.exit(dbwebb.exitWithSummary());
