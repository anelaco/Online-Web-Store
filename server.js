const express = require('express');
const app = express();

const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 5000;

app.use(express.static('public'));
app.use(express.json())

app.get('/', (req,res) =>{
    res.sendFile(__dirname + '/public/inquiry.html')

})

app.post('/', (req,res)=>{
   console.log(req.body);

   const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'stolzebosnia@gmail.com',
            pass: ' counter16 '
        }
     })

     const mailOptions = {
        from: req.body.eMail,
        to: 'stolzebosnia@gmail.com',
        subject: req.body.eMail,
        text: req.body.question
     }

     transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            console.log(error);
            res.send('error');
        }else{

            console.log('Email Sent' + info.response);
            res.send('success')
        }


     })

})

app.listen(PORT, () =>{

    console.log('Server is running on port ${PORT}')
})


