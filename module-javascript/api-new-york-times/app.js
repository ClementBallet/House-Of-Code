$(document).ready(function(){
    $("#form").on('submit', function(event){
        event.preventDefault();
        let query = $('#query_input').val();

        callApi(query);
    });
});

function callApi(query) {
    let url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json";
        url += '?' + $.param({
            'api-key': "4490624dbb034aa6abf7ad6415d4b615",
            'query': query
        });

    $.ajax({
        method: "GET",
        url: url,
        dataType: "JSON"
    }).done(function(data) {
        // fonction lancée au retour de l'appel

        let options = { percent: 50 };
        $( "#effect" ).toggle( "fade", options, 1000 );

        renderNumResults(data);
        loopRes(data);

        let copyright = "<small>" + data.copyright + "</small>";

        $("#copyright").html(copyright);

    }).fail(function(error) {
        // Si une erreur survient lors de l'appel
        console.log(error);
    });
}

function renderNumResults(data) {
    let query = data.num_results;

    $("#num_results").text("Nombre de résultats : " + query);
}

function loopRes(data) {
    let results = data.results;
    let div = "";
    let img = "";

    for (let i = 0; i < results.length; i++) {

        img = results[i].multimedia;

        div += "<div id='result-" + (i+1) + "' class='one-result'>";
        if(img != null) {
            div += '<img src="' + img.src + '" />';
        } else {
            div += '<div class="img-null">Pas d\'image pour cet article</div>';
        }
        div += "<h3 class='title'>" + results[i].display_title + "</h3>";
        div += "<p><b>Auteur :</b> " + results[i].byline + "</p>";
        div += "<p><b>Date :</b> " + results[i].publication_date + "</p>";
        div += "<p><b>Classification :</b> " + results[i].mpaa_rating + "</p>";
        div += "<p><b>Extrait :</b> " + results[i].summary_short.substring(0, 99) + "[...]</p>";
        div += "<a href='" + results[i].link.url + "' target='_blank'><button><b>" + results[i].link.suggested_link_text + "</b></button></a>";
        div += "</div>";

        $("#render-data").html(div);

    }
}