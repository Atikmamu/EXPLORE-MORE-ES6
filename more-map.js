// map ...> map prottek ta upadan ar opor kichu akta kaj kora ar result ta ka arakta array baniye return kora 


const numbers = [12, 10, 8, 15, 7];

const doubled = numbers.map(num => num * 2)
// console.log(doubled);
const fiveBonus = numbers.map(num => num + 5);
// console.log(fiveBonus);

const halves = numbers.map(num => num/2);
// console.log(halves);

const friends = ['Tom', 'John', 'Micheal', 'Oliver'];

const lengths = friends.map(frend => frend.length);
// console.log(lengths);

const firstLetter = friends.map(friend => friend[0]);
console.log(firstLetter);