import nodemailer from 'nodemailer'

const config = {

  host: "smtp.mailtrap.io",
  port: 2525,
  user: "be7a08cceeadbf",
  pass: "bd4882d57ebe72"

}

const transporter = nodemailer.createTransport({

  host: config.host,
  port: config.port,
  secure: false,
  auth: {
    user: config.user,
    pass: config.pass
  },
  tls: {
    rejectUnauthorized: false
  }
})

export { transporter }
