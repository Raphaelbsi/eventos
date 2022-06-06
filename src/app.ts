import * as express from 'express';
import * as bodyParse from 'body-parser';
import * as cors from 'cors';
import * as logger from 'morgan';
import { UserRouter } from './router/user';
import { EventRouter } from './router/event';
import { TickerRouter } from './router/ticket';

const app = express();

app.use(cors());

app.use(bodyParse.json());

app.use(logger('dev'));

app.use('/user', UserRouter);
app.use('/event', EventRouter);
app.use('/ticket', TickerRouter);

app.use('/', (_req, res) => res.send('Api Events'));

export { app };