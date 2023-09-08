# JavaScript Advance: Level Up

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

![download.png](JavaScript%20Advance%20Level%20Up%2078334d74f9034fb6b94fff7a56726712/download.png)

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

![Untitled](JavaScript%20Advance%20Level%20Up%2078334d74f9034fb6b94fff7a56726712/Untitled.png)

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