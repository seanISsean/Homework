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
  console.log(
    `one ${size} ${crust} crust pizza with ${toppings} ... coming up!`
  );
}

getPizzaOrder("large", "thin", "bacon", "pepperoni");

function preparePizza(size, crust, pepperoni, bacon, sausage) {
  console.log("...pizza size...");

  return{
    size: large[0],
    crust: thin[1],
    toppings: bacon, pepperoni, sausage [3]
  }
}
preparePizza(["large", "thin", "bacon", ["great thin crust", "pizza"]])

function servePizza(pizza) {
  let list = "";

  for(let topping of pizza.toppings) {
    list += `${topping}, `;
  }
  let output = `Order up! Here's your ${pizza.size} ${pizza.crust} crust pizza with ${list} ... Enjoy!`;

  console.log(output);

  return pizza;
}

servePizza(preparePizza(getPizzaOrder("large", "thin", "bacon", "pepperoni", "sausage")))
