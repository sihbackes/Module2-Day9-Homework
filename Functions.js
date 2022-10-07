/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/
console.log(
  "\n------------------------------------- EXERCISE 1 --------------------------------"
);

function area(l1, l2) {
  return l1 * l2;
}
console.log(area(5, 10));

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/
console.log(
  "\n------------------------------------- EXERCISE 2 --------------------------------"
);

function crazySum(a, b) {
  if (a === b) {
    let sum = a + b;
    return sum * 3;
  } else {
    return a + b;
  }
}

console.log(crazySum(5, 5));
console.log(crazySum(5, 10));

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/
console.log(
  "\n------------------------------------- EXERCISE 3 --------------------------------"
);

function crazyDiff(a) {
  if (a > 19) {
    let subtraction = a - 19;
    return subtraction * 3;
  } else {
    return 19 - a;
  }
}
console.log(crazyDiff(10));
console.log(crazyDiff(30));

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

console.log(
  "\n------------------------------------- EXERCISE 4 --------------------------------"
);

function boundary(n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
}

console.log(boundary(10));
console.log(boundary(20));
console.log(boundary(85));
console.log(boundary(150));
console.log(boundary(400));

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

console.log(
  "\n------------------------------------- EXERCISE 5 --------------------------------"
);

function strivify(string) {
  if (string === "Strive") {
    return string;
  } else if (string !== "Strive") {
    return "Strive" + " " + string;
  }
}

console.log(strivify("Strive"));
console.log(strivify("Simone"));
/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/
console.log(
  "\n------------------------------------- EXERCISE 6 --------------------------------"
);

function check3and7(number) {
  if (number % 3 === 0 && number % 7 === 0) {
    return `The number ${number} is a multiple of 3 and 7.`;
  } else if (number % 3 === 0) {
    return `The number ${number} is a multiple of 3.`;
  } else if (number % 7 === 0) {
    return `The number ${number} is a multiple of 7.`;
  } else if (number % 3 !== 0 && number % 7 !== 0) {
    return `The number ${number} is not a multiple of 3 or 7.`;
  }
}
console.log(check3and7(50));

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/
console.log(
  "\n------------------------------------- EXERCISE 7 --------------------------------"
);

function reverseString(string) {
  return string.split("").reverse().join("");
}

console.log(reverseString("simone"));

////////////////////// second solution ////////////////////////////////

function Reverse(string) {
  let array = string.split("");
  let result = "";
  for (let index = array.length - 1; index >= 0; index--) {
    result = result + array[index];
  }
  return result;
}

console.log(Reverse("alexandre"));

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/
console.log(
  "\n------------------------------------- EXERCISE 8 --------------------------------"
);

function upperFirst(string) {
  let result = string;
  return result[0].toUpperCase() + result.substring(1);
}
console.log(upperFirst("simone"));

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/
console.log(
  "\n------------------------------------- EXERCISE 9 --------------------------------"
);

function cutString(string) {
  let result = string;
  return result.substring(1, result.length - 1);
}

console.log(cutString("epicode"));

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/
console.log(
  "\n------------------------------------- EXERCISE 10 --------------------------------"
);

function giveMeRandom(n) {
  let array = [];
  for (let index = 0; index < n; index++) {
    array.push(Math.floor(Math.random() * 11));
  }
  return array;
}
console.log(giveMeRandom(4));
/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
