const button = document.getElementById("soundButton");
const sound = document.getElementById("mySound");

button.addEventListener("click", () => {
    sound.currentTime = 0;
    sound.play();
});
