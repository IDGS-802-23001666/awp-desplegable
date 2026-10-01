import { http } from '@/shared/api/httpClient';

export const tasksApi = {
  getAll: () => http('/tasks'),
  create: (title) => http('/tasks', { method: 'POST', body: { title } }),
  update: (id, changes) => http(`/tasks/${id}`, { method: 'PATCH', body: changes }),
  remove: (id) => http(`/tasks/${id}`, { method: 'DELETE' }),
};
