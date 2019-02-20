const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

planets.forEach(planet => {
    document.getElementById("planets").innerHTML += `
    <h3>${planet}</h3>
    `
})
/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
// const purchasingAgents = businesses.map(currentBusiness => currentBusiness.purchasingAgent.nameFirst
// )
/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.



    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
const capitalizedPlanets = planets.map(currentPlanet => currentPlanet.toUpperCase())

console.log(capitalizedPlanets)
/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes

    const purchasingAgents = businesses.map(currentBusiness => currentBusiness.purchasingAgent.nameFirst
)
// .filter(singleName => singleName.startsWith("E"))

console.log(purchasingAgents);

*/

const ePlanets = planets.filter(planet=>planet.includes("e"))
console.log(ePlanets)