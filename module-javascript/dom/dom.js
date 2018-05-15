let form = document.getElementById('form__register'); // on sélectionne notre form

//form.addEventListener('keypress', onSubmitForm);



//form.addEventListener('click', onSubmitForm);

form.addEventListener('submit', onSubmitForm); // on écoute l'event de la soumission

let inputs = form.querySelectorAll('input');

for(let i = 0; i < inputs.length; i++){
    inputs[i].addEventListener('keypress', checkInputText)
}

function onChangeInput(event){
    console.log('il y a un changeùment')
}



/**
 * onSubmitForm
 * 
 * param : event
 * 
 * Fonction exécutée lors de la soumission
 */
function onSubmitForm(event) { 
    event.preventDefault(); // on bloque le comportement par défaut
    
    // Check lastname
    checkInputText({
        input: document.getElementById('form__register_lastname'),
        required: true,
        regExp: new RegExp('^[a-zA-Z- ]+$'),
        lengthMin: 3,
        lengthMax: 30
    });
    
    // Check firtname
    checkInputText({
        input: document.getElementById('form__register_firstname'),
        required: false,
        regExp: new RegExp('^[a-zA-Z- ]+$'),
        lengthMin: 3,
        lengthMax: 30
    });
    
    // Check email
    checkInputText({
        input: document.getElementById('form__register_email'),
        required: true,
        regExp: new RegExp('/^\S+@\S+\.\S+$/')
    });
    
    // Check password
    checkInputText({
        input: document.getElementById('form__register_password'),
        required: true,
        regExp: new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{7,20}"),
        lengthMin: 7,
        lengthMax: 20
    });

    // Check password repeat
    checkInputText({
        input: document.getElementById('form__register_password-repeat'),
        required: true,
        regExp: new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{7,20}"),
        lengthMin: 7,
        lengthMax: 20
    });

    // Check conditions
    /*
    checkInputText({
        input: document.getElementById('form__register_conditions'),
        required: true
    });
    */
}

/**
 * checkInputText
 * 
 * param : options (array)
 * 
 * Vérification du formulaire
 */

function checkInputText(options) {
    // Get Value
    let input = options.input;
    let inputValue = input.value;
    let inputErrorMessage = input.parentElement.querySelector('.form-errors');
    // Reset Input
    options.input.classList.remove(['is-valid', 'is-invalid']);
    inputErrorMessage.innerHTML = '';
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
    // if (options.required && input.type === "checkbox") {
    //     error.hasError = true;
    //     error.text += '<small class="text-danger">Vous devez accepter les conditions générales</small><br>';
    // }
    if(options.required && inputValue.length > 0) {
        // Check is letter and - and space only
        if (!options.regExp.test(inputValue)) {
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
}

