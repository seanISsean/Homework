const numberOfToppings = [
  "cheddar",
  "pepperoni",
  "spinach",
  "mushrooms",
  "olives"
];

function greetCustomer() {
  let greeting = "Welcome, we have four toppings today!";
  for (let topping of numberOfToppings) {
    greeting += `${topping}`;
  }
  console.log(greeting);
}

greetCustomer();

function getPizzaOrder(size, crust, ...toppings) {
  let message =`one ${size} ${crust} crust pizza with `
  for (let topping of toppings) {
    message += `${topping}`
  }
  console.log(message);



  return [size, crust, toppings]
}

let order = getPizzaOrder("large", "thin", "bacon", "pepperoni");

function preparePizza([size, crust, toppings]) {
  console.log("...cooking pizza...");

  return {
    size,
    crust,
    toppings,
  };
}
let cookedPizza = preparePizza(order)

function servePizza(pizza) {
  let orderReady = `orderUp here is your ${pizza.size} ${pizza.crust} crust pizza with `;

  for(let topping of pizza.toppings) {
    orderReady += `${topping}, `;
  }
  
  console.log(`${orderReady} ...enjoy`);

  return pizza;
}

let myPizza = servePizza(preparePizza(getPizzaOrder("large", "thin", "bacon", "pepperoni", "sausage")))
console.log(myPizza)