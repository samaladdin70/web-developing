var myHoppies = ["music", "reading", "sports", "cooding", "programming", "Wing-Chun kung-Fu"];
for (items in myHoppies) {
    console.log(myHoppies[items]);
}

myHoppies.forEach(element => {
    document.write(element + "<br>");

});
document.write("<br><hr><br>");
var list = document.getElementById("list");
myHoppies.forEach(element => {
    list.innerHTML += "<li>" + element + "</li>";
});
var user = { name: "Aladdin", age: 51, country: "Egypt" };
for (items in user) {
    console.log(user[items]);
}

// to transform oject user to array with forEach loop
Object.keys(user).forEach(element => {
    document.write(element + ": " +
        user[element] + "<br>");
});
document.write("<br><hr><br>");
var users = {
    user1: { name: "Aladdin", age: 51, country: "Egypt" },
    user2: { name: "Sami", age: 22, country: "Egypt" },
    user3: { name: "Yousef", age: 18, country: "Egypt" },
    user4: { name: "Omar", age: 10, country: "Egypt" }
};
Object.keys(users).forEach(element => {
    document.write(element + ": " + users[element].name +
        "<br>");
});
document.write("<br><hr><br>");
document.getElementById("hed").innerHTML += "!";
var h = document.getElementById("hed").innerHTML;
var hh = document.getElementById("hed").outerHTML;
document.write(h);
document.write(hh);
document.write(document.getElementById("hed").innerText);
//document.write(document.getElementById("hed").outerText);
document.write("<br><hr><br>");

var tbody = document.getElementById("table-items");
Object.keys(users).forEach(element => {
    tbody.innerHTML += "<tr>" +
        "<td>" + users[element].name + "</td>" +
        "<td>" + users[element].age + " &nbsp (Years Old)" + "</td>" +
        "<td>" + users[element].country + "</td>" +
        "</tr>";
});

//try the next loop to create tbody to .. it's working
/*for (items in users) {

}*/