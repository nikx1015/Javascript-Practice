
document.querySelector("#activate-flight").addEventListener("click", activatePower)
document.querySelector("#activate-mindreading").addEventListener("click", activatePower)
document.querySelector("#activate-xray").addEventListener("click", activatePower)
//   document.querySelector("#flight").classList.remove("disabled");
//   document.querySelector("#flight").classList.add("enabled");
//   console.log(event.target.classList)


// document.querySelector("#activate-mindreading").addEventListener("click", () => {
//     document.querySelector("#mindreading").classList.remove("disabled");
//     document.querySelector("#mindreading").classList.add("enabled");
//     })

// document.querySelector("#activate-xray").addEventListener("click", () => {
//     document.querySelector("#xray").classList.remove("disabled");
//     document.querySelector("#xray").classList.add("enabled");
//    })

function activatePower(event){

    const idOfSection = event.target.id.split("-")[1];
    const sectionToChange = document.querySelector(`#${idOfSection}`)
    sectionToChange.classList.replace("disabled", "enabled")
}

   const allPowers = document.querySelectorAll("section")
   
   for(let i = 0; i < allPowers.length; i++){
       const currentPower = allPowers[i];
       


    document.querySelector("#activate-all").addEventListener("click", () => {
        currentPower.classList.remove("disabled")
        currentPower.classList.add("enabled")
    })

    document.querySelector("#deactivate-all").addEventListener("click", () => {
        currentPower.classList.remove("enabled")
        currentPower.classList.add("disabled")

    })
   }