import cors from 'cors';
import { ACCEPTED_ORIGINS } from '../constants/constants';

export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) => cors({
    origin: (origin, callback) => {
        //  not allow requests with no origin header like postman
        //  if (!origin) {
        //  callback(new Error('Not allowed by CORS, missing origin, change in corsMiddleware.ts'));
        //  }
        if (!origin || acceptedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
});
