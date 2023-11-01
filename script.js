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

document.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        console.log('yo')
        evaluate_string();
    }

})

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






// // Code for calculations
// let buttons = document.querySelectorAll('button');

// let btn_array = Array.from(buttons);

// btn_array.forEach(button => {
//     button.addEventListener('click', (e) => {
//         // e.target.value = Number.parseInt(e.target.value) // Converting a string into a number
//         if (e.target.innerHTML == '=') {
//             try {
//                 // input_string = Math.eval(input_string);
//                 input_string = eval(input_string);
//                 input_area.value = input_string;
//             }
//             catch {
//                 input_area.value = 'Error';
//             }
//         }
//         else if (e.target.innerHTML == 'C') {
//             input_string = '';
//             input_area.value = input_string;
//         }
//         else if (e.target.innerHTML == 'DEL') {
//             input_string = input_string.substring(0, input_string.length - 1);
//             input_area.value = input_string;
//         }
//         else {
//             input_string += e.target.innerHTML;
//             input_area.value = input_string;
//             if (e.target.innerHTML == '=') {

//             }
//             // console.log(typeof (e.target.value));
//         }
//     })
// })