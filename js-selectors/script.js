// Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"
// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.
// Obtain a reference the element with a class of dashed and remove it.
// Obtain a reference the element with a class of article_footer and add the class of goldenrod it.


const articleHeader = document.querySelector(".article__header");

articleHeader.innerHTML = "Welcome To The Blog";

const allArticleHeaders = document.querySelectorAll("article");
// allArticleHeaders.classList.add("article__header");

for(let i=0; i < allArticleHeaders.length; i++){
    allArticleHeaders[i].classList.add("article__header")
}

const asideText = document.querySelector("aside.dashed");
asideText.classList.remove("dashed");

const articleFooter = document.querySelector(".article__footer");
// articleFooter.classList.remove("article__footer");

articleFooter.classList.add("goldenrod");