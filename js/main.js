/*Array методы*/

let arr = new Array(1,2,3,4,5);
console.log(arr);

console.log(arr.length);

let sum = 0;
arr.forEach(value => {sum+=value} );
console.log(sum);

let sum1 = 0;

let func = function(v,i,a){
return a[i] = v + 1;
}

console.log(func);

arr.forEach(func);
console.log(arr);

/*String методы*/

let str = "Урок программирования очень сложный";

let arrStr = str.split(" ");
console.log(arrStr);

/*Нахождение всех буков о и запись их индексов в массив*/
let resArr = [];

for (let i=j=0;i<str.length;i++){
    if("о"==str[i]) {
        resArr[j]=i;  
        j++;
    } 
} 

console.log(resArr);

console.log("-------------");
let resArr2 = [];
for (let i=0;i<str.length;i++){
    if("о"==str[i]) resArr2.push(i);   
} 

console.log(resArr2);

[...str].forEach(
    function(v,i,str){
        console.log(i,"=", v); 
    });

/*Преобразование массива в строку*/    
console.log("Преобразование массива в строку");
let myArr2 = new Array(10);
myArr2.fill(3);

console.log(myArr2);
let myStr2 =myArr2.join("");
console.log(myStr2);
console.log(typeof myStr2);

/*Преобразование строку массив*/    
console.log("Преобразование строку массив");
let preStrToArr = myStr2.split("");
console.log(preStrToArr);
console.log(typeof preStrToArr);
console.log(Array.isArray(preStrToArr));

console.log("-------------");
let k=0;
let newArrObj = [];
while (k<preStrToArr.length){
    console.log(preStrToArr[k]);
    newArrObj[k] = preStrToArr[k];
    k++;
}
console.log(newArrObj);
console.log(typeof newArrObj);
console.log(Array.isArray(newArrObj));

let w = [1,2,3];
console.log(typeof w);

/*методы примеры работ*/
let str3 = "Урок программирования очень сложный";
let myArr3 =str3.split("");
console.log(Array.isArray(myArr3));

let f = function(element) {
    return "о"==element;        
}

let res3 = myArr3.filter(f);
console.log(res3);

/*методы второй прмер*/
console.log("методы второй прмер");
console.log(str3.split("").filter(e=> "о"==e));

/*методы find  и findIndex*/
let str4 = "Урок программирования очень сложный, поэтому нужно приложить огромные усилия чтобы понять основы";
console.log(str4.split("").find(e=>"о"==e));
console.log(str4.split("").findIndex(e=>"о"==e));

/*методы every  и some*/
console.log("методы every  и some");
let myArr7 = new Array(1,2,3,4,5);
console.log(myArr7);

function everyEx(e,i,a){
    return e < 6; // >3 - false
}

let myRes7 = myArr7.every(everyEx);
console.log(myRes7);

function everySo(e,i,a){
    return e > 3; // 
}

let myRes8 = myArr7.some(everySo);
console.log(myRes8);

/*Этюды*/
console.log("/*Этюды*/");

let myArr9 = Array.of(7);
console.log(myArr9);
myArr9[1] = 13;
myArr9[2] = 16;
myArr9.push(22);
myArr9.push(13);

console.log(myArr9);

myArr9.pop();
console.log(myArr9);

let myArr10 = Array.from('программированиe');
console.log(myArr10);

/*falt и faltMap*/
console.log("falt и faltMap");

let mArr11 = [
    [
        1,2,3
    ],
    4,5
]

console.log(mArr11);
console.log(mArr11.flat());

let mArr12 = [
    [
        1,2,3,
        [
            4,5
        ]
    ],
    6,7,[
        8,9
    ]
]

console.log(mArr12);
console.log(mArr12.flat());
console.log(mArr12.flat(1));
console.log(mArr12.flat(2));

console.log("faltMap из документации");
let arr22 = [1, 2, 3, 4];

let arr221 = arr22.map(x => [x * 2]);
console.log(arr221);
// [[2], [4], [6], [8]]

let arr222 = arr22.flatMap(x => [x * 2]);
console.log(arr222);
// [2, 4, 6, 8]

// выравнивается только один уровень
let arr223 = arr22.flatMap(x => [[x * 2]]);
console.log(arr223);
// [[2], [4], [6], [8]]

console.log("copyWithin");

let n22 = [1, 2, 3, 4, 5].copyWithin(2);
console.log(n22);

