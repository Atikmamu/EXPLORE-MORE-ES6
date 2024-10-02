// filter selects elements based on a condition and returns an array with 
// the elements that fulfilled the condition.

// shorto jara jara fulfil korba sobaira diba .... ar jode kaw na mila empty [] array dibe ...
// ar sob ghul jode mila tahola akta array baniye dibe .. filter sob somoi akta array return korba 
// jata jata mathing korba seita seita array ar moddhe thakbe 

const players = [65, 67, 75, 72, 55, 59]
// const selected = players.filter(p => p > 70);
// const selected = players.filter(p => p > 80);
// const selected = players.filter(p => p > 50);
// const selected = players.filter(p => p % 2 === 1);

// console.log(selected);

const friends = ['Tom', 'John', 'Micheal', 'Oliver', 'Tim', 'Joshna'];
// const oddFriends = friends.filter(friend => friend.length > 4);
const oddFriends = friends.filter(friend => friend.length % 2 === 1);
console.log(oddFriends);