const express = require('express');

const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: false }));

const { MessagingResponse } = require('twilio').twiml;
// app.post('/sms', (req, res) => {
//     const twiml = new MessagingResponse();
//
//     twiml.message('The Robots are coming! Head for the hills!');
//
//     res.type('text/xml').send(twiml.toString());
// });
//
// app.listen(3000, () => {
//     console.log('Express server listening on port 3000');
// });

app.all('/', (req, res) => {
   res.type('text/xml')
    const twiml = new MessagingResponse();
    twiml.message('Thank you for your message');
    twiml.message(`You said ${req.body.Body}`);

    // if(req.body.Body.includes('yes')){
    //     //check db to see if the user has already been added
    //     twiml.message('You said yes');
    // } else {
    //     twiml.message('You said no');
    // }
    res.send(twiml.toString())
})
app.listen(port, () => {
    console.log(`Express server listening on port http://localhost:${port}`);
})