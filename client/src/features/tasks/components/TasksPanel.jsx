import { useTasks } from '../hooks/useTasks';
import { TaskForm } from './TaskForm';
import { TaskList } from './TaskList';

export function TasksPanel() {
  const { tasks, loading, error, addTask, toggleTask, removeTask } = useTasks();

  return (
    <section className="card">
      <TaskForm onAdd={addTask} />
      {error && <p className="error">{error}</p>}
      {loading ? (
        <p className="empty">Cargando...</p>
      ) : (
        <TaskList tasks={tasks} onToggle={toggleTask} onRemove={removeTask} />
      )}
    </section>
  );
}
