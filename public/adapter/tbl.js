var arrdata = ["CLOSE","OPEN"];

$('#Table').dataTable( {
    "serverSide": true,
     "columnDefs": [{ type: 'date-euro', targets: 2 }],
    "ajax": {
        "url": '/api/log',
        "type": 'POST'
    },
   
   "aoColumns": [
        { "mData": "id" },
        { "mData": "site" },
        { "mData": "tanggal" },
        { "mData": "temp" },
        { "mData": "hum" },
        { "mData": "door" },
    ],

});