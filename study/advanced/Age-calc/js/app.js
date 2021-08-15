let yearb = document.getElementById("yearb");
let monthb = document.getElementById("monthb");
let dateb = document.getElementById("dateb");
let submit = document.getElementById("submit");
let date = new Date();
let daym = date.getDate();
let dayw = date.getDay();
let month = date.getMonth();
let year = date.getFullYear();
let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let days = 0;
let dayss = 0;
let past_days = 0;
let total_dayas = 0;
let years_dif = 0;
let month_dif = 0;
let day_dif = 0;
let age = 0;
let total = 0;
let daysss = 0;
let reminder = 0;
let output = document.getElementById("output");
let container = document.getElementById("container");
container.style.height = screen.height + "px";

submit.addEventListener("click", () => {
    daysss = 0;
    past_days = 0;
    days = 0;
    dayss = 0;
    reminder = 0;

    years_dif = parseInt(year) - parseInt(yearb.value);

    for (let x = 1; x < years_dif; x++) {
        total = parseInt(yearb.value) + x;
        if (total % 4 == 0) {

            past_days += 366;
        } else {

            past_days += 365;
        }


    }
    for (let c = 0; c < parseInt(month); c++) {
        if (parseInt(year) % 4 == 0) {
            months[1] = 29;
        } else {
            month[1] = 28;
        }
        days += months[c];
    }
    days += parseInt(daym);
    for (let t = 0; t < parseInt(monthb.value) - 1; t++) {
        if (parseInt(yearb.value) % 4 == 0) {
            months[1] = 29;
        } else {
            month[1] = 28;
        }
        dayss += months[t];
    }
    dayss += parseInt(dateb.value);
    if (parseInt(yearb.value) % 4 == 0) {
        reminder = 366 - dayss;
    } else {
        reminder = 365 - dayss;
    }
    if (parseInt(month) + 1 >= parseInt(monthb.value)) {
        if (parseInt(daym) >= parseInt(dateb.value)) {
            month_dif = (parseInt(month) + 1) - parseInt(monthb.value);
            if (month_dif < 0) {
                month_dif += 12;
                years_dif -= 1;
            }
            day_dif = parseInt(daym) - parseInt(dateb.value);
        } else {
            month_dif = (parseInt(month) + 1) - parseInt(monthb.value) - 1;
            if (month_dif < 0) {
                month_dif += 12;
                years_dif -= 1;
            }
            day_dif = 30 - (parseInt(dateb.value) - parseInt(daym));
        }
    } else {
        years_dif -= 1;
        month_dif = 12 - (parseInt(monthb.value) - (parseInt(month) + 1));
        if (parseInt(daym) >= parseInt(dateb.value)) {

            day_dif = parseInt(daym) - parseInt(dateb.value);
        } else {
            month_dif -= 1;
            day_dif = 30 - (parseInt(dateb.value) - parseInt(daym));
        }
    }
    daysss = past_days + reminder + days;

    age = years_dif + " Years<br>" + month_dif + " Months<br>" + day_dif + " Days";
    if (parseInt(year) < parseInt(yearb.value)) {
        age = '<span style="color:red;">The Date In Future</span>';
    } else {
        if (parseInt(year) == parseInt(yearb.value) && (parseInt(month) + 1) < parseInt(monthb.value)) {
            age = '<span style="color:red;">The Date In Future</span>';
        } else {
            if ((parseInt(month) + 1) == parseInt(monthb.value) && parseInt(daym) < parseInt(dateb.value)) {
                age = '<span style="color:red;">The Date In Future</span>';
            }

        }
    }
    output.innerHTML = age;
    bornDay();
});

