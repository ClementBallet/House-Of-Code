// Require Fs Extra
const fs = require('fs-extra');
// Stock JSON
const json = [
    {
        "name": "Arawak",
        "owner": {
            "firstName": "Nicolas",
            "lastName": "Hodicq",
            "mail": "nhodicq@bewizyu.com"
        },
        "openDays": [
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ],
        "openHours": {
            "start": 10,
            "end": 1
        },
        "beers": [
            {
                "type": "Blonde",
                "name": "Triple Karmeliet"
            }
        ]
    }
];

// async func qui check si le chemin existe
async function checkFolder() {
    let folder = './temp';

    fs.pathExists(folder, async (err, exists) => {
        if(exists) {
            await fs.rmdir(folder);
            console.log('Delete temp folder success!');
        } else {
            await createFile();
        }
        console.log(err);
    });
}

// Créé le fichier pubs.json
function createFile() {
    let folder = './temp';
    let file = 'pubs.json';

    setTimeout(async () => {
        try {
            await fs.ensureDir(folder);
            await fs.ensureFile(`${folder}/${file}`);
            console.log('Create pubs.json success!');

            setTimeout(function(){
                writeJsonWithData();
            }, 2000);
        } catch (err) {
            console.error(err);
        }
    }, 2000);
}

// Ecrit la data dans le fichier JSON
async function writeJsonWithData() {
    try {
        await fs.writeJson('./temp/pubs.json', json)
        console.log('Write data in JSON success!')
    } catch (err) {
        console.error(err)
    }
}

// Surveille le JSON et renvoie des infos
async function watchJson() {
    await fs.watchFile('./temp/pubs.json', (current, previous) => {
        console.log('Current: ', current);
        console.log('Previous: ', previous);
    });
}

// Init App
function init() {
    checkFolder();
    setTimeout(function(){ watchJson(); }, 2000);
}

init();