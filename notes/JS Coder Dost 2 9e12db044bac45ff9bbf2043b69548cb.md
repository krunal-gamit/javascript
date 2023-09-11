# JS: Coder Dost 2

## DOM

JavaScript DOM (Document Object Model)

Created by the browser as the HTML load into the browser.

The browser creates an object of HTML called a “**document object**”.

In the Document object, there is a model of complete HTML in a tree-like structure.

![Untitled](JS%20Coder%20Dost%202%209e12db044bac45ff9bbf2043b69548cb/Untitled.png)

![Untitled](JS%20Coder%20Dost%202%209e12db044bac45ff9bbf2043b69548cb/Untitled%201.png)

### 1. (SELECTION) Getting HTML element/s using

`querySelector`: returns the **first** matching element.

and `querySelectorAll`: returns all matched elements.

```jsx
let resultElement = document.querySelector("p");

console.log(resultElement);

let resultElementAll = document.querySelectorAll("p");

console.log(resultElementAll);
```

![Untitled](JS%20Coder%20Dost%202%209e12db044bac45ff9bbf2043b69548cb/Untitled%202.png)

Class

```jsx
let resultElement = document.querySelector(".family");

console.log(resultElement);
```

![Untitled](JS%20Coder%20Dost%202%209e12db044bac45ff9bbf2043b69548cb/Untitled%203.png)

ID

```jsx
let resultElement = document.querySelector("#code");

console.log(resultElement);
```

![Untitled](JS%20Coder%20Dost%202%209e12db044bac45ff9bbf2043b69548cb/Untitled%204.png)

Earlier Methods

gives collection rather than node list

```jsx
let tagNamedElements = document.getElementsByTagName('p');
console.log(tagNamedElements);

//forEach doesn't work
```

```jsx
let classNamedElements = document.getElementsByClassName('family');
console.log(classNamedElements);
```

```jsx
let idNamedElements = document.getElementById('code');
console.log(idNamedElements);
```

### 2. [UPDATING/CHANGING]

```jsx
console.log(resultElement.innerHTML); //retains space

console.log(resultElement.innerText);
```

![Untitled](JS%20Coder%20Dost%202%209e12db044bac45ff9bbf2043b69548cb/Untitled%205.png)

InnerText

`innerText` Ignores spaces, retrieves and sets content in normal text

```jsx

resultElement.innerText = "<h6>HEllo world<h6>";
```

![Untitled](JS%20Coder%20Dost%202%209e12db044bac45ff9bbf2043b69548cb/Untitled%206.png)

InnerHTML

`innerHTML` It does not ignore spaces, retrieves and sets content in HTML format

```jsx
resultElement2.innerHTML = "<h6>HEllo000world<h6>";
```

![Untitled](JS%20Coder%20Dost%202%209e12db044bac45ff9bbf2043b69548cb/Untitled%207.png)

```jsx
resultElement2.innerHTML += "<h6>HEllo000world<h6>";
//doesn't overwrite 
```

Changing **Attributes**

```jsx
let resultElement = document.querySelector("a");

console.log(resultElement.getAttribute("href"));

resultElement.setAttribute("href", "https://krunalgamit.live");

console.log(resultElement.getAttribute("href"));
```

****Inline Style****

```jsx
let resultElement = document.querySelector("h1");

resultElement.style.color = "blue";

resultElement.style.backgroundColor = "pink";
```

```jsx
//add remove class 

let heading = document.querySelector("h2");

//add the class name

heading.classList.add("main");

//remove class name

heading.classList.remove("family");
```

![Untitled](JS%20Coder%20Dost%202%209e12db044bac45ff9bbf2043b69548cb/Untitled%208.png)

```jsx
//replace the class name

heading.classList.replace("family","main");
```

**Parent children and Siblings**

```jsx
let parentElement = document.querySelector(".content");

console.log(parentElement.children)
```

```jsx
let parentElement = document.querySelector(".content");

console.log(parentElement.children)

Array.from(parentElement.children).forEach(function(elements){
    console.log(elements);
    elements.classList.add("child");
})
```

![Untitled](JS%20Coder%20Dost%202%209e12db044bac45ff9bbf2043b69548cb/Untitled%209.png)

```jsx
let childElement = document.querySelector("h2");
//find the parent element 

console.log(childElement.parentElement);

console.log(childElement.nextElementSibling);

console.log(childElement.previousElementSibling);
```

### 3. EVENTS

```jsx
let eventElement = document.querySelector(".clickMe");

eventElement.addEventListener("click", function(){
    console.log("Clicked Me");
})
```

![Untitled](JS%20Coder%20Dost%202%209e12db044bac45ff9bbf2043b69548cb/Untitled%2010.png)

```jsx
let eventElement = document.querySelectorAll("li");

eventElement.forEach(function(element){
    element.addEventListener("click", function(){
        console.log("Item Clicked:", element.innerHTML);
    })
})
```

![Untitled](JS%20Coder%20Dost%202%209e12db044bac45ff9bbf2043b69548cb/Untitled%2011.png)

Printing Event 

```jsx
let eventElement = document.querySelectorAll("li");

eventElement.forEach(function(element){
    element.addEventListener("click", function(e){
        console.log(e);
    })
}) //shows every details about the pointer
```

Shows element clicked

```jsx
let eventElement = document.querySelectorAll("li");

eventElement.forEach(function(element){
    element.addEventListener("click", function(e){
        console.log(e.target);
    })
})
```

TODO

```jsx
let eventElement = document.querySelectorAll("li");

eventElement.forEach(function(element){
    element.addEventListener("click", function(e){
        console.log(e.target);
        e.target.style.textDecoration = 'line-through'
    })
})
```

![Untitled](JS%20Coder%20Dost%202%209e12db044bac45ff9bbf2043b69548cb/Untitled%2012.png)

Remove

`e.target.remove()`

Add  

```jsx
let eventElement = document.querySelector(".add");

let ul = document.querySelector("ul");

eventElement.addEventListener("click", function(){
    let li  = document.createElement("li"); //IMP
    li.textContent = "New Task";
    ul.append(li);  // or prepend()
})
```

### Bubbling and Delegation

 

```jsx
let ul = document.querySelector("ul");

ul.addEventListener("click", function(){
        console.log("ul Clicked");
})

let ulli = document.querySelector("li");

ulli.addEventListener("click", function(){
        console.log("li Clicked");
})
```

Even single click shows li and ul clicked

![Untitled](JS%20Coder%20Dost%202%209e12db044bac45ff9bbf2043b69548cb/Untitled%2013.png)

Delegation

Listener on Parent we are manipulating the child

that too single listener saves memory

```jsx
let ul = document.querySelector("ul");

ul.addEventListener("click", function(e){
        console.log("ul Clicked");

        if(e.target.nodeName == "LI"){
            e.target.remove();
        }
})
```

**************COPY Events************** 

```jsx
let copyrightElement = document.querySelector('.copy');

copyrightElement.addEventListener("copy",()=>{
    console.log("OPPS! You cannot copy.");
})

let box = document.querySelector(".box");

box.addEventListener("mousemove",(e)=>{
    console.log(e.offsetX,e.offsetY);
})

```

## Form

```html
<form action="#" class="sign-up-form">
        <input type="email" name="userEmail" id="email" placeholder="Email"></input>
        <input type="password" name="userPassword" id="password" placeholder="Password"></input>
        <input type="submit" >

    </form>
```

Boring way

```jsx
let form = document.querySelector(".sign-up-form");
//console.log(form)
let email = document.querySelector("#email");
let password = document.querySelector("#password")

form.addEventListener("submit", function(e){
    e.preventDefault();
    console.log(email.value, password.value);

})
```

OR

```jsx
let form = document.querySelector(".sign-up-form");
//console.log(form)

form.addEventListener("submit", function(e){
    e.preventDefault();
    console.log(form.email.value, form.password.value);

})
```

Better use **name**

```jsx
let form = document.querySelector(".sign-up-form");
//console.log(form)

form.addEventListener("submit", function(e){
    e.preventDefault();
    console.log(form.userEmail.value, form.userPassword.value);
											//name                  //name
})
```

Implementing Password validation 

- At least 8 char
- At least one Upper case
- At least one Lower case
- At least one digit

```jsx
let form = document.querySelector(".sign-up-form");
//console.log(form)
let email = document.querySelector("#email");
let password = document.querySelector("#password")

let passwordPattern = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$"

form.addEventListener("submit", function(e){
    e.preventDefault();
    let passwordValue = password.value;
    console.log(passwordValue)
    let result = passwordValue.match(passwordPattern);
    if(result){
        console.log("Your password is Strong.");
    }else{
        console.log("Try Again.");
    }

})
```

![Untitled](JS%20Coder%20Dost%202%209e12db044bac45ff9bbf2043b69548cb/Untitled%2014.png)

### Username validation

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Be a part of this site</h1>
    <form action="#" class="sign-up-form">
        <input type="text" name="userName" id="name" placeholder="username"></input>
        <input type="password" name="userPassword" id="password" placeholder="Password"></input>
        <input type="submit" value="submit">

    </form>
    <script src="cdhtml2.js"></script>
</body>
</html>
```