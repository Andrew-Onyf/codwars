// You are going to be given a non-empty string. Your job is to return the middle
// character(s) of the string.
//
// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
// Examples:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"


function getMiddle(s) {
    const middlePoint = Math.floor(s.length / 2);
    let middle = '';
    if (s.length % 2 === 0) {
        middle = s.substring(middlePoint - 1, middlePoint + 1)
    } else {
        middle = s.substring(middlePoint, middlePoint + 1)
    }
    return middle;
}

console.log(getMiddle("testing"))
