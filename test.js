// let users={
//     email: "yashg6142@gmail.com",
//     password: 123456,
//     city: "jabalpur"
// }

// console.log(users.city)

// let userTwo = users; // referrence is getting transfer
// userTwo.city = "nagpur";
// console.log(users.city)

//String
// const name1 = new String("Vevan Gupta");
// console.log(name1[0]);
// console.log(name1.__proto__);



//String interpolation
// const name = "yash gupta";
// const city = "jabalpur";

// console.log("my name is "+ name + " & my city is "+ city);
// console.log(`my name is ${name} $ my city is ${city}`);//modern way to write js

//ES5 var x = 10 
//ES6 let y = 10 & const z = 20

//arrow function
// function add (a, b){
//     console.log(a+b);
    
// }
// add (10, 30)

// const add = (a , b)=> {
//     console.log(a + b)
// }
// add (30, 40)

//this keyword

// function greet(){
//     console.log(this)
// }

// const add =() => {
//     console.log(this)
// }

// greet()
// add()

// with object 

// const data = {
//     name : "yash gupta",
//     city : "jabalpur",
//     message1: function () {
//         console.log(this) // this keyword referring to the current object here
//     },
//     message2:()=>{
//         console.log(this)// whereas here this keyword is referring to the global object window
//     }
// };
// data.message1();
// data.message2();

//map method
const arr1 = [ '','','','']
const str = "hello"
const newarr1 = arr1.map((d, index)=>{
    // console.log(currentValue)
    // console.log(index)
    // if(currentValue>3)
    // return (currentValue)
    // return 0
    return `${str}`  
})
// }).filter((currentValue)=>{
//     return currentValue>8
    
// })
console.log(arr1);
console.log(newarr1);