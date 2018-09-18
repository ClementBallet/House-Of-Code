import { Title } from "./title";
import { Studio } from "./studio";
import { Poster } from "./poster";
import { Location } from "./location";
import { Rating } from "./rating.enum";
import { Genre } from "./genre";
import { Director } from "./director";
import { Actor } from "./actor";
import { Trailer } from "./trailer";

class Film {

    constructor(public title : String, public studio : String, public poster : String, public location : String, public rating : Enumerator, public genre : [ String ], public director : String, public actor : [ String ], public trailer : [ String ]) {

    }

}

const film = new Film(
    '12 Rounds 3: Lockdown',
    "Lionsgate",
    "http://trailers.apple.com/trailers/lions_gate/12rounds3lockdown/images/poster.jpg",
    "/trailers/lions_gate/12rounds3lockdown/",
    "R",
    ["Action and Adventure"],
    "Stephen Reynolds",
    [
        "Dean Ambrose",
        "Roger Cross",
        "Daniel Cudmore",
        "Lochlyn Munro",
        "Ty Olsson",
        "Sarah Smyth"
    ],
    [
        {
        "postdate" : "Mon, 27 Jul 2015 00:00:00 -0700",
        "url" : "/trailers/lions_gate/12rounds3lockdown/",
        "type" : "Trailer",
        "exclusive": false,
        "hd" : true
        }
    ]
);