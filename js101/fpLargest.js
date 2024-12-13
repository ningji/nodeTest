let cart = [
  { name: "Soda", price: 3.12 },
  { name: "Margarita", price: 12.99 },
  { name: "Beer", price: 6.50 }
];

let mostExpensiveItem = cart.reduce((acc, next) => acc.price > next.price ? acc : next);

console.log(mostExpensiveItem);
