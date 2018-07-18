var fName = "",
    numDice = 0,
    dieValueTotal = 0,
    dieRoll = 0,
    output = "";


fName = prompt("Please enter your first name:");

  while (fName === "") {
    fName = prompt("Reminder: Please enter your first name:");
    } 


numDice = prompt("How many dice would you like to roll?");

  while (isNaN(numDice) || parseFloat(numDice) !== parseInt(numDice)
         || numDice < 1) {      

    numDice = prompt("Reminder: How many dice would you like to roll?" +
                      "\nNumber should be a positive integer.");
    }


function getDieValue(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;}


output = "Rolling " + numDice + " die...<br> Hey " + fName + ", you rolled a "; 

  for (i = 1; i <= numDice; i++) {    

    dieRoll = getDieValue(1, 6);

    alert("Dice #" + i + " is a " + dieRoll); 

    dieValueTotal += dieRoll;     


    if (i == 1 && i == numDice) {
      output += dieRoll + " for a grand total of " + dieValueTotal;

      } else if (i == 1) {
        output += dieRoll;

      } else if (i == 1 && i == numDice) {
        output += " and " + dieRoll + " for a grand total of " + dieValueTotal;

      } else if (i == 2 && i == numDice) {
        output += " and " + dieRoll + " for a grand total of " + dieValueTotal;

      } else if (i == numDice) {
        output += ", and " + dieRoll + " for a grand total of " + dieValueTotal;

      } else {
        output += ", " + dieRoll;
      }

    }  

document.write(output); 
