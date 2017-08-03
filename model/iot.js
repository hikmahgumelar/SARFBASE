var mongoose = require('mongoose');
var IotSchema = new mongoose.Schema({
	stat: String,
    id: String,
    tanggal: String,
    site : String,
    temp: String,
    hum: String,
    door: String,
    VPR: String,
    VPS: String,
    VPT: String,
    Vaccu : String,
    Vrectf: String,
    Ir: String,
    Is: String,
    It: String,
    FUEL: String,
    GON: String,
    GFAIL : String,
    DoorRectf: String,
    DoorGen: String,
    ARRESTER: String,
    Brectf: String,
    MCBTrip: String,
    alamat: String

});

module.exports = mongoose.model('iot', IotSchema);
