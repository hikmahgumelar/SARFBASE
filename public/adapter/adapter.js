var target = 'http://localhost'
var port = '12345'
var socket = io(target+':'+port)	

socket.on('alert', function(data){
  console.log(data)
document.getElementById("test").innerHTML = data;
})
