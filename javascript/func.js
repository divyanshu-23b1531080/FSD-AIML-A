// function sum(a,b){
//     return a+b;
// }
var x=10;
const sum=(a,b)=>a+b; //arrow funtion
(function f1(){ //two function used
    console.log(`hello ${x}`);
        console.log(`hello sum is ${sum(10,20)}`);

})();
console.log("sum"+"="+sum(10,20));