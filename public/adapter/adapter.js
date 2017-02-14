var target = 'http://103.225.88.36'
var port = '12345'
var socket = io(target+':'+port)
var pesan = "data dari client"	
//socket.on('alert', function(data){
 // console.log(data)
//document.getElementById("test").innerHTML = data;
//});
socket.on('alert', function(data){

var a = Date();

    $('#messages1').prepend($('<p>').text(a));
    $('#messages2').prepend($('<p>').text(data));
 });



function pilih() { 
var a = document.menuForm.select1.value;
	console.log(a);

};

