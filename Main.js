// a function that takes an array of numbers and returns the sum of all the numbers
function sumArrayOfNumbers(array){
    // using for loop
    let sum = 0;
    for(let i=0, len = array.length; i<len; i++){
        sum += array[i];
    }
    return sum;
}

let sum = sumArrayOfNumbers([10,5,60,25]);
console.log("The sum of all numbers in the array is: " + sum);
