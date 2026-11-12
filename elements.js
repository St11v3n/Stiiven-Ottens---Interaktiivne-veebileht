"use strict";
//1. Adding a color theme button functionality
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
//----------------------------------------------------------------------------------------------------------------------------------------------
//2. Adding a input field and a submit button, so upon writing the word into the input field and then clicking the submit button,
//the words will get placed into an unordered list within the html page. It also has a reset button, that completely wipes clears the word list.
const random_word_input = document.getElementById("random_word");
const random_word_submit_button = document.getElementById("submit_button");
const random_word_list_reset_button = document.getElementById("reset_button");
const random_word_list = document.getElementById("random_word_display");
function wordSubmission() {
    var word = random_word_input.value.trim();
    if (word == "") {
        return;
    }
    const word_list = document.createElement("li");
    word_list.textContent = word;
    random_word_list.appendChild(word_list);
    random_word_input.value = "";
}
function wordListReset() {
    random_word_list.textContent = "";
}
random_word_submit_button.addEventListener("click", wordSubmission);
random_word_list_reset_button?.addEventListener("click", wordListReset);
//--------------------------------------------------------------------------------------------------------------------------------------
//3. Adding a page alignment functionality via a button.
const page_alignment_button = document.getElementById("alignment_button");
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.textAlign = "left";
document.body.style.alignItems = "flex-start";
function AlignText() {
    if (document.body.style.textAlign == "left" && document.body.style.alignItems == "flex-start") {
        document.body.style.textAlign = "center";
        document.body.style.alignItems = "center";
    }
    else if (document.body.style.textAlign == "center" && document.body.style.alignItems == "center") {
        document.body.style.textAlign = "right";
        document.body.style.alignItems = "flex-end";
    }
    else if (document.body.style.textAlign == "right" && document.body.style.alignItems == "flex-end") {
        document.body.style.textAlign = "left";
        document.body.style.alignItems = "flex-start";
    }
}
page_alignment_button.addEventListener("click", AlignText);
