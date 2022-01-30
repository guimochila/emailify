import express from 'express';
import cookieSession from 'cookie-session';
import passport from 'passport';
import 'dotenv/config';
import cors from 'cors';
import { json, urlencoded } from 'body-parser';
import { getRoutes } from './routes';

const app = express();

app.use(
  cors({
    credentials: true,
    origin: true,
  }),
);

app.use(urlencoded({ extended: true }));
app.use(json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_SECRET ?? ''],
  }),
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/api', getRoutes());

export default app;
