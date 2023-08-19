let form = document.querySelector(".sign-up-form");
//console.log(form)
let user = document.querySelector("#name");
let password = document.querySelector("#password")

let passwordPattern = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$"

let userNamePattern = /^[A-Za-z]{6,12}$/

form.addEventListener("submit", function(e){
    e.preventDefault();
    
    let username = user.value;
    console.log(username);

})


