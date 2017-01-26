var jsonfile = require('jsonfile')
 
var file = './public/perintah.json';
var obj = {}
obj.name = 'ok';
obj.lampu = "off";
jsonfile.writeFile(file, obj, function (err) {
  console.error(err)
})