var nodemailer = require('nodemailer')
let hObj = {}

hObj.contactUs = async (req,res)=>{
    
  sendEmail(req).then(()=>{
     res.status(200).send({
       "info":"EMail send successfully",
       "status":true
     }) 
    }).catch((error)=>{
      console.log(error)
      res.send({
        "info":"Email Unsuccesfully :Error => "+error,
        "status":false
      })
    })

}

 async function sendEmail(data) {
       
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'question.repository123@gmail.com',
      pass: 'repository@123'
    }
  });
  var mailOptions = {
    from: 'question.repository123@gmail.com',
    to: 'question.repository123@gmail.com',
    subject: 'Support: Question App',
    text: "Name: "+data.body.Name+"\nContact: "+data.body.Contact+"\nEmail: "+data.body.Email+"\nDescription: "+data.body.Description+"\n\n\n Thank you for contacting"
  };
  let info = await transporter.sendMail(mailOptions, function(error, info){
    if (error) {
       
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  
  console.log('Message sent successfully!');
  console.log(nodemailer.getTestMessageUrl(info));
 }

    


module.exports = hObj