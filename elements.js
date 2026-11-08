"use strict";
const colorthemebutton = document.getElementById("colorbutton");
document.body.style.backgroundColor = "white";
document.body.style.color = "black";
function toggleTheme() {
    if (document.body.style.backgroundColor == "black" && document.body.style.color == "white") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
    else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
}
colorthemebutton.addEventListener("click", toggleTheme);
