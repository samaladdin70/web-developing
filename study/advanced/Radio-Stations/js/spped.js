let speed = document.getElementById("speed");
speed.addEventListener("change", () => {
    player.playbackRate = speed.value / 100;
});