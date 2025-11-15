// Создайте боевую функцию, которая принимает текущее здоровье игрока и количество полученного урона,
// а затем возвращает новое здоровье игрока. Здоровье не может быть меньше 0.

function combat(health, damage) {
    // Write your code here
    if (health < damage) {
        health = 0;
    } else {
        health = health - damage;
    }
    return health;
}

console.log(combat(50, 20))