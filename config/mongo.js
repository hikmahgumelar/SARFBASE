var mongoose = require('mongoose');

var mongoURI = "mongodb://iotmon:iotmon2018@ds145121.mlab.com:45121/iotmon";

module.exports = {
    init: function () {
        var MongoDB = mongoose.connect(mongoURI).connection;
        MongoDB.on('error', function (err) {
            if (err) {
                console.log('mongodb connection error', err);
            } else {
                console.log('mongodb connection successful');
            }
        });

        MongoDB.once('open', function () {
            console.log('mongodb connection open');
        });

    }
};
