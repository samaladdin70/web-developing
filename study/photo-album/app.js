let myfiles = document.getElementById("myfiles");
let photo = document.getElementById("photo");
let browse = document.getElementById("browse");

browse.addEventListener("click", () => {
    photo.src = "";
    myfiles.click();
});
let c = 0;

myfiles.addEventListener("change", () => {
    photo.src = "photos/" + myfiles.files[c].name;
    setInterval(() => {
        play_slide();
        photo.src = "photos/" + myfiles.files[c].name;
    }, 4000);
});

function play_slide() {
    if (c < myfiles.files.length - 1) {
        c++;
    } else {
        c = 0;
    }
}
