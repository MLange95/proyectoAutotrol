
const nodemailer = require('nodemailer');
const { EMAIL_ADMIN, PASS_ADMIN } = process.env;

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    service: 'marianlange01@gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: EMAIL_ADMIN,
        pass: PASS_ADMIN
    },
    tls: {
        rejectUnauthorized: false
    }
});

const genericEmail = async(obj) => {
    try {
        const body = {
            to: obj.email,
            subject: obj.subject,
            html: obj.template
        }
        const info = await transporter.sendMail(body);
        console.log(info.messageId);
        return info;

    } catch (error) {
        throw error;
    }
}

const failures = async(obj) => {
    try {
        const subject = 'Reporte de Falla Estación Pueyredón';
        const htmlTemplate = `
        <html>
            <p>
                ${obj.falla}
            </p>
        <html>`;

        const info = await genericEmail({ 
            email: obj.email,
            subject: subject,
            template: htmlTemplate
        });

        return info;

    } catch (error) {
        throw error;
    }
}

module.exports = {
    genericEmail,
    failures
}
