// // const express = require('express');
// // const nodemailer = require('nodemailer');
// // const bodyParser = require('body-parser');
// // const app = express();
// // const port = 3000;

// // // Middleware
// // app.use(bodyParser.json());
// // app.use(bodyParser.urlencoded({ extended: true }));
// // app.use(express.static('public'));

// // // Endpoint to handle form submission
// // app.post('/send-email', (req, res) => {
// //     const { fullName, phoneNumber, emailAddress, message } = req.body;

// //     // Configure the email transporter
// //     const transporter = nodemailer.createTransport({
// //         service: 'Gmail',
// //         auth: {
// //             user: 'omoloyeamoss65@gmail.com',
// //             pass: 'Samson,65'
// //         }
// //     });

// //     // Set up email data
// //     const mailOptions = {
// //         from: 'omoloyeamoss65@gmail.com',
// //         to: 'omoloyeamoss65@gmail.com', // You can set this to the email you want to receive messages at
// //         subject: 'New Contact Form Submission',
// //         text: `Name: ${fullName}\nPhone: ${phoneNumber}\nEmail: ${emailAddress}\nMessage: ${message}`
// //     };

// //     // Send the email
// //     transporter.sendMail(mailOptions, (error, info) => {
// //         if (error) {
// //             return res.status(500).send('Error sending email: ' + error.message);
// //         }
// //         res.status(200).send('Email sent successfully: ' + info.response);
// //     });
// // });

// // // Start the server
// // app.listen(port, () => {
// //     console.log(`Server is running on http://localhost:${port}`);
// // });

// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault();
  
//     const fullName = document.getElementById('fullName').value.trim();
//     const phoneNumber = document.getElementById('phoneNumber').value.trim();
//     const emailAddress = document.getElementById('emailAddress').value.trim();
//     const message = document.getElementById('message').value.trim();
  
//     if (fullName === '' || phoneNumber === '' || emailAddress === '' || message === '') {
//         alert('Please fill in all fields.');
//         return;
//     }
  
//     // Basic validation
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailPattern.test(emailAddress)) {
//         alert('Please enter a valid email address.');
//         return;
//     }
  
//     // Send form data to the server
//     // fetch('/send-email', {
//     //     method: 'POST',
//     //     headers: {
//     //         'Content-Type': 'application/json'
//     //     },
//     //     body: JSON.stringify({ fullName, phoneNumber, emailAddress, message })
//     // })
//     // .then(response => response.text())
//     // .then(data => {
//     //     alert(data);
//     //     // Reset form
//     //     document.getElementById('contactForm').reset();
//     // })
//     // .catch(error => {
//     //     alert('Error sending message: ' + error.message);
//     // });
//   });
