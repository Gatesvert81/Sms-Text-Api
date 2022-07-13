Welcome here

This is a text API made from [https://twilio.com](Twillio) SMS Api Service.

## Motivation
I wanted to implement SMS messaging to a client's serveless website. I had used Twilio before for the same service but that website had a server. To reduce my work flow and make it easy for me to implement sms into the website I made this API so that I donot need to add a server to the client's and other potential clients serverless websites just for the SMS service.

## Current State
I have currently made this API using my personal Private key since I am the only one using it. Its a free private key so messaging is limited as to the freebie plan on the twilio service website.


## Usage
- First get the message to be sent and the mobile number of the reciepient
- Add the details to the api and send the POST request.

``
const sendMessage = async (to, message) => {
    await axois.post('https://smstextapi.heroku.app.com/send-text', {
        message, // message to be sent
        to: '+23359308294' // Phone number of reciepient
    })
}
``

