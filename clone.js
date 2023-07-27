//This is my first JavaScript code
console.log("Hello World");
let name = "David";
console.log(name);
//Literals in JavaScript
let word = 'Victory';//String Literal
let age = 20;//Numeral Literal
let isApproved = false;//Boolean literal
let firstName = undefined;
let selectedColour = null;

//Objects
let person = {
    name: 'Beth', age: 30
};

//Notation of Objects
//Dot Notation
person.age = 25;

//Bracket notation
person['name'] = 'Mary';
console.log(person);


//Arrays
let selectedItems = ['ball', 'bat'];
selectedItems[2] = 'baseball';
selectedItems[3] = 20;
console.log(selectedItems);

//Functions
function greet(_name){//Inside the bracket is parameters
    console.log('Hello ' + _name);
}

greet('John');
greet('Mark')

function calculate(n){
    return n + n;
}

console.log(calculate(5))

//Concatenation of Strings
let word_1 = 'Fam';
let word_2 = 'ily';
console.log(word_1 + word_2)