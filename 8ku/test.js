// Ваша задача — добавить новое свойство usersAnswer к каждому объекту массива questions.
//     Значение usersAnswer должно быть равно NULL.
//     Решение должно работать для массива любой длины.

// For example:
//
//     var questions = [{
//         question: "What's the currency of the USA?",
//         choices: ["US dollar", "Ruble", "Horses", "Gold"],
//         corAnswer: 0
//     }, {
//         question: "Where was the American Declaration of Independence signed?",
//         choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
//         corAnswer: 0
//     }];
// After adding the property the result should be:
//
//     var questions = [{
//         question: "What's the currency of the USA?",
//         choices: ["US dollar", "Ruble", "Horses", "Gold"],
//         corAnswer: 0,
//         usersAnswer: null
//     }, {
//         question: "Where was the American Declaration of Independence signed?",
//         choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],
//         corAnswer: 0,
//         usersAnswer: null
//     }];

let questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];

function getNewProperty(arr) {
    arr.forEach(element => element.usersAnswer = null)
    // for (let i = 0; i < arr.length; i++) {
    //     arr[i].usersAnswer = null;
    // }
    return arr
}

console.log(getNewProperty(questions))