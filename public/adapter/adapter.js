var target = 'http://localhost'
var port = '12345'
var socket = io(target+':'+port)


socket.on('transmit', function(data){

console.log(data)
/*
//descdoor = arr[door];

    $('#date').text(tanggal);
    $('#site').text(site);
    $('#temp').text(temp);
    $('#hum').text(hum);
    $('#door').text(arr[door]);
    $('#acpwr').text(acpwr);
 */
 });