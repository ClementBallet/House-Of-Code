
console.log("Aze1234-_");


/**
 * Init script
 */
function init() {
    resetFormMessage();
    document.querySelector('#form__register').addEventListener('submit', onSubmitForm);

    let inputs = document.querySelector('#form__register').querySelectorAll('input');

    for(let i = 0; i < inputs.length; i++){
        inputs[i].addEventListener('keypress', onChangeInput)
    }
}

/**
 * Reset form validation
 */
function resetFormMessage(){
    // Reset messages
    let divErrors = document.querySelectorAll('.form-errors');
    for(let i = 0; i < divErrors.length; i++) {
        let div = divErrors [i];
        div.innerHTML = '';
    }
    // Reset input className
    let inputs = document.querySelectorAll('input');
    for(let j = 0; j < inputs.length; j++) {
        let input = inputs[j];
        input.classList.remove('is-valid', 'is-invalid');
    }
}

/**
 * Input type text
 *
 * @param options
 * @returns {boolean}
 */
function checkInputText(options) {
    // Get Value
    let input = options.input;
    let inputValue = input.value;
    let inputErrorMessage = input.parentElement.querySelector('.form-errors');
    // Error default value
    let error = {
        hasError : false,
        className : 'is-valid',
        text : ''
    };
    // Check if required
    if(options.required && inputValue.length === 0){
        error.hasError = true;
        error.text += '<small class="text-danger">Ce champ est requis</small><br>';
    }
    if(options.required && inputValue.length > 0) {
        // Check is letter and - and space only
        if (options.regExp && !options.regExp.test(inputValue)) {
            error.hasError = true;
            error.text += '<small class="text-danger">Le champ n\'est pas valide</small><br>';
        }
        // Check string length min
        if (options.lengthMin && inputValue.length < options.lengthMin) {
            error.hasError = true;
            error.text += '<small class="text-danger">Ce champ est trop court</small>';
        }
        // Check string length max
        if (options.lengthMax && inputValue.length > options.lengthMax) {
            error.hasError = true;
            error.text += '<small class="text-danger">Ce champ est trop long</small>';
        }
    }
    error.className = (error.hasError)? 'is-invalid' : 'is-valid';
    // Set new values
    input.classList.add(error.className);
    inputErrorMessage.innerHTML = error.text;
    return error.hasError;
}

/**
 * Password validation
 *
 * @param options
 * @returns {boolean}
 */
function checkPassword(options) {
    // Get Value
    let input = options.input;
    let inputRepeat = options.inputRepeat;
    let inputValue = input.value;
    let inputRepeatValue = inputRepeat.value;
    let inputErrorMessage = input.parentElement.querySelector('.form-errors');
    // Error default value
    let error = {
        hasError : false,
        className : 'is-valid',
        text : ''
    };
    if (inputValue !== inputRepeatValue) {
        error.hasError = true;
        error.text += '<small class="text-danger">Les 2 mots de passe sont différents</small>';
    }
    // Check is letter and - and space only
    if (options.regExp && !options.regExp.test(inputValue)) {
        error.hasError = true;
        error.text += '<small class="text-danger">Le mot de passe n\'est pas valide, il doit contenir au moins 1 minuscule, 1 majuscule, 1 chiffre et 1 caractère spécial</small><br>';
    }
    // Check string length min
    if (options.lengthMin && inputValue.length < options.lengthMin) {
        error.hasError = true;
        error.text += '<small class="text-danger">Ce champ est trop court</small>';
    }
    // Check string length max
    if (options.lengthMax && inputValue.length > options.lengthMax) {
        error.hasError = true;
        error.text += '<small class="text-danger">Ce champ est trop long</small>';
    }
    error.className = (error.hasError)? 'is-invalid' : 'is-valid';
    // Set new values
    input.classList.add(error.className);
    inputErrorMessage.innerHTML = error.text;
    return error.hasError;
}

/**
 * Checkbox validation
 *
 * @param options
 * @returns {boolean}
 */
function checkCheckbox(options) {
    // Get Value
    let input = options.input;
    let inputErrorMessage = input.parentElement.querySelector('.form-errors');
    // Error default value
    let error = {
        hasError : false,
        className : 'is-valid',
        text : ''
    };
    // Check if required
    if(options.required && !input.checked){
        error.hasError = true;
        error.text += '<small class="text-danger">Ce champ est requis</small><br>';
    }
    error.className = (error.hasError)? 'is-invalid' : 'is-valid';
    // Set new values
    input.classList.add(error.className);
    inputErrorMessage.innerHTML = error.text;
    return error.hasError;
}

/**
 * On submit form
 *
 * @param event
 */
function onSubmitForm(event) {
    event.preventDefault();
    resetFormMessage();
    let form = event.target; // Get event target, here #form__register
    let errorCount = 0;
    // LastName
    errorCount += checkInputText({
        input: form.querySelector('#form__register_lastname'),
        required: true,
        regExp: new RegExp('^[a-zA-Z- ]+$'),
        lengthMin: 3,
        lengthMax: 30
    });
    // FirstName
    errorCount += checkInputText({
        input: form.querySelector('#form__register_firstname'),
        required: false,
        regExp: new RegExp('^[a-zA-Z- ]+$'),
        lengthMin: 3,
        lengthMax: 30
    });
    // Email
    errorCount += checkInputText({
        input: form.querySelector('#form__register_email'),
        required: true,
        regExp: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    });
    // Password
    errorCount += checkPassword({
        input: form.querySelector('#form__register_password'),
        inputRepeat: form.querySelector('#form__register_password-repeat'),
        regExp: /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[_\-"'~|&%#@*+=:;.,?!\(\)\{\}\[\]])[\w_\-"'~|&%#@*+=:;.,?!\(\)\{\}\[\]]{7,20}$/,
        lengthMin: 7,
        lengthMax: 20
    });
    // Conditions
    errorCount += checkCheckbox({
        input: form.querySelector('#form__register_conditions'),
        required: true
    });
    if(errorCount === 0) {
        console.log('Yeah tout le formulaire est valide !!!!')
        form.submit();
    }
}

/**
 * Listen keypress onChangeInput
 *
 * @param event
 */
function onChangeInput(event){
    console.log('il y a un changement');

    resetFormMessage();
    let input = event.target; // Get event target, here input
    console.log(input);
    // LastName
    let regExp = new RegExp('^[a-zA-Z- ]+$');
    let inputErrorMessage = input.parentElement.querySelector('.form-errors');
    let inputValueMinLength = 3;
    let inputValueMaxLength = 30;
    // console.log(inputErrorMessage);
    // console.log(input.value);
    
    console.log(input.value);
    if (input.type == "text" && 
            (
            !regExp.test(input) || 
            input.value < inputValueMinLength || 
            input.value > inputValueMaxLength 
            ) 
       ) 
    {
        input.className += " is-invalid";
        inputErrorMessage.innerHTML = '<small class="text-danger">Ce champ n\'est pas valide.</small><br>';
    } else {
        console.log(input.classList);
        input.classList.remove("is-invalid");
        input.className += " is-valid";
    }
    

    // FirstName
    
    // Email
    
    // Password
   
}

init();

