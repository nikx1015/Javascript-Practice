document.querySelector("#message").addEventListener("keyup", () => {
    const messageToPrint = document.querySelector("#message").value

    document.querySelector("#article-one").textContent = messageToPrint
})

document.querySelector("#message").addEventListener("keyup", () => {
    const messageToPrint = document.querySelector("#message").value

    document.querySelector("#article-two").textContent = messageToPrint
})