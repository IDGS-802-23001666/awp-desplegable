import { Router } from 'express';
import { tasksRouter } from './modules/tasks/tasks.routes.js';

// Punto único donde se registran los módulos de la API.
export const apiRouter = Router();

apiRouter.get('/health', (req, res) => res.json({ status: 'ok' }));
apiRouter.use('/tasks', tasksRouter);
