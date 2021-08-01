let label = document.getElementById("label");
let order = document.getElementById("order");
let t = 3000;
let endtime;
class Timming {
    constructor() {
        this.time_out();
        label.addEventListener("click", () => {
            if (t == 0) {
                clearTimeout(endtime);
            } else {
                label.innerHTML = "";
                this.time_out();
            }
        });
        order.addEventListener("click", () => {
            this._clear();
        });
    }
    time_out() {
        endtime = setTimeout(myFunction, t);
    }
    _clear() {
        t = 0; // without clearTimeout(endtime);
    }
}
onload = new Timming;
function myFunction() {
    label.innerHTML = "Hello World!";
}