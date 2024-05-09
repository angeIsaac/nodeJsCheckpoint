const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "tonEmail69@gmail.com",
        pass: "tonMotDePasse"
    }
});

mailOption = {
    from: "tonEmail@gmail.com",
    to: "emailAmi@gmail.com",
    subject: "envoie du mail",
    text: "bonjour tous le monde"
};

transporter.sendMail(mailOption, (err, info)=>{
    err? console.log(err.message): console.log(`mail envoyer ${info.response}`)
})