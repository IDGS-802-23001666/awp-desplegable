import { TaskItem } from './TaskItem';

export function TaskList({ tasks, onToggle, onRemove }) {
  if (tasks.length === 0) return <p className="empty">No hay tareas todavía.</p>;

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} onRemove={onRemove} />
      ))}
    </ul>
  );
}
