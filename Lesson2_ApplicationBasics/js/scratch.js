'use strict'

/*

console.log("Hello from Bigfoot! - I am real.");

// prompt parameter values (message, default)
var bigfootName = prompt('What is your favorite name for Bigfoot?', 'Sasquatch');

document.write("That's classic juvenile " + bigfootName + ' behavior');

var num1 = Number(prompt("Please enter a positive number.", 10));  // Number changes the string to a number.  Called Type casting.

//
// Test if num1 is really a positive number
//

while (isNaN(num1) || num1 < 0) {
	num1 = Number(prompt("Please enter a positive number.", 10));
}


var num2;

do {
	num2 = Number(prompt("Please enter a positive number.", 10));
} while (isNaN(num2) || num2 < 0);


document.write('<br>');

if (num1 > num2) {
	document.write(num1 + ' is greater than ' + num2 + '<br><br>');
	
} else if (num1 < num2) {
	document.write(num1 + ' is less than ' + num2 + '<br><br>');
	
} else {
	document.write(num1 + ' is equal to ' + num2 + '<br><br>');
}


//
// for loop example
//
// for (initializer; text; increment) {}    ///  increment is really a modifier

for (var i = 0; i <= num2; i++) {  // condition tested once per iteration, if test is true, do code in curley braces, then increment.
	
	// display I if it is an even number.
	if (!(i % 2)) {    // will get replaced by the value... so would end up being zero, zero is false, and any other number is true. 
		document.write('<br> i contains ' + i);
	}
}

*/

//
// Arrays in Java - list or collection of data, list of elements each has 2 parts - indexs that is an integer and value, what we store.   [] to call index of an array.  integer arrays are called vector arrays.
//

// Create an empty array object

// var creatures = [];   // Shortcut way
var creatures = new Array();  // Official way to create an empty array in Javacript, Array is a class becuase of the upper case A. Classes are created in javascript using functions. Array is an constructor function to create an object of that type.

var critter = 'Kushtaka';


creatures = ['Bigfoot', 'Sasquatch', 'Yeti', 'Manbear Pig', 'Abominable Snowman', 'Skunk Ape'];


creatures[creatures.length] = 'Grassman';  // adds another name to the end of the array.

creatures.push('Rugaroo', critter, 'Cheese Monkey');  // easy way to add.  can use comma deliminated values to add multiple. 

document.write('<h2 style="color: yellow">There are ' + creatures.length + ' names for Bigfoot</h2>');

document.write('<ul>');

for (var i = 0; i < creatures.length; i++) {
	document.write('<li>' + creatures[i] + '</li>')
}

document.write('</ul>');


//
// Assiciative Arrays (Dictionaries/Hashes)  // Just like normal array except indexs are not integers, but strings that must be unique.  Not called index but keys. 2 sets of datat with one to one relationships.
//


var zipCodes = [];

zipCodes['Strum'] = 54770;
zipCodes['Menomonie'] = 54751;
zipCodes['Green Bay'] = 54304;
zipCodes['Altoona'] = 54720;
zipCodes['Elk Mound'] = 54739;
zipCodes['Deforest'] = 53532;
zipCodes['Virginia Beach'] = 23511;

document.write(zipCodes['Strum']);

document.write('<ul>');

for (city in zipCodes) {

	document.write('<li>The zip code for ' + city + ' is ' + zipCodes[city] + '</li>');
}

document.write('</ul>');









