import { tasksService } from './tasks.service.js';

// Capa HTTP: traduce req/res y delega en el servicio.
export const tasksController = {
  list(req, res) {
    res.json(tasksService.list());
  },

  create(req, res) {
    res.status(201).json(tasksService.create(req.body.title));
  },

  update(req, res) {
    res.json(tasksService.update(Number(req.params.id), req.body));
  },

  remove(req, res) {
    tasksService.remove(Number(req.params.id));
    res.status(204).end();
  },
};
