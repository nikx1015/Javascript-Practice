// - Write a function called buildSection that accepts two arguments: `text` and `style`
// - The function should return an HTML component of a section element with whatever text and class (`style`) you pass in. 
// - Go ahead and add some CSS rules to whatever style you pass in so you can see if it worked or not.
// - Call the function and insert your section into the DOM

// function buildSection(text, style){
//     return `<section class=${style}>${text}</section>`
// }

// document.querySelector("#container").innerHTML = buildSection("Nikki", "blue-background");

// const buildSection = function(text, style){
//     return `<section class=${style}>${text}</section>`
// }

// const buildSection = (text, style) =>  `<section class=${style}>${text}</section>`



// function buildStudentComponent(headerName, headerClass, sectionText, sectionClass, imageSrc, imageAlt){
//     const finishedHeader = header(headerName, headerClass)
//     const finishedSection = buildSection(sectionText, sectionClass)
//     const finishedImage = image(imageSrc, imageAlt)
//     return `${finishedHeader}${finishedSection}${finishedImage}`;
// }

// document.querySelector("#container").innerHTML = buildStudentComponent("Nikki", "")

// 1. Build three objects. Each one should represent an employee at the coffee shop.
// 2. Each employee object should have the following properties:
// - a name
// - a startDate
// - a jobTitle
// - a payRate
// - a favoriteDrink
// - an array of drinks they know how to make

const jin = {

    name: "jin",
    startDate: "january 1",
    jobTitle: "barista",
    payRate: 7.00,
    favoriteDrink: "latte",
    drinksLearned: ["latte", "mocha", "americano", "cappacino"]

}


    const loki = {
    name: "loki",
    startDate: "january 1",
    jobTitle: "barista",
    payRate: 7.00,
    favoriteDrink: "latte",
    drinksLearned: ["latte", "mocha", "americano", "cappacino"]

}

const andy = {
    name: "andy",
    startDate: "january 1",
    jobTitle: "barista",
    payRate: 7.00,
    favoriteDrink: "latte",
    drinksLearned: ["latte", "mocha", "americano", "cappacino"],
    makeCoffeeDrink: function(drinkParam){
        console.log(`here's your ${drinkParam}`);
    },
}

andy.makeCoffeeDrink("latte");


    
const coffeeShopStaff = {
    fullTime: [loki],
    partTime: [andy, jin]

}

console.log(coffeeShopStaff);
// 2. Build another object called coffeeShopStaff
// 3. This object should have two properties:
// - a property of fullTime that holds an array of full time staff members
// - a property of partTime that holds an array of part time staff members
// - Put two of your employee objects from steps 1 & 2 into the part time array. Put one of them in the full time array.

// 1. Remember your employee objects from up there? Give one of them a method called makeCoffeDrink
// 2. This method should accept a parameter of drink and return a string of "Here's your [drink]!" 
// 3. Call the method and pass in any drink (string) you want
// 4. Call the method (be sure to catch the returned string in a variable!)
// Bous: If you have time, refactor your method so that it checks to see if the employee knows how to make the drink (i.e. if it's in the array of drinks they know how to make). If they do, you should return the string from step 2. If not, you should return a string that says "No can do!"