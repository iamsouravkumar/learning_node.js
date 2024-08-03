const app = require('./app')

// console.log('sourav');

// let a = 10;
// let b = 20;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);

//triple === matches the value and the type.
// let x = 20;
// if(x===20){
//     console.log('matched')
// }


//double == matches the value not the type.

// let y = '20';
// if(y==20){
//     console.log('matched')
// }

// for(i=0;i<=10;i++){
//     console.log(i);
// }

 let arr = [10,20,30,40,50,10,10,50,20];
// console.log(arr);
// console.log(arr[2])

// console.log(app)
 let r = arr.filter((item)=>{
    return item>40
 })
 console.log(r);