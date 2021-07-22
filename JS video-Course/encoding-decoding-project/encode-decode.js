let select = document.getElementById("selectId");
let inputArea = document.getElementById("inputId");
let outputArea = document.getElementById("outputId");
if (select.value == "encode") {
    inputArea.addEventListener("input", () => {
        outputArea.value = window.btoa(inputArea.value);
    });

} else if (select.value == "decode") {
    inputArea.addEventListener("input", () => {
        outputArea.value = window.atob(inputArea.value);
    });
}
select.addEventListener("change", () => {
    if (select.value == "encode") {
        inputArea.addEventListener("input", () => {
            outputArea.value = window.btoa(inputArea.value);
        });

    } else if (select.value == "decode") {
        inputArea.addEventListener("input", () => {
            outputArea.value = window.atob(inputArea.value);
        });
    }
});