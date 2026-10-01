// Capa de datos: hoy en memoria, mañana se cambia por una BD sin tocar el resto.
const tasks = [];
let nextId = 1;

export const tasksRepository = {
  findAll() {
    return tasks;
  },

  findById(id) {
    return tasks.find((task) => task.id === id);
  },

  create(title) {
    const task = { id: nextId++, title, done: false };
    tasks.push(task);
    return task;
  },

  update(id, changes) {
    const task = this.findById(id);
    if (!task) return null;
    Object.assign(task, changes);
    return task;
  },

  remove(id) {
    const index = tasks.findIndex((task) => task.id === id);
    if (index === -1) return false;
    tasks.splice(index, 1);
    return true;
  },
};
