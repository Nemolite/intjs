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
alert(foo);
foo = "Hello!";


