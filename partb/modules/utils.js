// ./modules/utils.js
const en = require('../lang/en/en');

function getDate(name) {
    const date = new Date();
    return en.greeting.replace('%1', name) + ' ' + date.toString();
}

module.exports = { getDate };
