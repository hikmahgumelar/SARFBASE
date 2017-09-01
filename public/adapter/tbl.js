var arrdata = ["CLOSE","OPEN"];

$('#Table').dataTable( {
    "serverSide": true,
     "columnDefs": [{ type: 'date-euro', targets: 2 }],
    "ajax": {
        "url": '/api/log',
        "type": 'POST'
    },
   "sorting": [[ 2, "desc" ]],
   "aoColumns": [
        { "mData": "id" },
        { "mData": "site" },
        { "mData": "tanggal" },
        { "mData": "temp" },
        { "mData": "hum" },
        { "mData": "door" },
        { "mData": "VPR" },
        
    ],

});