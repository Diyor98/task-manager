const sgMail = require('@sendgrid/mail')
const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'd.mukhamedkhanov98@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'd.mukhamedkhanov98@gmail.com',
        subject: 'We are sorry you are leaving us',
        text: `Goodbye, ${name}.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}