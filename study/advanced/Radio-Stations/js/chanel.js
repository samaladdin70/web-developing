let player = document.getElementById("player");
let back = document.getElementById("back");
let play = document.getElementById("play");
let next = document.getElementById("next");
let title = document.getElementById("title");
let main = document.getElementById("main");
main.style.height = screen.height + "px";
let label = ["راديو مصر", "ميجا اف ام", "راديو 9090", "نجوم اف ام", "قرءان كريم الجزائر", "اذاعة قرءان كريم", "الشبكة الكلاسيكية", "موسيقى منوعة", "Blues and Jazz", "Easy top Radio", "internet cafe Radio"];
let channel = ["https://live.radiomasr.net/RADIOMASR", "http://nebula.shoutca.st:8211/;stream.mp3", "https://9090streaming.mobtada.com/9090FMEGYPT", "https://ice1.securenetsystems.net/DEMOSTN?playSessionID=13A185D6-B3D2-4D50-B83EDCD803195E40", "https://coran.ice.infomaniak.ch/coran.aac", "http://www.quran-radio.org:8080/;stream.mp3", "http://wpr-ice.streamguys.net/wpr-hd2-mp3-96", "https://wpr-ice.streamguys1.com/wpr-music-aac-56", "http://us3.internet-radio.com:8342/stream?type=http&nocache=3", "http://uk5.internet-radio.com:8237/stream?type=http&nocache=924", "http://us2.internet-radio.com:8443/stream?type=http&nocache=216938"];
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
let isplayed = false;

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
