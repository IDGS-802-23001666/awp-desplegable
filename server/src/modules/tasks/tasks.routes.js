import { Router } from 'express';
import { tasksController } from './tasks.controller.js';

export const tasksRouter = Router();

tasksRouter.get('/', tasksController.list);
tasksRouter.post('/', tasksController.create);
tasksRouter.patch('/:id', tasksController.update);
tasksRouter.delete('/:id', tasksController.remove);
