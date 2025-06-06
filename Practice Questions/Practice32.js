// let arrayAverage = () => {
//     let total = 0;
//     for (let num of arr){
//         total += num;
//     }
//     return total/arr.length;
// };

// let arr= [1, 2, 3, 4, 5];
// console.log(arrayAverage(arr));

// let isEven = (num) => {
//     if(num%2== 0){
//         console.log("is even");
//     } else{
//         console.log("is not even");
//     };
// };
// console.log(isEven(2));

// const object = {
//     message:'Hello,World!',

//     logMessage(){
//         console.log(this.message);
//     }
// };

// setTimeout(object.logMessage,1000);

let length = 4;
function callback() {
    console.log(this.length);
};
const object= {
    length:5,
    method(callback){
        callback();
    },
};
object.method( callback,1,2);