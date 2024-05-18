import express, { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import { corsMiddleware } from './middlewares/corsMiddleware';
import { EMAIL, EMAIL_ENDPOINT } from './config';
import { RequestInterface } from './interfaces/server';

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
            service: EMAIL.SERVICE,
            port: EMAIL.PORT,
            secure: false,
            host: EMAIL.HOST,
            auth: {
                user: EMAIL.USER,
                pass: EMAIL.PASSWORD
            },
        });

        const mailOptions = {
            from: EMAIL.USER,
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
