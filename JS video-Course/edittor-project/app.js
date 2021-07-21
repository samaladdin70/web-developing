let codes = document.getElementById("codes");
let play = document.getElementById("play");
let remove = document.getElementById("remove");
let result = document.getElementById("result");

play.onclick = () => {
    result.innerHTML = codes.value;
    localStorage.setItem("RESULT", codes.value);
};
remove.onclick = () => {
    result.innerHTML = "";
    //codes.value = "";
    localStorage.removeItem("RESULT", codes.value);
}

onload = () => {
    if (localStorage.getItem("RESULT") !== null) {
        codes.value = localStorage.getItem("RESULT");
    }
    result.innerHTML = codes.value;
}