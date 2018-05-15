let form = document.getElementById('form__register'); // on sélectionne notre form

form.addEventListener('submit', onSubmitForm); // on écoute l'event de la soumission


/**
 * onSubmitForm
 * 
 * param : event
 * 
 * Fonction exécutée lors de la soumission
 */
function onSubmitForm(event) { 
    event.preventDefault(); // on bloque le comportement par défaut
    
    disableErrors();
    validateNames();
    
}

/**
 * disabledErrors
 * 
 * Supprime les messages et CSS d'erreurs
 */
function disableErrors() {
    let inputErrors = document.getElementsByClassName('form-errors');
    let inputs = document.getElementsByTagName('input');

    for (let i = 0; i < inputErrors.length; i++) {
        inputErrors[i].className += " disable";
    }

    for (let j = 0; j < inputs.length; j++) {
        inputs[j].classList.remove("is-invalid");
    }
}

/**
 * validateLastName
 * 
 * Valide le nom et prénom
 */
function validateNames() {
    // Récupère la valeur de last name
    let inputLastname = document.getElementById('form__register_lastname');
    let inputLastnameValue = inputLastname.value;
    // Récupère la valeur de first name
    let inputFirstName = document.getElementById('form__register_firstname');
    let inputFirstNameValue = inputFirstName.value;
    // RegExp qui permet de checker si pas de caractères spéciaux
    let regEx = new RegExp("^([a-zA-Z-éèàöëïîôê]+)$", 'i');
    
    if (inputLastnamevalue.length <= 3 && inputLastnamevalue.length <= 30) {
        if (regEx.test(inputLastnameValue)) {
            inputLastname.className += " is-valid";
        } else {
            inputLastname.className += " is-invalid";
            inputLastname.parentElement.getElementsByClassName('form-errors')[0].innerHTML = "<small class='text-danger'>Votre nom ne peut contenir que des lettres, des chiffres et des tirets.</small>";
        }
    } else {
        inputLastname.parentElement.getElementsByClassName('form-errors')[0].innerHTML = "<small class='text-danger'>Votre nom doit contenir doit contenir entre 3 et 30 caractères.</small>";
    }

    if (inputFirstNameValue.length <= 3 && inputFirstNameValue.length <= 30) {
        if (regEx.test(inputFirstNameValue)) {
            inputFirstName.className += " is-valid";
        } else {
            inputFirstName.className += " is-invalid";
            inputFirstName.parentElement.getElementsByClassName('form-errors')[0].innerHTML = "<small class='text-danger'>Votre prénom ne peut contenir que des lettres, des chiffres et des tirets.</small>";
        }
    } else {
        inputFirstName.parentElement.getElementsByClassName('form-errors')[0].innerHTML = "<small class='text-danger'>Votre prénom doit contenir doit contenir entre 3 et 30 caractères.</small>";
    }
}

/**
 * validateEmail
 * 
 * Valide l'email
 */
function validateEmail() {

}

/**
 * validatePassword
 * 
 * Valide le password
 */
function validatePassword() {

}





