const xyz = require('./people');
console.log(xyz.players, xyz.ages);

const {players, ages} = require("./people");
console.log(players, ages);

const os = require('os');
console.log(os.platform(), os.homedir());