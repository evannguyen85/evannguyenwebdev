const   express = require('express'),
        mongoose = require('mongoose'),
        nodemailer = require('nodemailer'),
        jsonParser = require('body-parser').json(); 
        app = express();

const port = process.env.PORT || 8080;

// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'evannguyentestemail@gmail.com',
            pass: '12345678x@X'
        }
    });
// const   mailOptions = {
//     from: 'evannguyentestemail@gmail.com',
//     to: 'evannguyen85@gmail.com',
//     subject: 'Sending from nodejs',
//     text: 'That was easy!'
// };
// transporter.sendMail(mailOptions, (err, info) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log('Email sent: ' + info.response);
//     }
// });

// mongoose.connect('mongodb://127.0.0.1:27017/evannguyenwebdev_db', (err, db) => {
//     if(err) throw err;
//     console.log("db created!");
// });

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String
});
const Contact = mongoose.model("Contact", contactSchema);
// Contact.create({
//     name: "Peter",
//     email: "peter@gmail.com",
//     subject: "helo",
//     message: "this was simple"
// }, (err, contact) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(contact);
//     }
// });

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
    next();
});

app.get('/', (req, res) => {
    res.send('This is to handle contact info');
});

app.post('/', jsonParser, (req, res) => {
    const   name = req.body.name,
            email = req.body.email,
            subject = req.body.subject,
            message = req.body.message;

    const   mailOptions = {
        from: email,
        to: 'evannguyentestemail@gmail.com' + ', ' + email,
        subject: 'From portfolio site: ' + subject,
        text: message
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if(err) {
            console.log(err);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    // Contact.create({
    //     name: name,
    //     email: email,
    //     subject: subject,
    //     message: message
    // }, (err, contact) => {
    //     if(err) {
    //         console.log(err);
    //     } else {
    //         console.log(contact);
    //     }
    // });

    res.send({feedback: "Thank you for contacting us. I will contact you asap!"});
});

// Contact.find({},(err, contacts) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(contacts);
//     }
// });

app.listen(port, ()=> {console.log('server is running')});