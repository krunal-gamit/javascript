var dulha = "a";
var dulhan = "c";

const dul = "aaa";

//console.log(a)



//understanding refrences and primitives 
var a = 10;
var aa= "Krooks";

var b = [1,3,4,435,34,2,34];

b.pop()

var c = b;

c.pop()


//conditionals 

if("apple"){
//console.log("hbd");
}

if(11>13){
}
else if(112>12){ //only this will run
   // console.log("2")
}
else if(11>13){
}
else{
}

//loops

for(var d = 0; d<1; d++){
    console.log(d);
}

var s = 0;
while(s<1){
console.log(s);
s++;
}

console.log("Functions");

//functions
//functions
function addition(){
    console.log("Inside addition");
}

addition();


function realaddition(a,b){
    var c = a + b;
    console.log(c);
}

realaddition(10,2);

console.log("arrays");

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

var ob = {};

var obj = {
    name: "HP Laptop",
    price: "50k",
    color: "silver",
    type: "notebook",
    gpu: false,
    some: realaddition()
}

obj.name = "Macbook 3 Pro"


