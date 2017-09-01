$('#Table').dataTable( {
    "serverSide": true,
    "sAjaxDataProp": "",
    "ajax": {
        "url": '/api/log',
        "type": 'POST'
    },
   "aoColumns": [
        { "mData": "id" },
        { "mData": "site" },
        { "mData": "hum" },
        { "mData": "door" }
    ]

});