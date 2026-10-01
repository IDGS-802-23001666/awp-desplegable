import path from 'node:path';
import express from 'express';
import cors from 'cors';
import { env } from './config/env.js';
import { apiRouter } from './routes.js';
import { notFound } from './shared/middlewares/notFound.js';
import { errorHandler } from './shared/middlewares/errorHandler.js';

export const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', apiRouter);
app.use('/api', notFound);

// En producción el mismo servidor entrega el frontend (React compilado).
app.use(express.static(env.clientDist));
app.get('*', (req, res) => res.sendFile(path.join(env.clientDist, 'index.html')));

app.use(errorHandler);
