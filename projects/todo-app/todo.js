
let newItem = document.querySelector('.newItem');
let click = document.querySelector(".submit");
let ul = document.querySelector("ul");
let list = document.querySelector("li"); 
let input = document.querySelector("#input");
let del = document.querySelector(".del");

ul.addEventListener("dblclick", function(e){
    e.target.remove();

})

ul.addEventListener("click", function(e){
    e.target.style.color = "red";
    e.target.style.textDecoration = "line-through";
})


click.addEventListener("click", function(){
    console.log(input.value);
    if(input.value !== ""){
        let li = document.createElement("li");
        li.textContent = input.value;
        ul.append(li);
        input.value = "";   
    }
    else{
        alert("Write something. 😊")
    }
})


input.addEventListener("keypress", function(e){
    
    if(e.key === "Enter" && newItem.value !== ""){
        let li = document.createElement("li");
        li.textContent = newItem.value;
        ul.append(li);
        newItem.value = "";   
    }
})

del.addEventListener("click", function(){
    location.reload();
})

