// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'ACf94964f8e67b36aad920409ddf064215';
const authToken = '156fb1dbddcb284cdea9453ea2c4e619';
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({
         from: 'whatsapp:+14155238886',
         body: 'Con fe funcionaaaa',
         to: 'whatsapp:+51926291346'
       })
      .then(message => console.log(message));