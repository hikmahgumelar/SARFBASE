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
for (var i=0; i<datajumlah;i++){
    $('#tanggal').append(tanggal);
    $('#site').append(data[i].a);
    $('#temp').append(data[i].b);
    $('#hum').append(data[i].c);
    $('#door').append(arr[data[i].d]);
    $('#acpwr').append(data[i].e);
}
 });
