// describe("Basic tests", () => {
//     it("Testing for fixed tests", () => {
//         assert.strictEqual(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
//         assert.strictEqual(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
//         assert.strictEqual(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
//         assert.strictEqual(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);
//     })
// })


function arrayPlusArray(arr1, arr2) {
    let sum = 0;
    let allArr = [...arr1, ...arr2];
    for (let i = 0; i < allArr.length; i++) {
        sum += allArr[i];
    }
    return sum; //something went wrong
}

console.log(arrayPlusArray([1, 2], [3, 4, -5]));