let a = document.querySelector("h1")
console.log(a)




a.addEventListener("mouseover", function(){
    a.innerHTML = "Hello";
    a.style.fontSize = "40px";
})

a.addEventListener("mouseenter", function(){
    a.innerHTML = "Hello";
    a.style.fontSize = "10px";
})



let light = document.getElementById("bulb");
let button = document.querySelector("button");

let flag = 0;

button.addEventListener("click", function(){
    if(flag === 0){
        light.style.backgroundColor = "yellow";
        button.innerHTML = "OFF";
        flag = 1;
    }
    else
    {
        light.style.backgroundColor = "white";
        button.innerHTML = "ON";
        flag = 0;
    }
    
})