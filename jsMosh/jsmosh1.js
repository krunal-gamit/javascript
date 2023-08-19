let person = {
    name: "Krooks",
    age: 24
};

person.name = 'geek';

let newName = 'name';

person[newName] = 'Krunal';

console.log(person);

let selectedColor = ['red','blue'];
selectedColor[2] = 'green';
console.log(selectedColor)