//Task 01:
//Q. Declare an empty array using JS literal notation to store student names in future.

let studentNames = [];

//Task 02:
//Q. Declare an empty array using JS Object notation to store student names in future.

let studentNamesObj = {};

//Task 03
//Declare and initialize a strings array.

let stringsArr = ["Architect", "Doctor", "Engineer", "Pilot", "Accountant", "Book Editor"];

//Task 04
//Declare and initialize a numbers array.

let numbersArr = [2, 5, 24, 62, 85, 12, 954];

//Task 05
//Declare and initialize a boolean array.

let booleanArr = [true, false];

//Task 06
//Declare and initialize a mixed array.

let mixedArr = ["Suleman", 2, true];

//Task 07
/*Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:*/

let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];

document.write("<h1>" + "Qualifications:" + "</h1>");

for (var i = 0; i < qualifications.length; i++) {
    document.write(qualifications[i]+ "<br>")
}

//Task 08
/*Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:*/

let studentNamesArr = ["Saadiah", "Fiza", "Sarah"];
let studentScores = [395, 382, 416];
let percentage = [];

for (var x = 0; x < studentScores.length; x++) {
    percentage = (studentScores[x] * 100) /500;
    document.write("<p>" + "Score of " + studentNamesArr[x] + " is " + studentScores[x] + ". " + "Percentage: " + percentage + "%" + "</p>");
}

//Task 09
/*Initialize an array with color names. Display the array elements in your browser.
a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.
b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.
c. Add two more color to the beginning of the array. Display the updated array in your browser.
d. Delete the first color in the array. Display the updated array in your browser.
e. Delete the last color in the array. Display the updated array in your browser.
f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. Display the updated array in your browser.
g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. Display the updated array in your browser.*/

let colors = ["blue", "green", "purple"];
document.write(colors);

// //a. 
let userInp01 = prompt("What color do you want in the beginning?");
var change01 = colors.unshift(userInp01);
document.write("<br>" + colors);

// //b. 
let userInp02 = prompt("What color do you want in the end?");
var change02 = colors.push(userInp02);
document.write("<br>" + colors);

// //c.
var change03 = colors.splice(0, 0, "sky green", "khaki");
document.write("<br>" + colors);

// //d. 
var change04 = colors.shift();
document.write("<br>" + colors);

// //e.
var change04 = colors.pop();
document.write("<br>" + colors);

// //f.
let userInp03 = prompt("What color do you want?");
let userIndex01 = prompt("And at which index?")

let change05 = colors.splice(userIndex01, 0, userInp03);
document.write("<br>" + colors);

// //g.
let userInp04 = prompt("How many colors do you want to delete?");
let userIndex02 = prompt("And from which index?")

let change06 = colors.splice(userIndex02, userInp04);
document.write("<br>" + colors);

//Task 10:
/*Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.*/

let studentScoresAgain = [450, 198, 350, 462, 316];
document.write("Scores of Students: " + studentScoresAgain);
studentScoresAgain.sort();
document.write("<br>" + "Ordered scores of students: " + studentScoresAgain);

//Task 11:
/* Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.*/

let cities = ["Karachi", "Islamabad", "Lahore", "Multan", "Sukkur", "Attock", "Quetta"];
let selectedCities = cities.slice(2, 5);

document.write("<h2>" + "Cities List: " + "</h2>" + cities + "<h2>" + "Selected Cities List: " + "</h2>" + selectedCities);

//Task 12:
/* Write a program to create a single string from the below mentioned array:
var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)*/

let arr = ["My", "name", "is", "Amiqa"];
let joinArr = arr.join(" ");
document.write(joinArr);

//Task 13:
/* Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)*/

let values = [];

values.push("Clothes");
values.push("Jewellery");
values.push("Shoes");

alert(values.shift()); 
alert(values.shift()); 
alert(values); 

//Task 14:
/*Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In- First Out)*/

let values2 = [];

values2.push("Clothes");
values2.push("Jewellery");
values2.push("Shoes");

alert(values2.pop());
alert(values2.pop());
alert(values2);

//Task 15:
/* Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method:*/

let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

let html = "<select id='manufacturer'>";

for (let i = 0; i < phoneManufacturers.length; i++) {
  html += `<option value='${phoneManufacturers[i]}'>${phoneManufacturers[i]}</option>`;
}

html += "</select>";

document.write(html);