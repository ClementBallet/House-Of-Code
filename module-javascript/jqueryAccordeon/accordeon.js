$( document ).ready(function() {
    
    let liList = $( "li" );

    

    // for (let i = 0; i < liList.length; i++) {
        $( "li" ).on( "click", function() {

            $(this).addClass('current');
    
            $("li.current p").slideToggle();
    
            $("li.current .arrow").toggleClass( "arrow-down" );
    
        });

        
    // }
    
});