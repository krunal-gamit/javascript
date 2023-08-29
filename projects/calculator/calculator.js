let display = document.querySelector("#displayInput");
let input = document.querySelector("#buttonInputs");
display.value = 0;


input.addEventListener("click", function(e){
    let inputReceived = e.target.innerText;

    if(display.value === "0" && inputReceived !== "0"){
        display.value = inputReceived;
        return;
    }

    if(inputReceived === "AC"){
        display.value = "";
        return;
    }
    if(inputReceived === "="){
        display.value = calculate(display.value);
        return;
    }

    if(inputReceived !== "C"){
    display.value = display.value + inputReceived;
    }
})

function calculate(value){
    return eval(value);
}
