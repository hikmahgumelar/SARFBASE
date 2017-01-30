var jsonfile = require('jsonfile')
var file = './public/perintah.json'
jsonfile.readFile(file, function(err, obj) {
console.log(obj.site[2]["light"]);
 if (err){
 console.error(err);
  }
});