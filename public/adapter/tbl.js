$('#Table').dataTable( {
    "serverSide": true,
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
        { "mData": "VPR" },
    ]

});