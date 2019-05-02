// ############### Arrays 

// Creating arrays - recomended
const numbersArray = [21,2,53,4,45];

// Arrays constructor
const numbersArrays2 = new Array(22,33,4,4,552,2341);

const fruitArray = ['Apple', 'Banana', 'Orange', 'Pear'];

const mixedArray = [22, 'hello', null, undefined, {a:1, b:2}, new Date()];
            console.log(mixedArray);

let valArray;
            console.log(valArray);
            console.log(numbersArray);

// Checking array length - same as with string
console.log(mixedArray.length);

// check if something is a array
valArray = Array.isArray(mixedArray);
console.log(valArray);

// getting single value
valArray = mixedArray[4];
console.log(valArray);

// Inserting into array
numbersArray[2] = 'test number 100';
            // arrays are mutable, we can change individual values
console.log(numbersArray);

// Finding index of a value
valArray = numbersArray.indexOf('test number 100');
console.log(valArray);

// Mutating arrays
    // adding into array - end of array
numbersArray.push('pushed on the end');
console.log(numbersArray);

    // ading to the front
numbersArray.unshift('add to the beggining');
console.log(numbersArray);