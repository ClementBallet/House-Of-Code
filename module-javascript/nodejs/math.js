const _ = require('lodash');

function addition(a, b) {
    if(_.isNumber(a) && _.isNumber(b)) {
        return a + b;
    } else {
        throw new Error("Au moins un des paramètres n'est pas de type number.");
    }
}

function soustraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

module.exports = {
    addition: addition,
    soustraction: soustraction,
    multiplication: multiplication,
    division: division
};