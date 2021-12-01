/*Object*/
a = [x=>x+x,2];
console.log(a[0](a[1]));

points = [
	{x:2,y:3},
	{x:4,y:7}
]

console.log(points);

points.dist = function() {
	let p1 = this[0];
	console.log(p1);
	let p2 = this[1];
	console.log(p2);
	let a = p1.x - p2.x;
	let b = p2.y - p2.y;
	return Math.sqrt(a*a + b*b);

}
console.log(points.dist());

let [x,y] = [1,2]
console.log(x);
console.log(y);

let [x1, ...y1] = [1,2,3,4];
console.log(x1);
console.log(y1);

let [x2, ...y2] = "Hello";
console.log(x2);
console.log(y2);
/*=============*/
let obj = new Object(
	
)
console.log(typeof obj);
console.log(obj);


