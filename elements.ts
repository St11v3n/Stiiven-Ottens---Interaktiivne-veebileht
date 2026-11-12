//1. Adding a color theme button functionality
const colorthemebutton = document.getElementById("colorbutton") as HTMLButtonElement

document.body.style.backgroundColor = "white";
document.body.style.color = "black";

function toggleTheme() : void {
    
    if (document.body.style.backgroundColor == "black" && document.body.style.color == "white")
    {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black"
    }
    else
    {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white"
    }
    
}

colorthemebutton.addEventListener("click", toggleTheme)
