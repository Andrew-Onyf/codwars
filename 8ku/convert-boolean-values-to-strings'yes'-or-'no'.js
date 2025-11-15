// Преобразовать логические значения в строки «Да» или «Нет».

// const { assert } = require("chai")
//
// describe("Basic tests", () => {
//     it("Testing for basic tests", () => {
//         assert.strictEqual(boolToWord(true), 'Yes')
//         assert.strictEqual(boolToWord(false), 'No')
//     });
// });


function boolToWord( bool ){
    return bool ? 'Yes' : 'No';
}

console.log(boolToWord(false));