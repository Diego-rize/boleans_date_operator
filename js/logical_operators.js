//&& - AND o Conjujacion logica
const check = 4 > 3 && 10 > 5 //True - True
const check1 = 4 > 3 && 10 < 5 // True && False - False
const check2 = 4 < 3 && 10 < 5 //False

// || - OR disyuncion Logica
const check4 = 4 > 3 || 10 > 5 // True
const check5 = 4 > 3 || 10 < 5 // true
const chek6 = 4 < 3 || 10 < 10 // False


// ! - NOT
let check7 = 4 > 3
let check8 = !(4>3)//False
let isLigthOn = true
let isLigthOff = isLigthOn 
let isMarried = !false

//Increment Operators

//Pre-Incremento

let count = 0
console.log(++count) 
console.log(count)//1

// Post-Incremento

let count1 = 0
console.log(count++) 
console.log(count1)//1

//Decrement operators

//Predecremento
let count2 = 0
console.log(--count) 
console.log(count2)//-1

//Post-Decremento
let count3 = 0
console.log(count--) 
console.log(count)//-1

//Ternary Operators

let firstCheck = false,
secondCheck = false,
access = firstCheck
? "Acceso Denegado"
:secondCheck
?"Acceso denegado"
:"Acceso Permitido";

console.log(access) //acceso permitido



let isRaining = true
isRaining
? console.log('You need a rain coat')
:console.log('No need a rain coat')

isRaining = false
? console.log('You need a rain coat')
:console.log('No need a rain coat')