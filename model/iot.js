var mongoose = require('mongoose');
var IotSchema = new mongoose.Schema({
    id: String,
    tanggal: String,
    site : String,
    temp: String,
    hum: String,
    door: String,
    acpwr: String

});

module.exports = mongoose.model('iot', IotSchema);
