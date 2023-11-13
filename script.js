// Theme toggle Code ------------------------------------------------
let theme_toggler = document.getElementById("theme-toggle");
let theme_btn_icon = document.getElementById("theme-icon");

theme_toggler.addEventListener("click", () => {
    if (document.body.classList != "light-mode") {
        document.body.classList.add("light-mode");
        document.body.classList.remove("dark-mode");
        theme_btn_icon.classList.add("fa-sun");
        theme_btn_icon.classList.remove("fa-moon");
    } else {
        document.body.classList.add("dark-mode");
        document.body.classList.remove("light-mode");
        theme_btn_icon.classList.remove("fa-sun");
        theme_btn_icon.classList.add("fa-moon");
    }
});

// Code for calculations
let input_area = document.getElementById('input');

// document.addEventListener('keyup', (event) => {
//     if (event.keyCode === 13) {
//         console.log('yo')
//         evaluate_string();
//     }

// })

let display_value = (value) => { // Code for displaying values on clicking the button
    input_area.value += value;
}
function delete_value() { // Code to delete the values one by one
    input_area.value = input_area.value.substring(0, input_area.value.length - 1);
}
function clr() { //Code for clearing the whole input
    input_area.value = "";
}

let evaluate_string = () => { //Code for evaluation
    if (input_area.value == "") {
        alert("Please enter a valid expression!");
    } else {
        input_area.value = eval(input_area.value);
    }
}
