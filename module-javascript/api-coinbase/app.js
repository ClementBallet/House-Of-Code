// $(document).ready(function(){
//     callApi();
// });

// function callApi() {
//     let url = "https://api.coinbase.com/v2/prices/BTC-USD/buy";
//     // let apiKey = "fjzRPnTIePq0iMVq";
//     // let secretApiKey = "hgjDwDMLUI4V5ZEBDujpm8jvF4QfK4DH";

//     $.ajax({
//         method: "GET",
//         url: url,
//         dataType: "JSON"
//     }).done(function(data) {
//         // fonction lancée au retour de l'appel

//         console.log('data :', data);

//         let value = data.data.amount;

//         $("#render").text(value);

//     }).fail(function(error) {
//         // Si une erreur survient lors de l'appel
//         console.log(error);
//         console.log("test");

//     });
// }

function init(){
    timestamp();
}

function timestamp(){
    $.ajax({
        method: "GET",
        url: "https://api.coinbase.com/v2/time",
    }).done(function(data) {
        // fonction lancée au retour de l'appel
        console.log('data', data)
        //Envoi du timestamp à la fonction de lancement de la requête
        GetRequest(data);

    }).fail(function(error) {
        // Si une erreur survient lors de l'appel
        console.warn(error);
        console.log("azeaze");

    });
}

function GetRequest(timestamp) {

    // Set these in your ENVironment, or enter them here with the actual string
    var apiKey = 'fjzRPnTIePq0iMVq';
    var apiSecret = 'hgjDwDMLUI4V5ZEBDujpm8jvF4QfK4DH';

    // set the parameter for the request message
    var req = {
        method: 'GET',
        longpath: 'https://api.coinbase.com/v2/accounts',
        shortpath: '/v2/accounts',
        body: ''
    };

    //create the message
    var message = timestamp.data.epoch + req.method + req.shortpath;

    //create a hexedecimal encoded SHA256 signature of the message
    var hash =  forge.hmac.create();
    hash.start('sha256', apiSecret);
    hash.update(message);
    var signature = hash.digest().toHex();

    //create the request
    $.ajax({
        method: req.method,
        url: req.longpath,
        headers: {
            'CB-ACCESS-SIGN': signature,
            'CB-ACCESS-TIMESTAMP': timestamp.data.epoch,
            'CB-ACCESS-KEY': apiKey,
            'CB-VERSION': '2015-07-22'
        }
    }).done(function(data) {
        // fonction lancée au retour de l'appel
        console.log('ici', data)
        renderData(data);
    }).fail(function(error) {
        // Si une erreur survient lors de l'appel
        console.warn(error);
    });
}

function renderData(data) {
    let results = data.data;
    let tr = "";

    for (let i = 0; i < results.length; i++) {

        tr += "<tr>";
        tr += "<th scope='row'>" + (i+1) + "</th>";
        tr += "<td>" + data.data[i].currency + "</td>";
        tr += "<td>" + data.data[i].name + "</td>";
        tr += "<td>" + data.data[i].type + "</td>";
        tr += "<td>" + data.data[i].native_balance.amount + data.data[i].native_balance.currency + "</td>";
        tr += "<td>" + new Date(data.data[i].created_at) + "</td>";
        tr += "</tr>";

        $("#render-data").html(tr);

    }
}