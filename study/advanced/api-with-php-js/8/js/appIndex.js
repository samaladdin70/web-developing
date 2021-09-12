let text_area = document.getElementById('text_area');
let msg_div = document.getElementById('msg_div');
let displayId = document.getElementById('displayId');
let closeB = document.getElementById('close');
msg_div.addEventListener("input", () => {
    text_area.value = msg_div.innerHTML;
});

