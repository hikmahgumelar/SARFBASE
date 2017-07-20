var target = 'http://api-push.ibstower.com'
var port = '12345'
var socket = io(target+':'+port)
var pesan = "data dari client"


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
/*switch (door){
	case "1":
		door = "Buka"
		break;
	case "0":
		door = "Tutup"
		break;
};*/
    $('#date').text(tanggal);
    $('#site').text(site);
    $('#temp').text(temp + " Celcius");
    $('#hum').text(hum);
    $('#door').text(arr[door]);
    $('#acpwr').text(acpwr + " Volt");
 });
