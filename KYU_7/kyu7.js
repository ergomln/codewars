/*
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.
*/

//SOLUCION 1

// const decimalToBinarie = (a,b) => {
//     let sum = a+b;
//     let res = '';
//     while (sum >=1){
//     res = sum % 2 + res;
//     sum = Math.floor(sum / 2);
// }
// return res
// }

//SOLUCION 2

// function decimalToBinarie (a,b){
//     return (a+b).toSting(2);
// }



/*
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
*/

function solution(s){
    return (s+"_").match(/.{2}/g)||[]
}