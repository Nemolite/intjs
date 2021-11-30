/*Область видимости переменных*/

let exam = 10;  // Global

function testFunc() {
	console.log(exam);
}
testFunc();

function testLocalvar(){
	let nwo = 17;

}
testLocalvar();

// console.log(nwo); 

function reTxt(){
	tamar = 100;
}

reTxt();
console.log(tamar);

/*Область видимости переменных в блоках*/
function isThePriceRight(cost) {
	let total = cost + 1;
	if (total > 3) {
		console.log(total);
	} else {
		console.log("Что-то другое");
	}
   }
isThePriceRight(4);


function isThePriceRight(cost) {
	let total = cost + 1;
	if (total > 3) {
	let warning = true;  // var
	console.log(total);
	} else {
		console.log("Что-то другое");
	}
	//console.log(warning);
   }
isThePriceRight(4);



if (3 > 2 ) {
	let er = 100;
}

//console.log(er);

console.log(redf);
var redf = 22;


let foo;
console.log(foo);
foo = "Hello!";

/*Замыкание*/

function testOnFunc(a,b){
	return a + b;
}

let res1 = testOnFunc(2,2);
console.log(res1);


function funGlob() {
	console.log("Glob");
	function funInr() {
		console.log("Inner");
	}
	return funInr;
}

let tempergen = funGlob();
tempergen();


function myPrimer(){
	let timing = Date.now();
	function myPrIn(){
		let razniz = Date.now() - timing;
		console.log(razniz);
	}
	return myPrIn;
}

let selp = myPrimer();

for (let i = 0; i < 1000000; i++) {
	let foo = Math.random() * 10000;
}

selp();


function myPurt(){
	let mert = 27;
	function myIsir(){
		console.log(mert);
	}
	return myIsir;
}

let out2 = myPurt();
out2();


