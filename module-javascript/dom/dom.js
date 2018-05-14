let inputLastname = document.getElementById('form__register_lastname');
let inputLastnameValue = inputLastname.value;

console.log('Input Lastname', inputLastname);
console.log('Valeur : ', inputLastnameValue);

let regEx = new RegExp("^([a-zA-Z-éèàöëïîôê]+)$", 'i');
let inputErrors = document.getElementsByClassName('form-errors');



if (regEx.test(inputLastnameValue)) {
    inputLastname.className += " is-valid";
} else {
    inputLastname.className += " is-invalid";
    inputLastname.parentElement.getElementsByClassName('form-errors')[0].innerHTML = "<small class='text-danger'>Votre nom ne peut contenir que des lettres, des chiffres et des tirets.</small>";
}