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

```jsx
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
```



# JavaScript Level Up

We will utilize this page to learn about advanced topics of JavaScript

 Main versions es5(old) and es6(new)

`var` in es5 and `let`, `const`  in es6 were updated

- `var` is function scoped, nearest parent function only.
- `var` adds itself to the window objects.

```jsx
function abcd(){
	for(var i=1; i<5; i++){
		console.log(i)
}
console.log(i) // even this will work
}
//this function will print 1-5 
```

- `let` and`const` is braces scoped.
- `let` and `const` **DONOT** add itself to the **window** objects.

```jsx
function abcd(){
	for(let i=1; i<5; i++){
		console.log(i)
}
console.log(i) // will NOT work i is not defined
}
//this function will print 1-4 and ERROR
```

<aside>
💡 Some features that are not part of JavaScript language can be used via the help of **Window,** which ****consists of features that are for browsers but can be used in JavaScript. i.e. `alert()`, `prompt()` etc.

</aside>

**Browser Context API**

Window, Stack and Heap memory.

Stack: 

![download.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/62bf1f42-5aff-4a8d-a3bb-7e95818b722e/download.png)

Heap memory: Intermediate data is stored. 

Execution Context is a container where the function’s code is executed.

When we run a function, this function creates its imaginary container. That contains:

1. variables
2. functions inside that parent function
3. lexical environment of that function

```jsx
function ac(){
	var a - 13;
	function def(){ 
		var b = 3;  // var b will NOT be in execution context of AC
}
}
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/eec0c1c2-5019-44e8-aed4-6317908a845d/Untitled.png)

Lexical Environment is a chart which holds its scope and its related scope chain.

How to copy reference variables 

```jsx
var x = [1,2,3,4,5]
var y = [...x]   // x values copied in y

var obj = {name: "Krooks"};
var cp = {...obj};
```

Truthy and Falsey

Whenever we write something in javascript it will be either of these.

Falsey: 0, false, undefined, null, NaN, Document.all

True: Other than falsey values

Switch Case

```jsx
switch(1){
		case 1:
				break;
		case 2;
				break;
		default:
}
```

`forEach` `forin` `dowhile`

`forEach()` : when we have an array
