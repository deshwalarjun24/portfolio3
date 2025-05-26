function moveCharacter() {
    let character = document.querySelector(".character");

    let maxWidth = window.innerWidth - 150;  // Screen width - character width
    let maxHeight = window.innerHeight - 150; // Screen height - character height

    let randomX = Math.floor(Math.random() * maxWidth);
    let randomY = Math.floor(Math.random() * maxHeight);

    character.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// Move every 2 seconds
setInterval(moveCharacter, 2000);

// Move character on scroll
window.addEventListener("scroll", moveCharacter);

