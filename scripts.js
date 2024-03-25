// Examine the HTML file and understand the elements

// By default, number 0 is displayed.

// You will build a simple calculator with four operations, one operation happening at a time. It is expected that a user will click a number first, then an operation and another number. At this point, user can either click equal button or another operation. In this case, you will calculate the operation and display the result. Use can continue to make more calculations. 
// i.e. User clicks "2", "4", "+", "1", "2", "=" in this order. This means user wants to add 24 and 12 and on "=" click, result will display 36.
// i.e. User clicks "1", "0", ".", "5", "-", "2", ".", "4", "+", in this order. This means user wants to subtract 2.4 from 10.5 and on "+" click, result will display 8.1. Because user ended with addition sign, they are preparing to add another number to 8.1.

// Clear button clears the display to 0 and sets everything else back to default.

// Negative button changes the value to its value multiplied by -1.

/**
 * Step 1: Select important elements i.e. clear button, equal button, and result screen
 * Step 2: Select all the remaining buttons. These should be numbers, operations, negative sign, and decimal point, all together. We will loop through each of these buttons later.
 * Step 3: Create variables to hold important information. For example, currently entered number, operation selected, previous number/result etc.
 * Step 4: Create a function for each action. 
 *    4.1: What happens when a number is pressed?
 *    4.2: What happens when an operation is pressed?
 *    4.3: What happens when the clear button is pressed?
 *    4.4: What happens when the equal button is pressed?
 *    4.5: What happens when the negative button is pressed?
 * 
 * Hint: Create one function for each of these steps and just do a console log for each of them. Then, use a loop to assign each function to the proper button with an "addEventListener" method and test each button click. Make sure the proper function is called when the respective button is click. Once confirmed that the functions are added to each button, update the functions to do the actual calculation.
 * 
 * P.S.: If your number has a decimal point, it cannot have another one. 
 */