// Your task is to make a function that can take any non-negative integer
// as an argument and return it with its digits in descending order. Essentially,
//     rearrange the digits to create the highest possible number.
//
//     РУССКИЙ
// Ваша задача — создать функцию, которая принимает в качестве аргумента любое неотрицательное целое
// число и возвращает его с цифрами в порядке убывания. По сути, нужно переставить цифры так,
//     чтобы получить максимально возможное число.

// Examples:
//     Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321

const n = 1023;

function descendingOrder(n) {
    const strArr = +String(n).split('').sort((a,b) => b-a).join('');
// const numArr = +strArr.join('')
return strArr
}

console.log(descendingOrder(n))

// return parseInt(String(n).split('').sort().reverse().join(''))