// Write a function that adds a named property to an object.
// t must be possible to set the property to a new value.
// If the property already exists on the object, and error should be thrown.

// Напишите функцию, которая добавляет именованное свойство к объекту.
// Должна быть возможность задать этому свойству новое значение.
// Если свойство уже существует в объекте, должна быть выдана ошибка.

const obj = {
    name: "andrew",
    lol: "poop",
};

function addProperty(obj, prop, value) {
    // Add your code here
    for (const key in obj) {
        if (key === prop) {
            throw new Error('есть такое свойство')
        }
    }
    obj[prop] = value;
    return obj
}

addProperty(obj, 'x', 'x')

console.log(obj);


