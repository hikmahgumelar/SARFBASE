var target = 'http://api-push.ibstower.com'
var port = '12345'
var socket = io(target+':'+port)
var pesan = "data dari client"
//socket.on('alert', function(data){
 // console.log(data)
//document.getElementById("test").innerHTML = data;
//});
socket.on('alert', function(data){

var a = Date();

    $('#messages1').text(a);
    $('#messages2').text(data);
 });
