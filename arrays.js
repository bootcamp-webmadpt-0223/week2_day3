// Sintax
let array = [1, 2, 4, 63];
array[0] = 32;
array[array.length] = 5;
console.log(array);

// Add elements at last position .push()
array.push(8, 45, "Diego");
console.log('PUSH', array);

// Add elements at the beginning - .unshift()
array.unshift(3);
console.log('Unshift', array);

// Removes the last element - .pop()
let deletedElement = array.pop();
console.log('POP', array, `DELETED ${deletedElement}`);

// Removes the first element - .shift()
array.shift();
console.log('SHIFT', array);

// Removes n elements - .splice(start)
array.splice(array.length - 2, 1);
array.splice(2); // Delete all elements from position 2
console.log('SPLICE', array);

// Iteration - for and .forEach
let numbers = [0, 1, 2, 3, 4, 3, 4, 3, 4, 3];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

let name = 'J0n';
function uppercaseName(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result += str[i].toUpperCase();
  }
  console.log(result);
}

const strings = ['Jon', 'Ayoze', 'Andrés'];
numbers.forEach(function (num) {
  console.log(num);
})
strings.forEach(function (str, index) {
  console.log('Element', str, 'Index:', index);
})

function isEven(num) {
  return num % 2 === 0;
}

numbers.forEach(isEven);
strings.forEach(uppercaseName);

// From String to Array - .split()
console.log(name.split());
console.log(name.split(''));
console.log(name.split('0'));



// Create a function that receive an array of numbers and return the sum of the even ones
function sumOfEvens(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    // sum = sum + numbers[i];
    // if(numbers[i] % 2 === 0){
    //   sum += numbers[i];
    // }
    if (isEven(numbers[i])) {
      sum += numbers[i];
    }
  }
  return sum;
}

function sumOfEvensAdvanced(numbers) {
  let sum = 0;
  numbers.forEach(function (el) {
    if (isEven(el)) {
      sum += el;
    }
  })
  return sum;
}

console.log(sumOfEvens(numbers))
console.log(sumOfEvensAdvanced(numbers))

// Create a function that receive an array of numbers and return the product of the odd ones
function productOfOdds(arrayOfNumbers) {
  if (arrayOfNumbers.length === 0) {
    return 0;
  }

  let result = 1;
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    // isEven(arrayOfNumbers[i] === false)
    if (!isEven(arrayOfNumbers[i])) {
      result *= arrayOfNumbers[i];
    }
  }
  return result;
}

function productOfOddsAdvanced(arrayOfNumbers) {
  if (arrayOfNumbers.length === 0) {
    return 0;
  }

  let result = 1;
  arrayOfNumbers.forEach(function (e) {
    if (!isEven(e)) {
      result *= e;
    }
  })
  return result;
}

console.log('Product', productOfOdds(numbers))

// Create a function that receive an array of strings and return the shorter one
function shorterString(stringsArray) {
  if (stringsArray.length === 0) {
    return '';
  }

  let shorter = stringsArray[0];
  stringsArray.forEach(function (str) {
    if (str.length < shorter.length) {
      shorter = str;
    }
  })

  return shorter;
}

console.log('SHORTER', shorterString(strings));

// Create a function that receive an array of numbers and a number return count the number of times that is included
function getNumberOfTimes(numbers = [], num = 0) {
  if (numbers.length === 0) {
    return 0;
  }

  let result = 0;
  numbers.forEach(function (el) {
    if (el === num) {
      result += 1;
    }
  })
  return result;
}

console.log('Number of times', getNumberOfTimes(numbers, 3));

// Create a function that receive an array of numbers (ages) and print a message with the ones that can go to the disco and the ones that must go home
function canGoToDisco(age){
  if(age >= 18){
    console.log('20€ dos copas');
    console.log('Adelante, disfruta 🔥');
  } else if(age >= 14){
    console.log('Disfruta de la sesión light hasta las 22h');
  } else {
    console.log('No puedes entrar en la discoteca');
  }
}

function saturdayNight(ages){
  ages.forEach(function(age){
    console.log(age);
    canGoToDisco(age);
  })
}

saturdayNight([12, 28, 18, 10, 18, 14, 16]);


// Bonus
// Create a function that receive an string and return the sum of their character's position in the abecedary