/* Функции */
function firstFunc(){
	return 23;
}

console.log(firstFunc());

let firstVar = firstFunc();

console.log(firstVar);

function theSum(a,b){
	let sum = a + b;
	console.log(sum);
}
theSum(2,2);

function theString(a = "Hello",b = "World"){
	let con = a + b;
	return con;
}
console.log("=====");
console.log(theString());
console.log("=====");

function theEmpty(){
let sd;
}
let temp = theEmpty();
console.log(temp);

(function myFunc() {
	console.log(111);
}());

const myArrowFunc = (a,b) => {return a+b};

console.log(myArrowFunc()); //NaN

console.log(myArrowFunc(2,3));

let myNewVarTon = () =>23;
console.log(myNewVarTon());

const elMagic = (a = 2,b = 3) => {
	return a + b;
}

console.log(elMagic());
console.log(elMagic(4,4));
console.log(elMagic("Hello","World"));


