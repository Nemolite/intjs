/*Array*/
a = [1,2,3];
console.log(a.length);

let b = a;
console.log(b);

b[0] = 13;
console.log(b);
console.log(a);

let c= Array.from(a);
console.log(c);

c[0] = 31;
console.log(b);
console.log(a);
console.log(c);

/*
let d= Array.from(a, (x)=>{
return x+2;
});
console.log(d);
*/

let less = [..."Hello,World"];

for (let n of less){
	console.log(n);
}

/* map, forEach,*/
