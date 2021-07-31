class SlideSshow {
    constructor() {
        this.myfiles = document.getElementById("myfiles");
        this.photo = document.getElementById("photo");
        this.browse = document.getElementById("browse");

        browse.addEventListener("click", () => {
            this.photo.src = "";
            this.myfiles.click();
        });
        this.c = 0;

        myfiles.addEventListener("change", () => {

            this.photo.src = "photos/" + myfiles.files[this.c].name;
            setInterval(() => {
                this.play_slide();
                this.photo.src = "photos/" + myfiles.files[this.c].name;
            }, 4000);
        });
    }
    play_slide() {
        if (this.c < this.myfiles.files.length - 1) {
            this.c++;
        } else {
            this.c = 0;
        }
    }
}
onload = new SlideSshow();