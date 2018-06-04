$(document).ready(function(){
    $("#formweather").on('submit', function(event){
        event.preventDefault();
        let city = $('#city_input').val();
   
        callOpenWeatherMap(city);
       
    });
});

function callOpenWeatherMap(city){
    
    // Reset de erreurs dûes à l'input 
    $("#input-errors").text("");

    let apikey = "b42f65940c272cfa9cea794fa3e28e9f";




    $.ajax({
        method: "GET",
        url: "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&APPID=" + apikey,
        dataType: "JSON"
    }).done(function(data) {
        // fonction lancée au retour de l'appel
        console.log('data', data);
        
        getGoogleMap(data);
        getCity(data);
        getCoords(data);
        getIcon(data);
        getTemps(data);
        getHum(data);
        
    }).fail(function(error) {
        // Si une erreur survient lors de l'appel
        console.warn(error);
        $("#input-errors").text("Cette ville n'existe pas.");
    });
}

function getCity(data) {
    let city = data.name;
    let country = data.sys.country;

    $("#city").text(city + " (" + country + ")");
}

function getCoords(data) {
    let lat = data.coord.lat;
    let lon = data.coord.lon;

    $("#coords").text("Latitude : " + lat + " | Longitude : " + lon);
}

function getIcon(data) {
    let city = data.name;
    let icon = data.weather[0].icon;

    $("#icon").html('<img src="http://openweathermap.org/img/w/' + icon + '.png" alt="' + city + '">');
}

function getTemps(data) {
    let temp = data.main.temp + "°C";
    let tempMin = data.main.temp_min + "°C";
    let tempMax = data.main.temp_max + "°C";

    $("#temp").text("Température : " + temp);
    $("#temp-min").text("Température minimale : " + tempMin);
    $("#temp-max").text("Température maximale : " + tempMax);
}

function getHum(data) {
    let hum = data.main.humidity + "%";

    $("#humidity").text("Humidité : " + hum);
}

function getGoogleMap(data) {
    let lat = data.coord.lat;
    let lon = data.coord.lon;
    let latLon = {
        lat: lat, 
        lng: lon 
    };
    let city = data.name;

    console.log(latLon);

    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: latLon
    });

    let marker = new google.maps.Marker({
        position: latLon,
        map: map
    });
}
