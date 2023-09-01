# JavaScript Basics: Crash course

We will utilize this page to learn JavaScript. Learning from: [JavaScript Crash Course: Master the Basics in One Video! Ignite Your Front-End Mastery Series! - YouTube](https://www.youtube.com/watch?v=htznIeWKgg8&list=PLbtI3_MArDOkNtOan8BQkG6P8wf6pNVz-&index=3&pp=iAQB&ab_channel=SheryiansCodingSchool)

Word vs keyword

word: doesn't mean anything in js.

keyboard: predefined or reserved words.

| await | break | case | catch | class |
| --- | --- | --- | --- | --- |
| const | continue | debugger | default | delete |
| do | else | enum | export | extends |
| false | finally | for | function | if |
| implements | import | in | instanceof | interface |
| let | new | null | package | private |
| protected | public | return | super | switch |
| static | this | throw | try | true |
| typeof | var | void | while | with |
| yield |  |  |  |  |

var const let

Variables and constants: to store the data in a program is a variable.

`var score = 10;`  

Score is a variable so later value can be changed.

`const score = 20;`

Now the score cannot be changed. Error: Assignment to constant

Hoisting

Variable and function can be used before initialization.  

when we write `var a = 13;` this is converted to `var a;` which is declaration and`a=12;` which is initialisation where `var a;` is sent to the top of the code.

undefined: meaning when an identifier is only declared without any value.

not defined: meaning when an identifier doesn't exist. 

Types in js

Primitives: numbers, string, null, undefined, boolean 

```jsx
//understanding primitives 
var a = 10;
var aa= "Krooks";
```

References: [], (), {}

When trying to copy, the real value is not copied but the reference is copied. 

```jsx
var b = [1,3,4,435,34,2,34];

b.pop()

var c = b;

c.pop()

// b and c values will be the same 
```

 

Conditionals: 

`if(condition)` condition can only be either `true`or `false` or any condition can be converted to those two outputs.

```jsx
if(11>12){
}
else{
}
//else part will be executed.
```

```jsx
if(11>13){
}
else if(112>12){ //only this will run
}
else if(11>13){
}
else{
}
```

Loop: Something which repeats 

`for`, `while`

```jsx
//for(initialization, condition, iteration)
for(var d = 0; d<4; d++){
    console.log(d);
}

//while(condition){ ,,,,,exit statement }
var s = 0;
while(s<3){
console.log(s);
s++;
}
```

Functions: when you want reuse part of code, or run with different data.

```jsx
//functions
function addition(){
    console.log("Inside addition");
}

//calling 
addition();

//another way of writing 
//parameters 
function realaddition(a,b){
    var c = a + b;
    console.log(c);
}
//arguments 
realaddition(10,2);
```

Arrays: group of similar type of datatypes. Arrays are not arrays in javascript.

`var arr = [1,2,3,4,5,6];`  where index start from 0.

`push`, `pop`, `shift` , `unshift` and `splice(index, how many)`

```jsx
var arr = [1,2,3,4,5,6];
arr.pop() // remove element from end
console.log(arr)

arr.push(6) // add element at end
console.log(arr)

arr.shift() // remove element from start 
console.log(arr)

arr.unshift(1) // add element at front 
console.log(arr)

arr.splice(2,2) // remove inbetween (index from, how many)
console.log(arr)
```

Objects

An object is **a collection of properties**, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method. Objects in JavaScript, just as in many other programming languages, can be compared to objects in real life.

Blank object

`var a = {};`

Filled Object
var obj = {
    name: "HP Laptop",
    price: "50k",
    color: "silver",
    type: "notebook",
    gpu: false,
		somefun: function() //this is a method
};

//call obj.name
//call obj.price

obj.name = "Macbook Pro"
