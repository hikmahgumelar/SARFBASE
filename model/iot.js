var mongoose = require('mongoose');
var IotSchema = new mongoose.Schema({
	stat: String,
    id: String,
    tanggal: String,
    site : String,
    temp: String,
    hum: String,
    door: String,
    acpwr: String

});

module.exports = mongoose.model('iot', IotSchema);
