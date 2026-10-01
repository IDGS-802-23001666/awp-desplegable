import { tasksRepository } from './tasks.repository.js';
import { HttpError } from '../../shared/utils/HttpError.js';

// Capa de negocio: validaciones y reglas.
export const tasksService = {
  list() {
    return tasksRepository.findAll();
  },

  create(title) {
    if (!title || !title.trim()) throw new HttpError(400, 'El título es obligatorio');
    return tasksRepository.create(title.trim());
  },

  update(id, { title, done }) {
    const changes = {};
    if (title !== undefined) changes.title = String(title).trim();
    if (done !== undefined) changes.done = Boolean(done);

    const task = tasksRepository.update(id, changes);
    if (!task) throw new HttpError(404, 'Tarea no encontrada');
    return task;
  },

  remove(id) {
    if (!tasksRepository.remove(id)) throw new HttpError(404, 'Tarea no encontrada');
  },
};
