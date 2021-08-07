var clockk = document.getElementById("clockId");
var dateId = document.getElementById("dateId");
var backcolorr = document.getElementById("innerId");
var color = document.getElementById("colorId");
var system24 = document.getElementById("system24");
var system12 = document.getElementById("system12");
var week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function clock() {
    var date = new Date();
    // let day = ("0" + date.getHours()).slice(-2); لضمان ان تكون خانتين دائما
    var _Hours = date.getHours();
    if (system12.checked == true) {
        if (parseInt(_Hours) > 12) {
            _Hours = parseInt(_Hours) % 12;
            clockk.innerHTML = ("0" + _Hours).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2) + ":" + ("0" + date.getSeconds()).slice(-2) + '<sub style="font-size:14px; font-weight:normal; font-family:arial;" ><i> pm</i></sub>';
        } else if (parseInt(_Hours) == 12) {
            clockk.innerHTML = ("0" + _Hours).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2) + ":" + ("0" + date.getSeconds()).slice(-2) + '<sub style="font-size:14px; font-weight:normal; font-family:arial;"><i> pm</i></sub>';
        } else if (parseInt(_Hours) == 0) {
            _Hours = "12";
            clockk.innerHTML = ("0" + _Hours).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2) + ":" + ("0" + date.getSeconds()).slice(-2) + '<sub style="font-size:14px; font-weight:normal; font-family:arial;"><i> am</i></sub>';
        } else {
            clockk.innerHTML = ("0" + _Hours).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2) + ":" + ("0" + date.getSeconds()).slice(-2) + '<sub style="font-size:14px; font-weight:normal; font-family:arial;"><i> am</i></sub>';
        }

    } else {
        clockk.innerHTML = ("0" + _Hours).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2) + ":" + ("0" + date.getSeconds()).slice(-2);
    }

    dateId.innerHTML = date.getDate() + "-" + parseInt(date.getMonth() + 1) + "-" + date.getFullYear() + ' &nbsp <span style="color: orange; font-family:arial; font-weight:bold; font-variant-caps: unicase;">' + week[parseInt(date.getDay())] + '</span>';
    backcolorr.style.backgroundColor = localStorage.getItem("CLOCKBACK");
}

setInterval(clock, 100);
onload = clock();

function backcolor() {
    localStorage.setItem("CLOCKBACK", color.value);
    backcolorr.style.backgroundColor = color.value;
}
