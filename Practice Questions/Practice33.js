// let arr = [1, 2, 3, 4, 5];
// let avg = () => {
//     let total = 0;
//     for ( let i=0; i<arr.length; i++){
//         arr[i]= arr[i]**2;
//         total += arr[i];
//     }
//     let arrAvg = total/arr.length;
//     console.log(arrAvg);
// };
    


// let arr = [1, 2, 3, 4, 5];
// let newarr = arr.map( (ele) => ele+5);



// let arr = ["a", "b", "c"];
// console.log(arr.map( (arr) => arr.toUpperCase()))


// let doubleAndReturnArgs = (arr, ...arguments) => {
//     console.log(arr);
//     return arguments.map((arg) => arg*2);
// }

let obj1 = {
    name : "Falguni",
    age : 19
}
let obj2 = {
    name : "Falguni",
    age : 19
}
    
let mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})


