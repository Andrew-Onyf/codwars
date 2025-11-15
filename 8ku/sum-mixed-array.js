// Дан массив целых чисел в виде строк и чисел. Верните сумму значений массива,
//     как если бы все они были числами. Верните ответ в виде числа.

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;
//
// describe("Basic tests",() =>{
//     it("Testing for fixed tests", () => {
//         assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
//         assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42);
//         assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41);
//     })
// });


function sumMix(x) {
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        sum += +x[i];
    }
    return sum;
}

console.log(sumMix([5, 3, '2']));