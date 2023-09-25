// Selecting the display and input elements from the HTML
let display = document.querySelector("#displayInput"); // Display for the calculator
let input = document.querySelector("#buttonInputs"); // Buttons for input

// Initializing the display value to 0
display.value = 0;

// Adding a click event listener to the input buttons
input.addEventListener("click", function(e){
    // Extracting the text content of the clicked button
    let inputReceived = e.target.innerText;

    // Checking if the current display value is "0" and the clicked button is not "0"
    if(display.value === "0" && inputReceived !== "0"){
        // If true, replace the "0" with the clicked button's text
        display.value = inputReceived;
        return; // Exit the function
    }

    // Handling the "AC" (All Clear) button
    if(inputReceived === "AC"){
        // Clearing the display by setting it to an empty string
        display.value = "";
        return; // Exit the function
    }

    // Handling the "=" (Equals) button
    if(inputReceived === "="){
        // Evaluating the current expression in the display and updating the display value
        display.value = calculate(display.value);
        return; // Exit the function
    }

    // Handling other buttons (numbers and operators)
    if(inputReceived !== "C"){
        // Appending the clicked button's text to the current display value
        display.value = display.value + inputReceived;
    }
})

// Function to evaluate an expression using JavaScript's eval() function
function calculate(value){
    return eval(value);
}
