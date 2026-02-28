const nodeMailer = require("nodemailer");



const transporter = nodeMailer.createTransport({
    host: "smtp-relay.brevo.com",
    port : 587,
    secure : false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false, // ⚠️ This disables SSL certificate checks
    },
  });

export default transporter;