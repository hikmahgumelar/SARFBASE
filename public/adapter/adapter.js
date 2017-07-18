var target = 'http://localhost'
var port = '12345'
var socket = io(target+':'+port)
var pesan = "data dari client"
//socket.on('alert', function(data){
 // console.log(data)
//document.getElementById("test").innerHTML = data;
//});
socket.on('pesannih', function(data){
var dateObj = new Date();
var month = dateObj.getMonth() + 1; //months from 1-12
var day = dateObj.getDate();
var year = dateObj.getFullYear();
var jam = dateObj.getHours();
var menit = dateObj.getMinutes();
tanggal = day + "/" + month + "/" + year + " Jam :" + jam + ":" + menit + " WIB";

    $('#messages1').text(tanggal);
    $('#messages2').text(data);
 });
