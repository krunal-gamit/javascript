# JS: Coder Dost (YT) 1

Revisiting js basics : [Complete JavaScript Course + Notes for Beginners in Hindi - YouTube](https://www.youtube.com/watch?v=lGmRnu--iU8&t=590s&ab_channel=CoderDost)

```jsx
let firstName = "Krunal";
let lastName = "Gamit";

console.log(firstName,lastName);
//by default space is added in between them

let fullName = firstName + lastName;

console.log(fullName);

let fullName1 = firstName + " " + lastName;
console.log(fullName1);

//look at this i learnt this new way of assigning/concating
let fullName2 = `${firstName} ${lastName}`;

console.log(fullName2);

console.log(fullName.toLowerCase());
console.log(fullName1.indexOf(" "));

//cleaning string 
let hobbies = "    coding right?   ";
console.log(hobbies);
let result = hobbies.trim();
console.log(result);

//interesting thing
console.log(hobbies.indexOf("coding"));
console.log(result.indexOf("coding"));

//lastIndex
console.log(result.lastIndexOf("Coding"))
//will give -1 since CASE SENSITIVE 

console.log(result.includes("coding"))

//slicing 
console.log(result.slice(0,5));

let correctHobby = result.slice(0,6);
console.log(correctHobby)
```

![Untitled](JS%20Coder%20Dost%20(YT)%201%20b427d86dda8643df81ee6cc1770371e3/Untitled.png)

![Untitled](JS%20Coder%20Dost%20(YT)%201%20b427d86dda8643df81ee6cc1770371e3/Untitled%201.png)

```jsx
//split method

let favouriteColors = "Blue Black Red Yello Green";
let arrayFavouriteColors = favouriteColors.split(' ');
//string array

console.log(arrayFavouriteColors);
```

```jsx
//JavaScript string are IMMUTABLE 

let str = "Hello";
console.log(str);

str[0] = 'w';

console.log(str);

str = "World";
console.log(str);

str = str + " Hello";
console.log(str);
```

![Untitled](JS%20Coder%20Dost%20(YT)%201%20b427d86dda8643df81ee6cc1770371e3/Untitled%202.png)

```jsx
//Mathematical Expression 

let score = 50;

// using Priority and Precedence Associativity
// 1 () Brackets
// 2 ** Power Operator 
// 3 * / % Left to Right 
// 4 - + Left to Right 

let result = score * 2 + (4 *3 ) - 8 / 2 % 2;
console.log(result);
```

```jsx
//Loosely typed language 

let ans =  `The score is ${result}`;
console.log(ans);
```

```jsx
//Loose equality

let age = 3;

console.log(`We have age ${age}`);
console.log(`The type of age is ${typeof age}`); //number

console.log(`checking age == "3"${age == "3"}`); // true
console.log(`checking age == 3 ${age == 3}`);   // true

//loose not equality 
console.log(`checking age != "3" ${age != "3"}`);  //false

//strictly equality 

console.log(`checking age === 3 ${age === 3}`);    //true
console.log(`checking age === "3" ${age === "3"}`);  //false

//stricly not equal

console.log(age !== "3");  // true
```

```jsx
//Type conversion 

let stringType = "14";

console.log(stringType, typeof stringType);

//Number method 

let numberType = Number(stringType);
console.log(numberType, typeof numberType);

let stringType2 = String(numberType);
console.log(stringType2, typeof stringType2);

let booleanValueOfNumber = Boolean(stringType2);
console.log(booleanValueOfNumber, typeof booleanValueOfNumber);
```

```jsx
//Arrays

let dishes = ["Biryani", "Chat", "Oats"];

console.log(dishes[1]);

console.log(dishes.join(" "));

//modify the array

dishes[0] = "veg";

console.log(dishes.indexOf("veg"))

//concating

let newDishes = ["Panipuri", "Dosha"];

console.log(dishes.concat(newDishes));

//length 
console.log(newDishes.length);

//Mutated method push

console.log(newDishes.push("Paratha"));
console.log(newDishes);

console.log(newDishes.pop());

//methods that return boolean

let booleanBelu = "krooksgeek@gmail.com";

console.log(booleanBelu.includes("@"));

// == 
// ===
```

# Control Flow

```jsx
//control flow

let dishes = ["Pizza", "Pan Cake", "Tacos"];
for(let a=0; a<dishes.length; a++){
    console.log(dishes[a]);
}

let j = 1;
while(j<=5){
    console.log(j);
    j++;
}

let s=1;

do{
    console.log("Print atleast once.");
    s++;
}while(s<=1)
```

![Untitled](JS%20Coder%20Dost%20(YT)%201%20b427d86dda8643df81ee6cc1770371e3/Untitled%203.png)

`if`/`else if`/`else`

![Untitled](JS%20Coder%20Dost%20(YT)%201%20b427d86dda8643df81ee6cc1770371e3/Untitled%204.png)

```jsx
for(let i=1; i<=10; i++){
    if (i === 2){
        continue; //skipping
    }
    console.log(i);
}
```

```jsx
for(let i=1; i<=10; i++){
    if (i === 5){
        break; //stops the for loop
    }
    console.log(i);
}
```

```jsx
//logical operators 

let password = "krooks#geek";

if(password.length > 5 && password.includes('#')){
    console.log("Your password is strong");
}
else{
    console.log("Password is weak.");
}
```

```jsx
let result = true && false;
console.log(result); //false

let result = true || false;
console.log(result); //true
```

# 

![Untitled](JS%20Coder%20Dost%20(YT)%201%20b427d86dda8643df81ee6cc1770371e3/Untitled%205.png)

# Ternary Operators

```jsx
let age = 20;
let weight = 40;

if (age>18){
    console.log("Valid");
}
else 
    console.log("Falied");

let result = age > 18 ? weight < 45 ? "Belid" : "Overweight" : "Not Belid" ;
console.log(result)
```

# Switch Case

![Untitled](JS%20Coder%20Dost%20(YT)%201%20b427d86dda8643df81ee6cc1770371e3/Untitled%206.png)

# Functions

```jsx
//functions

function HelloWorld(){
    console.log("Hello World");
}

HelloWorld() //function call 

//function stored as a variable 

let invite = function(){
    console.log("say hello.");
}

invite()  //function call

//with parameters 

let invitation = function(name){
    console.log(`Welcome ${name}! You are invited to the wedding.`);
}

invitation("Tim")
```

```jsx
let invitation = function(name, date = "20th", time ="noon" ){
    console.log(`Welcome ${name}! You are invited to the wedding at ${date} ${time}.`);
}

invitation("Tim")

invitation("Obama", "13th","10AM")

invitation("Obama", undefined,"10AM")
```

![Untitled](JS%20Coder%20Dost%20(YT)%201%20b427d86dda8643df81ee6cc1770371e3/Untitled%207.png)

Function with `return`

```jsx
let addition = function(a,b){
    let ans = a+b;
    return ans;
}

let addAns = addition(5,2);
console.log(addAns);
```

![Untitled](JS%20Coder%20Dost%20(YT)%201%20b427d86dda8643df81ee6cc1770371e3/Untitled%208.png)

## Arrow functions

Special Form of the function expression 

It allows writing function faster 

**No** need to use the ******************function****************** keyword

**No** need to use **parenthesis**  () in case of a single parameter 

**No** need to use **Curly** braces {} if a single line of function 

**No** need to use the **return** statement if a single line of code 

```jsx
let invite = name => `${name}! you are invited to the party.`;

console.log(invite("Elon"))
```

```jsx
//Arrow functions

let invite = name => {
  return `${name}! you are invited to the party.`;
}  //return statement required.

console.log(invite("Elon"))
```

Passing function as an argument 

```jsx
let upperCase = function(str){
    return str.toUpperCase();
}

let lowerCase = function(str){
    return str.toLowerCase();
}

let transformer = function(str,fun){
    return fun(str);
}

console.log(transformer("Hello World",lowerCase))
console.log(transformer("Hello World", upperCase))
```

Function returning another function

Anonymous: function without name

 

```
//returning a function 

let compliment = function(msg){
    return function(name){
        console.log(`${name} ${msg}`);
        return true;
    }
}

compliment("You are a good coder.")("Krooks")

//2ND METHOD

let complimenting = compliment("You are good coder")

complimenting("Krunal")

//higher-order function
```

IIFE

Executed only once

![Untitled](JS%20Coder%20Dost%20(YT)%201%20b427d86dda8643df81ee6cc1770371e3/Untitled%209.png)

```jsx
//trick to make without name 
//adding paranthesis

(function(name){
    console.log(`This function will never be executed again. ${name}`);
})("IIFE")
```

# Set TimeOut & Set Interval

setTimeOut: Run function **ONCE** after interval

setInterval: Run function repeatedly, after the interval of time, then repeating

  `setTimeOut(function()|code, delay, argument1, argument2,.....)`

```jsx
setTimeout(function greeting(){
    console.log("Welcome to our page.")
},5000) //5000ms = 5sec
```

```jsx
//improvised
setTimeout(function greeting(name){
    console.log(`Welcome ${name} to our page.`)
    
},5000, "John")
```

```jsx
setInterval(function greeting(name){
    console.log(`Welcome ${name} to our page.`)
    
},5000, "John") //will run every 5 sec
```

Hoisting 

```jsx
test = 9; 
console.log(test) //output 9

var test = 6; //initialization is sent to first
```

```jsx
test()

function test(){
    console.log("I am Hoisted");
}
```

## Objects

![Untitled](JS%20Coder%20Dost%20(YT)%201%20b427d86dda8643df81ee6cc1770371e3/Untitled%2010.png)

![Untitled](JS%20Coder%20Dost%20(YT)%201%20b427d86dda8643df81ee6cc1770371e3/Untitled%2011.png)

```jsx
let car = {
    color: "Metallic Grey",
    Model: "SV-MT",
    Company: "Honda"
}

console.log(car);
console.log(car["color"])
console.log(car.Company)

let propertyName = "color" ; //as a variable we can utilze further by changing

console.log(car[propertyName]);
```

Modification

```jsx
car.color = "Silver Mettalic"

console.log(car)
```

Adding 

```jsx
car.registrationYear = 2016;

let propertyName2 = "registrationYear"  ;

console.log(car[propertyName2]);
```

Deleting 

```jsx
let a = delete car.registrationYear; //single line
console.log(a); //returns true no use
```

## Methods

It is nothing but object property holding a function as value.

```jsx
let person = {
    name: "Abc",
    age : function(born){
        return 2023 - born;
    }
}

console.log(person.age(1999))
//makes no sense but ok
```

`this` 

```jsx
let person = {
    firstName: "Harry",
    lastName: "Brooks",
    city: "Delhi",
    birthYear: 1989,
    education: "Software Engineer",
    getSummary: function(){
        return `${this.firstName} ${this.lastName} lives in ${this.city} since ${this.birthYear}.`
    }

}

console.log(person.getSummary());
//Harry Brooks lives in Delhi since 1989.
```

Keep in Mind:

1. In which method we use `this` keyword → **getSummary**
2. Owner (Parent) of the method who is calling this method → **person**

## forEach

Loop which is used to traverse over Array

```jsx
let dishes = ["Paneer", "Chhole", "Biryani", "Tandoori"];

//traditional for loop

for(let i=0; i<dishes.length; i++){
    console.log(dishes[i]);
}
console.log("------------------------------------")
//using forEach Method

dishes.forEach(function(element){
    console.log(element);
})
```

![Untitled](JS%20Coder%20Dost%20(YT)%201%20b427d86dda8643df81ee6cc1770371e3/Untitled%2012.png)

**Example**

```jsx
let blocklist = [{userName: "John", reason:"Abusive Content"}, {userName: "Jay", reason: "Copyright Claim"}];

console.log(blocklist[0]);

console.log("------------------------------------")

blocklist.forEach(function(element){
    console.log(element.userName);
})

console.log("------------------------------------")

for(let i=0; i<blocklist.length; i++){
    console.log(blocklist[i]);
}

console.log("------------------------------------")

for(let i=0; i<blocklist.length; i++){
    console.log(blocklist[i].userName," Reason:" ,blocklist[i].reason);
}
```

![Untitled](JS%20Coder%20Dost%20(YT)%201%20b427d86dda8643df81ee6cc1770371e3/Untitled%2013.png)

## Math Function

```jsx
//Math object
let number = 7.66594545646542;

console.log(Math.round(number));

console.log(Math.floor(number));

console.log(Math.ceil(number));

console.log(Math.trunc(number));

let random = Math.random()
console.log(Math.round(random*100)) //1-100
//Many More
```

## Call, Apply and Bind

```jsx
let mainPlane = {
    airline: "Fly India",
    iatcode: "F1",
    bookings: [],
    book: function(flightNum, name){
        console.log(`${name} Booked flight on ${this.airline} ${this.iatcode}.`);
        this.bookings.push({flightName:`${this.airline}`, name:`${name}`, flightNum: `${flightNum}`})
    }
}

mainPlane.book(553,"John")

console.log(mainPlane)
```

```jsx
let childPlane = {
    airline: "Fly India",
    iatcode: "F1",
    bookings: [],
}

let book = mainPlane.book;
book(775,"Luc")   //ERROR book requires this. wala values 
```

![Untitled](JS%20Coder%20Dost%20(YT)%201%20b427d86dda8643df81ee6cc1770371e3/Untitled%2014.png)

"use strict” in first line of code to get better error details

```jsx
"use strict"

let mainPlane = {
    airline: "Fly India",
    iatcode: "F1",
    bookings: [],
    book: function(flightNum, name){
        console.log(`${name} Booked flight on ${this.airline} ${this.iatcode}.`);
        this.bookings.push({flightName:`${this.airline}`, name:`${name}`, flightNum: `${flightNum}`})
    }
}

mainPlane.book(553,"John")

console.log(mainPlane)

//New Airline of same group

let childPlane = {
    airline: "Child Plane",
    iatcode: "CP",
    bookings: [],
}

let book = mainPlane.book;
//book(775,"Luc")

//Solution is call method

book.call(childPlane, 689, "Zack")

console.log(childPlane)
```

![Untitled](JS%20Coder%20Dost%20(YT)%201%20b427d86dda8643df81ee6cc1770371e3/Untitled%2015.png)

```jsx
//also we can 
book.call(mainPlane, 253, "Tom")

//Apply method
book.apply(childPlane, [545, "Tony"]) //pass in Arrya
```

Bind

```jsx
function greet(){
    console.log(`Welcome ${this.firstName} ${this.lastName} to our new coding challenge.`);
}

let user = {
    firstName: "Paul",
    lastName: "John"
}

let greets = greet.bind(user)
greets()

//Welcome Paul John to our new coding challenge.
```

Object/Arrays

```jsx
// objects/ arrays how "refrences" are passed to variable 

let arr = [1,2,3,4,5,6];

let getRef = arr;

console.log(`Original Array: ${arr}`);
console.log(`Ref Array: ${getRef}`);

getRef[3] = 2;

console.log(`Original Array: ${arr}`);
console.log(`Ref Array: ${getRef}`);

let copy = [...arr];

copy[0] = 7;

console.log(`Copy Array: ${copy}`);
console.log(`Original Array: ${arr}`);
```

For in loop

```jsx
let car = {
    model: 2022,
    color: "black",
    company: "Honda"
}

console.log(car)

for(let key in car){
    console.log(key);
}

let x = "";

for(let key in car){
    x = x+ " " +car[key];
}
console.log(x)
```