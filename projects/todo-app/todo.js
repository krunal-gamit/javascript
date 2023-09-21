// Selecting relevant elements from the HTML
let newItem = document.querySelector('.newItem'); // Input field for new tasks
let click = document.querySelector(".submit"); // Add button
let ul = document.querySelector("ul"); // Task list
let list = document.querySelector("li"); // Individual task item (unused)
let input = document.querySelector("#input"); // Input field for new tasks
let del = document.querySelector(".del"); // Delete All button

// Handling double-click to remove a task
ul.addEventListener("dblclick", function(e){
    e.target.remove(); // Removes the task that was double-clicked
})

// Handling click to mark a task as done
ul.addEventListener("click", function(e){
    e.target.style.color = "red"; // Changes text color to red
    e.target.style.textDecoration = "line-through"; // Adds a line-through style
})

// Handling click to add a new task
click.addEventListener("click", function(){
    console.log(input.value); // Logging the input value to the console
    if(input.value !== ""){
        let li = document.createElement("li"); // Creating a new list item
        li.textContent = input.value; // Setting the text content of the list item
        ul.append(li); // Appending the list item to the task list
        input.value = ""; // Clearing the input field
    }
    else{
        alert("Write something. 😊"); // Showing an alert if the input is empty
    }
})

// Handling Enter key press to add a new task
input.addEventListener("keypress", function(e){
    if(e.key === "Enter" && newItem.value !== ""){
        let li = document.createElement("li"); // Creating a new list item
        li.textContent = newItem.value; // Setting the text content of the list item
        ul.append(li); // Appending the list item to the task list
        newItem.value = ""; // Clearing the input field
    }
})

// Handling click to delete all tasks and refresh the page
del.addEventListener("click", function(){
    location.reload(); // Reloading the page to clear all tasks
})
