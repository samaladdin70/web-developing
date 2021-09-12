let player = document.getElementById("player");
let back = document.getElementById("back");
let play = document.getElementById("play");
let next = document.getElementById("next");
let title = document.getElementById("title");
let main = document.getElementById("main");
main.style.height = screen.height + "px";
let label = [];
let channel = [];
let url = "http://192.168.1.107/myphp/study/advanced/api-with-php-js/5/Radio-Stations/add-read.php";
fetch("./add-read.php").then(response => response.json()).then(data => {
    // console.log(data);
    data.forEach(element => {
        label.push('<center><div style="width: 30px; height: 30px; box-sizing:border-box; padding:4px; margin-bottom:2px; background-color:aqua; color:black; border:none; border-radius:4px; box-shadow:1px 1px 3px black inset; ">' + (0 + element.id).slice(-2) + "</div></center>" + element.RadioName);
        channel.push(element.RadioUrl);

    });

    let c;
    if (localStorage.getItem("CHANNEL") !== undefined) {
        if (localStorage.getItem("CHANNEL") != null) {
            c = localStorage.getItem("CHANNEL");
        } else {
            c = 0;
        }
    } else {
        c = 0;
    }
    localStorage.setItem("CHANNEL", c);
    if (localStorage.getItem("CHANNEL") != null) {
        c = localStorage.getItem("CHANNEL");
    } else {
        c = 0;
    }
    player.src = channel[c];
    title.innerHTML = label[c];
    var isplayed = false;

    next.addEventListener("click", () => {
        if (c < channel.length - 1) {
            c++;
            localStorage.setItem("CHANNEL", c);
            player.src = channel[c];
            title.innerHTML = label[c];
            if (isplayed == true) {
                player.play();
                isplayed = true;
                play.src = "./img/pause.png";
            }


        } else {
            c = 0;
            localStorage.setItem("CHANNEL", c);
            player.src = channel[c];
            title.innerHTML = label[c];
            if (isplayed == true) {
                player.play();
                isplayed = true;
                play.src = "./img/pause.png";
            }

        }
    });
    back.addEventListener("click", () => {
        if (c <= channel.length - 1 && c != 0) {
            c--;
            localStorage.setItem("CHANNEL", c);
            player.src = channel[c];
            title.innerHTML = label[c];
            if (isplayed == true) {
                player.play();
                isplayed = true;
                play.src = "./img/pause.png";
            }

        } else {
            c = channel.length - 1;
            localStorage.setItem("CHANNEL", c);
            player.src = channel[c];
            title.innerHTML = label[c];
            if (isplayed == true) {
                player.play();
                isplayed = true;
                play.src = "./img/pause.png";
            }

        }
    });

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

}).catch(error => {
    console.log(error);
})


