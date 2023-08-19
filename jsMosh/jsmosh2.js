//factory function
function createCircle(radius){
    return {
        radius,
        draw : function(){
            console.log('draw');
        }
    };
}

const circle = createCircle(1);


//Constructor Function
function Circle(radius){
    this.radius = radius,
    this.draw = function() {
        console.log('draw');
    }
}

const another = new Circle(1);


//methods

Circle.call({}, 1);
Circle.apply({}, [1,2,3]);




//functions are objects in javaScript

const Circle1 = new Function('radius', `
    this.radius = radius,
    this.draw = function() {
        console.log('draw123');
    }
`);

const Ci = new Circle1(1);


//types 

let x= {
    valu:3
};
let y = {...x};

x.valu = 55;



//Constructor Function
function Circlee(radius){
    this.radius = radius,
    this.draw = function() {
        console.log('draw');
    }
}

const anotherr = new Circle(1);

anotherr.location = { x:1, y:1};

//another way

anotherr['loc'] = {x:1};


//delete anotherr.loc;

//delete anotherr['loc'];


//for (let key in anotherr){
  //  console.log(key, anotherr[key]);
//}


const keys = Object.keys(anotherr);
console.log(keys);

if ('radius' in anotherr){
    console.log('circle has radius');
}