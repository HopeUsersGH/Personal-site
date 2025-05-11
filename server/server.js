const express = require('express')
const path = require('path')
const nodemailer = require('nodemailer')
require('dotenv').config()

const server = express()
const PORT = process.env.PORT || 3000

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

server.use(express.static(path.join(__dirname, '..')))
server.use(express.json());

server.post('/api/feedback', async (req, res) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.mail.ru",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.SMTP_PASS
            }
        });

        const { name, email, message } = req.body
        console.log(req.body)

        await transporter.sendMail({
            from: process.env.EMAIL,
            to: process.env.EMAIL,
            subject: "Personal Site",
            html: `
                <h1>Пользователь: <span style="color:#0077ff">${name}<span/></h1>
                <p>Почта: <b>${email}</b></p>
                <p>Сообщение: <br><br><span style="font-size: 20px;font-weight: 600;">${message}<span/></p>
                `,
        })

        return res.status(200).send({
            status: 200,
            message: "Successfully sent feedback",
        })

    } catch (e) {
        return res.status(500).send({
            status: 500,
            message: e.message,
        })
    }
})

server.listen(PORT, () => {
    console.log(`Server started on ${PORT}`)
})