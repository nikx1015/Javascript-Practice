const audrey = document.getElementById("audrey")

/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
*/
document.querySelector("#container").addEventListener("scroll", function () {
    /*
        Adjust the width of audrey to be 1/3 the value of
        `window.scrollY`. No lower than 50px, though.
    
    */
   var elem = document.querySelector('#container');   
   // Set the width
   elem.style.width = '33%';
    /*
        Hint: you're allowed to use the .style property in this exercise, even though we generally advice against it becasue it applies inline styles to your DOM (rather than adding and removing classes)

    */


    /*
        Adjust the height of audrey to be 1/4 the value of
        `window.scrollY`. No lower than 100px, though.
    */
})