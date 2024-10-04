// 1
const clients = ['Nazar', 'Zahar', 'Alex', 'Anton'];
console.log(clients.join(' '));
// 2
const cards = ["cards-1", "cards-2", "cards-3", "cards-4", "cards-5"];
const cardToRemove = "cards-3";
const deleteCards =cards.splice(cards.indexOf(cardToRemove),1);
console.log(deleteCards)
console.log(cards)
cards.splice(5, 0, "cards-6");
console.log(cards);
const cardToUpdate = "cards-4";
const updateCards =cards.splice(cards.indexOf(cardToUpdate),1, "cards-4++");
console.log(cards);
