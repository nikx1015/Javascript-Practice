// const mainHeader = document.querySelector("#main-header");
// console.log(mainHeader);

// mainHeader.classList.add("blue-text");

// const bodyText = document.querySelectorAll(".body-text")
// console.log(bodyText);
// for(let i=0; i < bodyText.length; i++){
//     bodyText[i].innerHTML = "Hello world!"
// }

document.querySelector("#head-one").addEventListener("click", () => {
    event.target.classList.add("blue-background")
})

// function clickOnH2(){
//     console.log("you clicked h2")
// }
// document.querySelector("#head-two").addEventListener("click", clickOnH2{
// })
document.querySelector("#head-three").addEventListener("click", function(){
    console.log("you clicked header 3")
})


document.querySelector("#submit-button").addEventListener("click", () => {
const messageToPrint = document.querySelector("#text-area").value
console.log(messageToPrint)
//     console.log("you clicked the button")
})
// console.log(document.querySelector("#head-three"))


