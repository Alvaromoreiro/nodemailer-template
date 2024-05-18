import express, { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import { corsMiddleware } from './middlewares/corsMiddleware';
import { EMAIL_ENDPOINT } from './constants/constants';
import { RequestInterface } from './interfaces/server';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(corsMiddleware());
// Disable the default Express header
app.disable('x-powered-by');

app.use(express.json());

app.post(EMAIL_ENDPOINT, async (req: Request<RequestInterface>, res: Response) => {
    const { to, subject, text } = req.body;

    if (!to || !subject || !text) {
        return res.status(400).send({ error: 'Missing required fields' });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: process.env.EMAIL_SERVICE,
            port: Number(process.env.EMAIL_PORT),
            secure: false,
            host: process.env.EMAIL_HOST,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to,
            subject,
            text
        };

        const info = await transporter.sendMail(mailOptions);

        return res.send({ message: 'Email sent successfully', info });
    } catch (error) {
        console.log('Failed to send email', error)
        return res.status(500).send({ error: 'Failed to send email', details: error });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
