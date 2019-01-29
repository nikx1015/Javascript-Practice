// Name property with a string value.
// Species property with a string value.
// Nicknames property with an array value. Array contains strings.
// Age property with an integer value

// petObject = {
//     name: "Loki",
//     species: "chinchilla",
//     nicknames: ["little dude", "goodest boy"],
//     age: 3
// }

const restaurant = {
    name: "Bob's Burgers",
    orders: [],
    placeOrder: function (mealParam) {
        console.log(`${mealParam}`);
    },
    trackOrder: function(mealParam) {
        this.orders.push(mealParam);
    },
}

const chickenComboMeal = {
    name: "chicken combo",
    price: 4.99,
}

const burgerComboMeal = {
    name: "burger combo",
    price: 3.99,
}

const chickenNuggetsMeal = {
    name: "nuggets combo",
    price: 4.99,
}


// Place an order

restaurant.placeOrder(chickenComboMeal.name);
restaurant.placeOrder(burgerComboMeal.name);
restaurant.placeOrder(chickenNuggetsMeal.name);


// Invoke the function to return the list of all orders

console.log(restaurant.orders);
// Output all orders to the console using console.table()