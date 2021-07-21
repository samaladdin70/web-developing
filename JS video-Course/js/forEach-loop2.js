var myHoppies = ["music", "reading", "sports", "cooding", "programming", "Wing-Chun kung-Fu"];
for (items in myHoppies) {
    console.log(myHoppies[items]);
}

myHoppies.forEach(element => {
    document.write(element + "<br>");

});
document.write("<br><hr><br>");
var list = document.getElementById("list");
for (items in myHoppies) {
    list.innerHTML += "<li>" + myHoppies[items] + "</li>";
};
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
var h = document.getElementById("hed").innerHTML;
var hh = document.getElementById("hed").outerHTML;
document.write(h);
document.write(hh);
document.write(document.getElementById("hed").innerText);
//document.write(document.getElementById("hed").outerText);
//document.getElementById("hed").innerHTML += "!";
var tbody = document.getElementById("table-items");
for (items in users) {
    tbody.innerHTML += "<tr>" +
        "<td>" + users[items].name + "</td>" +
        "<td>" + users[items].age + " &nbsp (Years Old)" + "</td>" +
        "<td>" + users[items].country + "</td>" +
        "</tr>";
};