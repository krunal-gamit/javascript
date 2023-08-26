let display = document.querySelector("#displayInput");
let input = document.querySelector("#buttonInputs");
display.value = 0;


input.addEventListener("click", function(e){
    let inputReceived = e.target.innerText;

    if(inputReceived === "C"){
        display.value = "";
        return;
    }
    if(inputReceived === "="){
        console.log(display.value);
        display.value = calculate(display.value);
        return;
    }

    display.value = display.value + inputReceived;
})

//we have to create a function that is similar to stack so that calculations are done
function calculate(value){
    console.log("here",value);
    let newValue = value.split("+");
    console.log(typeof value);
    let ans = value;
    return ans;
}
