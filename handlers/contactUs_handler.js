const Contact = require('../model/contactUs')
var nodemailer = require('nodemailer')
let hObj = {}

hObj.contactUs = async (req,res)=>{

    function sendEmail (data) {
    
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'akashkulkarni796@gmail.com',
              pass: 'aaouikika'
            }
          });
          var mailOptions = {
            from: 'akashgamer96@gmail.com',
            to: data.body.Email,
            subject: 'Support: Test App',
            text: "Name: "+data.body.Name+"\nContact: "+data.body.Contact+"\nEmail: "+data.body.Email+"\nDescription: "+data.body.Description+"\n\n\n Thank you for contacting"
          };
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
               
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
          
    
    }

    sendEmail(req)
}

module.exports = hObj