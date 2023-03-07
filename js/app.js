window.onload = function() {
    const shareIcon = document.querySelector(".share-circle")
    const shareMessage = document.querySelector(".share-message")
    //event listner to listen for a hover then display the message
    shareIcon.addEventListener("mouseover", () => {
        shareMessage.classList.remove("hidden")
    })
    shareIcon.addEventListener("mouseout", () => {
        shareMessage.classList.add("hidden")
    })
}