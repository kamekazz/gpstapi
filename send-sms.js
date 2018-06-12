const accountSid =''
const authToken =''


const client = require('twilio')(accountSid,authToken)

client.messages.create({
    to:'+18295109542',
    from:'+15102414038',
    body: 'holalllllalllalla'
})
.then((message) => console.log(message.sid))