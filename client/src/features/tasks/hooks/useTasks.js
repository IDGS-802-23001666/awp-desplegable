import { useEffect, useState } from 'react';
import { tasksApi } from '../api/tasksApi';

export function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const run = async (action) => {
    setError(null);
    try {
      await action();
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    run(async () => setTasks(await tasksApi.getAll())).finally(() => setLoading(false));
  }, []);

  const addTask = (title) =>
    run(async () => {
      const task = await tasksApi.create(title);
      setTasks((prev) => [...prev, task]);
    });

  const toggleTask = (task) =>
    run(async () => {
      const updated = await tasksApi.update(task.id, { done: !task.done });
      setTasks((prev) => prev.map((t) => (t.id === updated.id ? updated : t)));
    });

  const removeTask = (id) =>
    run(async () => {
      await tasksApi.remove(id);
      setTasks((prev) => prev.filter((t) => t.id !== id));
    });

  return { tasks, loading, error, addTask, toggleTask, removeTask };
}
