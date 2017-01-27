var jsonfile = require('jsonfile')
var file = './public/perintah.json'
jsonfile.readFile(file, function(err, obj) {
 obj.lampu =  "bawah";
jsonfile.writeFile(file, obj,{spaces: 2}, function (err) {
if (err) {
  console.error(err);
  }
 console.dir(obj);
});
});