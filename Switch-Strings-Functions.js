console.log("\n----------------SWITCH STATEMENTS--------------------");

// Suppose the use can select the language of our webiste
// As if we received the value from the option of the select in the page (dropdown)

let selectedLanguage;

let arrOfLanguages = ["EN", "IT", "FR", "PL", "ES"];

let randIndex = Math.floor(Math.random() * arrOfLanguages.length);
selectedLanguage = arrOfLanguages[randIndex];
console.log(randIndex);
console.log(selectedLanguage);
// Greet the person in his/her own language

// if (selectedLanguage === "EN") {
//   console.log("Good morning, welcome to our website!");
// } else if (selectedLanguage === "IT") {
//   console.log("Buongiorno, benvenuti sul nostro sito!");
// } else if (selectedLanguage === "ES") {
//   console.log("Buenos dias, bienvenido al sitio web");
// } else if (selectedLanguage === "FR") {
//   console.log("Bonjour! Bon matin");
// } else if (selectedLanguage === "PL") {
//   console.log("Dzien dobry, witaj na naszej stronie");
// } else {
//   // this will happen in case of having a not supported language being selected
//   console.log("Language not supported");
// }

switch (selectedLanguage) {
  case "EN":
    console.log("Good morning, welcome to our website!");
    break;
  case "IT":
    console.log("Buongiorno, benvenuti sul nostro sito!");
    break;
  case "ES":
    console.log("Buenos dias, bienvenido al sitio web");
    break;
  case "FR":
    console.log("Bonjour! Bon matin");
    break;
  case "PL":
    console.log("Dzien dobry, witaj na naszej stronie");
    break;

  default:
    console.log("Language not supported");
}

let userName = "Aureliu";

let greeting;

switch (userName) {
  case "Akbar":
    greeting = "Good morning Akbar";
    break;
  case "Agata":
    greeting = "hey Agata!";
    break;
  case "Aureliu":
    greeting = "Hey Bro!";
    break;
  case "Nic":
    greeting = "Aye!";
    break;
  default:
    greeting = "I don't know you!";
    break;
}

console.log("LAST", greeting);

console.log("\n--------------------LOOPS-----------------------");

// MANUAL REPETITION
// 1. not flexible
// 2. extremely error-prone
// 3. extremely boring!

console.log("\n--------------------WHILE LOOP-----------------------");

let currentNumber = 1;
const amountOfIterationsToRun = 10;

while (currentNumber <= amountOfIterationsToRun) {
  console.log("Number from WHILE LOOP is: ", currentNumber);
  currentNumber++;
}

// Another method pretty much identical to the WHILE loop, except it will perform the code AT LEAST ONCE,
// and it checks the condition at the end of each iteration
// currentNumber = 1;

console.log("\n--------------------DO....WHILE LOOP-----------------------");

do {
  console.log("Number from Do...WHILE:", currentNumber);
  currentNumber++;
} while (currentNumber <= amountOfIterationsToRun);

console.log("\n--------------------FOR LOOP-----------------------");

for (
  let currentNumber = 1;
  currentNumber <= amountOfIterationsToRun;
  currentNumber++
) {
  console.log("Number from FOR LOOP: ", currentNumber);
}

for (let i = 0; i < arrOfLanguages.length; i++) {
  const lang = arrOfLanguages[i];
  console.log(lang);
}

console.log("\n--------------------FOR...OF LOOP-----------------------");

// this is EXACTLY identical to the alternative above
// it's just HIDING some of the complexity, such as:
// - declaring an "index" variable to keep track of the iteration count
// - checking the condition
// - increasing the "index" variable after every iteration

for (let lang of arrOfLanguages) {
  console.log(lang);
}

// ######### WARNING #############
// We used for...of, NOT for...in

// for...in is a legacy method to be used with objects (not arrays!), try to avoid it, it's quite buggy and counter-intuitive

const person = {
  name: "Stefano",
  surname: "Miceli",
  skills: ["HTML", "CSS", "JS"],
};

// Iterating over enumerable properties of an object:

for (let key in person) {
  console.log(key);
}

console.log(
  "\n------------------------------------- Object KEYS --------------------------------"
);
const objectKeys = Object.keys(person); // ["name", "surname", "skills"]

// for (let i = 0; i < objectKeys.length; i++) {
//   let key = objectKeys[i];
//   console.log(person[key]);
// }

for (let key of objectKeys) {
  console.log(person[key]); // person["name"], person["surname"], person["skills"]
}

const objectEntries = Object.entries(person);
console.log(objectEntries);

const person2 = {};
console.log("PERSON2(before):", person2);

for (let arr of objectEntries) {
  //   console.log("first entry", arr[0]);
  //   console.log("second entry", arr[1]);
  person2[arr[0]] = arr[1];
}

const person3 = person;
console.log("PERSON2(after):", person2);
console.log(person === person2);
console.log(person === person3);

console.log(
  "\n--------------------ACESSING STRING CONTENT---------------------"
);

const helloEpicodersString = "Hello Epicoders!";

let expandedString = "";

for (let i = 0; i < helloEpicodersString.length; i++) {
  const currentCharacter = helloEpicodersString[i];
  //   expandedString = expandedString + currentCharacter
  if (currentCharacter === "d") {
    break;
  }
  if (currentCharacter === "l") {
    continue;
  }
  expandedString += currentCharacter;
  expandedString += " ";
  console.log(currentCharacter);
  //   console.log(" ");
}

console.log(expandedString);

// H e l l o  E p i c o d e r s !

const str = "The quick brown fox jumps over the lazy dog.";
const splitStrArr = str.split(" ");
console.log(splitStrArr);

let sentence = "";

for (let i = 0; i < splitStrArr.length; i++) {
  let capitalizedWord = "";
  const word = splitStrArr[i];

  capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1) + " ";
  sentence += capitalizedWord;
  console.log(capitalizedWord);
}

console.log(sentence);

console.log("\n-----------------------FUNCTIONS------------------------");
console.log(
  "\n-----------------------VOID FUNCTIONS (no return value) ------------------------"
);

function sayHi(s) {
  if (s !== undefined) {
    console.log("Hello " + s);
  } else {
    console.log("no name provided");
  }
}

sayHi("Epicoders!!!");
sayHi("Alexandra");
sayHi("Andy");
sayHi();

const returnValue = sayHi("Stefano"); // this function doesn't return anything (undefined)

console.log(returnValue);

let total = 0;

function sideEffect(iterationCount) {
  for (let i = 0; i < iterationCount; i++) {
    total++;
  }
}
sideEffect(10);
sideEffect(10);
sideEffect(50);
console.log("TOTAL:", total);

// console.log(
//   "\n-----------------------FRUITFUL FUNCTIONS (return a value) ------------------------"
// );

function greetings(name, symbol) {
  const newStr = "Hey there, " + name + symbol;
  return newStr;
}

const greeted = greetings("Asdren", "!");
console.log(greeted);

console.log(greetings("Aygen", "<<<<<"));
console.log(greetings("Aygen", "<<<<<"));
console.log(greetings("Aygen", "<<<<<"));
console.log(greetings("Aygen", "<<<<<"));
