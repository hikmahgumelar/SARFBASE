var nodemailer=require('nodemailer');

/*
var poolConfig = {
    pool: true,
    host: 'mail.ibstower.com',
    port: 465,
    secure: true, // use TLS
    auth: {
        user: 'username',
        pass: 'password'
    }
};
*/
var transporter = nodemailer.createTransport({
    host: 'mail.ibstower.com',
    port: 465,
    secure: true, // use TLS
    auth: {
        user: 'hikmah.gumelar@ibstower.com',
        pass: 'H1kmah1982'
    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
    }
});

message = {
    from: 'rauangserver@ibstower.com', // listed in rfc822 message header
    to: 'hikmah.gumelar@ibstower.com',
    subject: 'PERINGATAN',
    text: 'RUANG SERVER HIGHTEMP 35 Celcius'

};

transporter.sendMail(message, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
