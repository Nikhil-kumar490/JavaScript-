let score = "33ac"

// // number to Boolean
// // Boolean to number 
// // number to string

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log( valueInNumber);


// "33" => 33
// "33abc"=> NaN
// true => 1; false=> 0


let isLoggedId= "s"
let booleanIsLoggedIn= Boolean(isLoggedId)
console.log(booleanIsLoggedIn);

// 1 => true; false=> 0
// "" => f
// "nik"=> T


let someNumber= 69
let stringNumber= String(someNumber)
console.log(stringNumber)



//******************** Operation****************************

// for -ve value
let value = 9
let negValue= -value
// console.log(negValue);


// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/2);
// console.log(2%2);


let str1= "nikhil"
let str2= "kumar"
let str3= str1 + str2
console.log(str3);

console.log("1"+2);
console.log(1+"2");
console.log("1"+2+4); // by to premitive
console.log(1+2+"4"); // who come first

console.log(+true);
console.log(+"");

let num1,num2,num3
num1=num2=num3=2+2

let gameCounter =100
// gameCounter++
++gameCounter
console.log(gameCounter);