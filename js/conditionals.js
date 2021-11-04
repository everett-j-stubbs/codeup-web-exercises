"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
analyzeColor('blue')
analyzeColor('red')
analyzeColor('cyan')


function analyzeColor(color) {
    if (color === "blue")
    {
        return "Blue is my favorite color";
    }else if (color === 'red') {
        return "Red is the color of roses"
    }else if (color === 'cyan')
    {return "I don't know anything about cyan"
}
}
console.log(analyzeColor(randomColor));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

function analyzeColorSwitch(color) {
    switch(color){
        case 'red' :
            return("red is the color of roses");
            break;
        case 'blue' :
            return("blue is the color of the sky");
            break;
        case 'cyan' :
            return("i don't know anything about cyan");
            break;
        default:
            return(color + " is not defined");
            break;

}
    }

        console.log("----")
        console.log(analyzeColorSwitch("blue"));
        console.log(analyzeColorSwitch("red"));
        console.log(analyzeColorSwitch("cyan"));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
function calculateTotal('luckyNumber', total) {
    switch (luckyNum) {
        case 0:
            return total;
            break
        case 1:
            return total - (total * .1);
            break
        case 2:
            return total - (total * .25);
            break
        case 3:
            return total - (total * .35);
            break
        case 4:
            return total - (total * .5);
        case 5:
            return 0
            break
        default:
            return total;
            break
    }

    console.log(calculateTotal(luckyNumber1,total100));
    console.log(calculateTotal(luckyNumber2,total100));
    console.log(calculateTotal(luckyNumber3,total100));
    console.log(calculateTotal(luckyNumber4,total100));
    console.log(calculateTotal(luckyNumber5,total100));
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

let luckyNumber = math.floor(Math.random() * 5);

    var userTotal = parseFloat(prompt(message What is your total today?))
    alert("Your lucky number was:" = luckyNumber + "\nYour total was: $" + userTotal.toFixed


/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function playNumberGame(num) {
    var userNum = parseFloat(num);
    if (!NaN(userNum)) {
        if (userNum % 2 === 0){
            alert(userNum = " is an even number.");
        else {
                alert(userNum = " is an odd number.";


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);

                alert(userNum + "plus 100 is" + (userNum + 100));

                if (userNum 0) {
                    alert(userNum + "is a negative number.");
                else if (userNum > 0)
                        alert(userNum + "is a positive number.";
                    else
                        alert ("you entered in 0");
                else
                    alert ("you didn't give me a number, how dare you.");

                }

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved

