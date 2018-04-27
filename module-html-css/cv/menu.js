function run() {
    hideHamburger();

    if (windowWidth()) {
        display_menu();
        displayHamburger();
        toggleHamburger();
    }
}

function windowWidth() {
    var getWindowWidh = $( window ).width();

    if (getWindowWidh >= "769px") {
        return false;
    } else {



        return true;
    }
}

function display_menu() {
    var pres = document.getElementById("presentation");

    if ( pres.style.display = 'none' ) {
        pres.style.display = 'block';
    }
    else if ( pres.style.display = 'block' ) {
        pres.style.display = 'none';
    }
}

function displayHamburger() {
    $( "button.hamburger" ).show();
}

function hideHamburger() {
    $( "button.hamburger" ).hide();
}

function toggleHamburger() {
    $( "button.hamburger" ).click(function() {
        $( "button.hamburger" ).toggleClass( "is-active" );
    });
}

run();
