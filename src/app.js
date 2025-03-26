import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({ limit: '16kb' })) //Data from forms
app.use(express.urlencoded({ extended: true, limit: "16kb" })) //Data from URL
app.use(express.static('public')) //Serving static files
app.use(cookieParser()) //Parsing cookies

export { app }