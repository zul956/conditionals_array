// let nameOfPerson = "ebere"; //string
// let num = 20; //number

// nameOfPerson = "Osman";

// console.log("name of Person:", nameOfPerson);

// let arr = [20, 10, 3, 5]; //array of numbers
// let arrOfStrings = ["let", "it", "walk"]; //3 //arr of strings
// //  0      1      2
// alert(arrOfStrings[2]);
// console.log(arrOfStrings.length); //3 -1 //give me the length of the array
// console.log(arrOfStrings[arrOfStrings.length - 1]);

// let obj = {
//   name: "Ebere Iweala",
//   location: "seattle",
//   job: "frontend developer",
// };

// obj.name = "GA Malaysia";

// console.log(obj.name);
// console.log(obj["name"]); //important for todays class exec

// function fullName() {
//   console.log("fullname func");
// }

// fullName();

// function fullNameWithArgs(firstname, lastname = "Iweala") {
//   // console.log("fullname func");
//   return firstname + " " + lastname;
//   console.log("I will never run");
// }

// console.log(fullNameWithArgs("Ebere"));

// let temp = 0;

// if (temp != 100 && temp == 0) {
//   console.log("temp is now 0");
// }

// console.log(temp);

// let start = 0;
// let completed = 1;
//truthy = 1  is true, true is true, a value is true

//falsey = 0 is false, false is false, null, undefined, empty string "" is false
//! not
// not true

// if (start && completed) {
//   console.log("both are true!");
// } else if (!start && !completed) {
//   console.log("nothing started");
// } else if (start && !completed) {
//   console.log("not completed");
// } else {
//   console.log("some where not true");
// }

// let grade = "D";

// if (grade == "A") {
//   console.log("90 - 100");
// } else if (grade == "B") {
//   console.log("70 - 89");
// }

// switch (grade) {
//   case "A":
//     console.log("90 - 100");
//     break;
//   case "B":
//     console.log("70 - 89");
//     break;
//   case "C":
//     console.log("50 - 69");
//     break;
//   default:
//     console.log("not in grade list");
// }

// let sentence = "I am a boy";
// console.log(sentence.length);
// console.log(sentence.startsWith("I"));
// console.log(sentence.endsWith("a boy"));

// console.log(sentence.charAt(0) == "I");
// console.log(sentence.charAt(sentence.length - 1) == "y");

// console.log(sentence.charAt(sentence.length - 2));
/**
 * Prompt the user for a number, then console.log its ordinal version. For example, if the user inputs 1, the result should be "1st". If the user inputs 10, the result should be "10th". If the user inputs 421, the result should be "421st". Hint: There is a function that can return the character at a specified position in a string. Search Google / MDN for 'javascript string methods' if you need to.*/

// let userInput = prompt("enter number: ");
// if (userInput.endsWith("1")) {
//   alert(userInput + "st");
// } else if (userInput.charAt(userInput.length - 1) == "2") {
//   alert(userInput + "nd");
// } else if (userInput.charAt(userInput.length - 1) == "3") {
//   alert(userInput + "rd");
// } else {
//   alert(userInput + "th");
// }

/**
  * Serge Says
Store a user message

Print 'Sure.' if you ask a question (e.g. the message ends in ?).

Print 'Woah, chill out!' if you yell (e.g. your message is in all capitals).

Print 'Fine. Be that way!' if you don't say anything (e.g. your message is empty).

Print 'Whatever.' to anything else.

Bonus: If the message is all spaces, also print "Fine. Be that way!"
*/
// let userInput = "     ";
// let trimmed = userInput.trim(); //"   space   "
// if (!trimmed.length) {
//   console.log("Fine. Be that way!");
// }
// if(){
// }

/**
 * Write an if statement that works with a noun and a number. Make the noun plural if necessary!! Make this as accurate as possible (e.g. use the rules described here) http://blog.writeathome.com/index.php/2011/12/how-to-make-nouns-plural/
 * */

//jump
//x++ increment after
//++x increment before
// let x = 0;
// while (x < 10) {
//   console.log(x);
//   x++;
// }
let arrayOfNames = ["Izzue", "Osman", "Hamza", "Nur", "Ebere"];
// arrayOfNames[5] = "Happy";
arrayOfNames.push("Happy");
console.log("push", arrayOfNames);

arrayOfNames.pop();
console.log("pop", arrayOfNames);

arrayOfNames.shift();
console.log("shift", arrayOfNames);

arrayOfNames.unshift("Alakmah");
console.log("unshift", arrayOfNames);

arrayOfNames.splice(2, 2);
console.log("splice remove", arrayOfNames);

arrayOfNames.splice(2, 0, "Nasrul", "James");
console.log("splice add", arrayOfNames);

console.log(5 % 2);
for (let x = 1; x < 10; x++) {
  console.log(x);
}

// for (let x = arrayOfNames.length; x >= 0; x--) {
//   console.log(x + " is this in the array ", arrayOfNames[x]);
// }

// for of
// for in

// foreach
// maps
// filter
// find
// findindex
