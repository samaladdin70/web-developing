function bornDay() {
    var weekCode = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
    var monthCode = [0, 3, 3, 6, 1, 4, 6, 2, 5, 0, 3, 5];
    var centuryCode = [6, 4, 2, 0];
    var _day = parseInt(dateb.value);
    var _month = parseInt(monthb.value) - 1;
    var _year = yearb.value;
    var _year2 = parseInt(_year.slice(-2));
    var _century2 = parseInt(_year.slice(0, 2)) % 4;
    var _yearQuot = parseInt(_year2 / 4);
    var codesAdd = _day + monthCode[_month] + centuryCode[_century2] + _year2 + _yearQuot;
    var _weekCode = codesAdd % 7;
    if (parseInt(_year) % 4 == 0 && (_month == 1 || _month == 2)) {
        _weekCode -= 1;
    }
    var weekDay = weekCode[_weekCode];
    output.innerHTML += "<h2>" + weekDay + "</h2>";
}