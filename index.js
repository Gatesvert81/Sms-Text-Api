//Dependencies: 
//yarn add express cors twilio 

const express = require('express'); 
const cors = require('cors');
const bodyParser = require('body-parser')
const twilio = require('twilio'); 

const port = process.env.PORT || 4000

//twilio requirements -- Texting API 
const accountSid = process.env.ACCOUNTSID ;
const authToken = process.env.ACCOUNTTOKEN; 
const client = new twilio(accountSid, authToken);

const app = express(); //alias

app.use(bodyParser.json())
app.use(cors()); //Blocks browser from restricting any data

//Welcome Page for the Server 
app.get('/', (req, res) => {
    res.send('Welcome to the Express Server')
})

//Twilio 
app.post('/send-text', (req, res) => {
    //Welcome Message
    res.send('Hello to the Twilio Server')

    //_GET Variables
    const { messageText, to } = req.body;

    console.log({messageText})


    // Send Text
    client.messages.create({
        body: messageText,
        to: to,  // Text this number 
        from: '8558950429' // From a valid Twilio number
    })
    .then((message) => console.log(message.body))
    .catch((error) => console.log(error));
})

app.listen(port, () => console.log("Running on Port 4000"))