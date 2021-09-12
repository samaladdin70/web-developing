


function playing() {
    player.addEventListener("play", () => {
        isplayed = true;
        play.src = "./img/pause.png";
    });

    player.addEventListener("pause", () => {
        //if (player.paused == false) {} No need
        isplayed = false;
        play.src = "./img/play.png";
    });

    play.addEventListener("click", () => {
        if (isplayed == false) {
            player.play();
            isplayed = true;
            play.src = "./img/pause.png";
        } else if (isplayed == true) {
            player.pause();
            isplayed = false;
            play.src = "./img/play.png";
        }
    });
}