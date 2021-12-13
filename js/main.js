/*Решение задачи.Рассортировать массив*/

a =[17,-1,2,48,4,7,19,22];
let tmp;
for(let i = 0; i < a.length; i++){
    for(let j = i ; j < a.length; j++){
        if(a[j]>a[j+1]){
           tmp = a[j];
           a[j] = a[j+1];
           a[j+1] = tmp; 
        }  
    }
}

console.log(a);