console.log("javascript works");

// var myName = "dwayne";
// console.log(myName);

// var myAge = 47;
// console.log(myAge);

var sum = 2 + 2 + 2;
console.log("this should be 6", sum);

var mathProblem = "2 + 2 + 2"
console.log("this is a math problem", mathProblem);

// var likesPizza = true;
// console.log("does dwayne like pizza?", likesPizza);
// no quotes are boolean or number

let likesPizza = true;

let myAge = 47;
myAge = "cheese";
console.log(myAge);

// let can be reassigned, const cannot be reassigned

// const name = "Dwayne";


var myName = "Nikki";
let numberOfPets = 8;
const socialSecurity = "333 33 3333";

const bio = `${myName} has ${numberOfPets} pets and their social security number is ${socialSecurity}.`;
console.log(bio);

const petNames = ["Luna", "Odin", "Nyx", "Nox", "Daisy", "Loki", "Jin", "Andy"];
for (let i = 0; i < petNames.length; i++) {
    console.log("pet's name is", petNames[i]);
}

const favFoods = ["noodles", "pizza", "tacos", "pasta", "bacon", "cookies"];
for (let i = 0; i < favFoods.length; i++) {
    if (favFoods[i] === "noodles" || favFoods[i] === "Noodles" || favFoods[i] === "pasta"){
        console.log("heck yeah!", favFoods[i]);
    }
    console.log("fav food is", favFoods[i]);
}

const mustang = {
    car: "Mustang",
    make: "Ford",
    color: "red",
    year: "2015"
}

const animalNames = ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", "Sharky"]

const Debby = {
    name: "Debby",
    relationship: "mother",
    DOB: "6/5/69"
}

const Cody = {
    name: "Cody",
    relationship: "brother",
    DOB: "10/25/95"
}

const Ernie = {
    name: "Ernie",
    relationship: "step dad",
    DOB: "1/9/62"
}

const Roger = {
    name: "Roger",
    relationship: "spouse",
    DOB: "1/24/87"
}

const familyMember = [Debby, Cody, Ernie, Roger]

const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}

console.log(wardrobe.height);
console.log(wardrobe.manufacturer);
console.log(wardrobe.contents);
console.log(wardrobe.depth);
console.log(wardrobe.width);

const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

const dimensions = `${empireStateBuilding.height} by ${empireStateBuilding.eastWestLength} by ${empireStateBuilding.northSouthLength}`;
console.log(dimensions);

const keyForStories = "stories";
const keyForAddress = "address";
const keyForOwner = "owner";

console.log(empireStateBuilding[keyForStories]);

console.log(empireStateBuilding.stories);
console.log(empireStateBuilding.height);
console.log(empireStateBuilding.squareFeet);
console.log(empireStateBuilding.eastWestLength);
console.log(empireStateBuilding.northSouthLength);

// console.log(empireStateBuilding["height"]);
// console.log(empireStateBuilding["address"]);
// console.log(empireStateBuilding["squareFeet"]);
// console.log(empireStateBuilding["constructionDate"]);

console.log(empireStateBuilding["address"]);
console.log(empireStateBuilding["constructionDate"]);
console.log(empireStateBuilding["owner"]);
console.log(empireStateBuilding["cost"]);


const newForce = {
    founded: 2018,
    instructors: {
        fullTime: ["Jordan", "Josh", "Kim"],
    },
    careerAdvisors: ["Natalie", "Kinsey"],
    address: "1000 5th Ave, Huntington, WV 25701"
}

console.log(newForce.instructors.fullTime);

// for(let i = 0; i < newForce.instructors.fullTime.length; i++)

const instructorArray = newForce.instructors.fullTime;
for(let i = 0; i < instructorArray.length; i++){
    console.log(instructorArray[i]);
}
console.log(newForce["instructors"]);
console.log(newForce["careerAdvisors"]);
console.log(newForce.careerAdvisors);