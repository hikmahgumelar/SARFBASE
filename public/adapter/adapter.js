var target = 'http://localhost'
var port = '12345'
var socket = io(target+':'+port)


socket.on('transmit', function(data){
var dateObj = new Date();
var month = dateObj.getMonth() + 1; //months from 1-12
var day = dateObj.getDate();
var year = dateObj.getFullYear();
var jam = dateObj.getHours();
var menit = dateObj.getMinutes();
tanggal = day + "/" + month + "/" + year + " Jam  " + jam + ":" + menit + " WIB";
var site = data.a;
var temp = data.b;
var hum = data.c;
var door = data.d;
var acpwr = data.e;

var arr = ['tutup','buka'];
//descdoor = arr[door];

var datajumlah = data.length;
var id =[];
//iot1
    $('#id0').text(id);
    $('#tanggal0').text(data[i].tanggal);
    $('#site0').text(data[id].a);
    $('#temp0').text(data[id].b);
    $('#hum0').text(data[id].c);
    $('#door0').text(arr[data[id].d]);
    $('#acpwr0').text(data[id].e);
//iot2
    $('#id0').text(id);
    $('#tanggal0').text(tanggal);
    $('#site0').text(data[id].a);
    $('#temp0').text(data[id].b);
    $('#hum0').text(data[id].c);
    $('#door0').text(arr[data[id].d]);
    $('#acpwr0').text(data[id].e);
 });
