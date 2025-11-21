// Make a program that filters a list of strings and returns a list with only your friends name in it.
//     If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours!
//     Otherwise, you can be sure he's not...
//
// РУССКИЙ
// Создайте программу, которая фильтрует список строк и возвращает список, содержащий только имя вашего друга.
//     Если имя состоит ровно из четырёх букв, можете быть уверены, что это ваш друг!
//     В противном случае будьте уверены, что это не...

// Input = ["Ryan", "Kieran", "Jason", "Yous"]
// Output = ["Ryan", "Yous"]
//
// Input = ["Peter", "Stephen", "Joe"]
// Output = []

const listFrends = ["Ryan", "Kieran", "Jason", "Yous"];

function friend(friends) {
    const myFriends = friends.filter(friends =>  friends.length === 4)
      return myFriends;

}

console.log(friend(listFrends))