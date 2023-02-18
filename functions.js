function sayHelloNico() {
  console.log('Hello Nico 💪. Ya era hora de que vinieras por clase.')
}

let result = sayHelloNico();
console.log('Todas las funciones devuelven un valor', result);

function sayHelloDani(){
  console.log('Hello Dani. Te has perdido la kata')
}

sayHelloDani();

function sayHello(name="Anónimo", message=''){
  // if(name === undefined || name.length === 0){
  //   console.log('El nombre es obligatorio');
  // } else {
  //   console.log(`Hello ${name}`);
  // }
  if(typeof name === "string"){
    if(name.length === 0){
      console.log('El nombre es obligatorio');
    } else {
      console.log(`Hello ${name}. ${message}`);
    }
  } else {
    console.log('El nombre es obligatorio y debe ser de tipo texto.');
  }
  
}

sayHello('Nico', 'Ya era hora de que vinieras por clase.', 8);
sayHello('Dani', 'Te has perdido la kata');
sayHello('Pepe');
sayHello(6);
sayHello();

function isValidNumber(num){
  return Number.isNaN(num) === false && typeof num === "number";
}

function multiplyBy(num1=1, num2=1){
  // !Number.isNaN(num)
  if(isValidNumber(num1) && isValidNumber(num2)){
    return num1 * num2;
  }
  return 0;
  console.log('Debajo del return');
}

multiplyBy(2);
let result2 = multiplyBy("", "");
console.log(result2);

// Create a funcion that receive an string and return the number of characters
function getStringLength(str=''){
  return str.length;
}

// Create a funcion that receive a number and return if is even or not
function isEven(num){
  // if(num % 2 === 0){
  //   return true;
  // }
  // return false;
  return num % 2 === 0;
}

// Create a function that accepts 3 numbers as parameters, and returns their sum.
function addThreeNumbers(num1=0, num2=0, num3=0){
  return num1 + num2 + num3;
}

// Create a function named isNameOddOrEven() that accepts a string as a parameter. The function should return whether a received string has an odd or even number of letters. The expected return should be in the following format - string: ’<name> has an even/odd number of letters’.
function isNameOddOrEven(str=''){
  // if(str.length % 2 === 0){
  //   return `${str} has an even number of letters`
  // } 
  // return `${str} has an odd number of letters`
  if(isEven(getStringLength(str))){
    return `${str} has an even number of letters`
  } 
  return `${str} has an odd number of letters`
}

let test = isNameOddOrEven('Diego');
console.log(test);