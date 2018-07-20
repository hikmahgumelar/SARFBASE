var mongoose = require('mongoose');
var IotSchema = new mongoose.Schema({
    id: String,
    tanggal: String,
    site : String,
    temp: String,
    hum: String,
    door: String,
    acpwr: String,
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
    DRectf: String,
    DGen: String,
    ARRSTER: String,
    Brectf: String,
    MCBTrip: String,
    alamat: String,
    status: String
});

module.exports = mongoose.model('iot', IotSchema);
