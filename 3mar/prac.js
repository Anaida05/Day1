// 1. WAP to find Second largest element in an array : arr[] = [12, 35, 1, 10, 34, 1, 35], without
// sorting, without using any built-in methods and without deleting duplicate elements. What will be
// the time complexity?

let a = [12, 35, 1, 10, 34, 1, 35];
const secLargest=(a)=>{
let first = a[0];
let second;
for(let i = 0;i < a.length;i++){
    if(a[i] > first){
        second = first;
        first = a[i];
    }
    else if(a[i]< first && a[i]>second){
        second = a[i]
    }
}
return second
}
console.log(secLargest(a))