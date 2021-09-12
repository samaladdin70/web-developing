let speed = document.getElementById("speed");
let pointer = document.getElementById("pointer");
speed.addEventListener("change", () => {
    player.playbackRate = speed.value / 100;
});
pointer.addEventListener("click", () => {
    speed.value = 100;
    player.playbackRate = speed.value / 100;
});