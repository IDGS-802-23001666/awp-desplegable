export function TaskItem({ task, onToggle, onRemove }) {
  return (
    <li className={`task-item ${task.done ? 'task-item--done' : ''}`}>
      <label>
        <input type="checkbox" checked={task.done} onChange={() => onToggle(task)} />
        <span>{task.title}</span>
      </label>
      <button className="task-item__remove" onClick={() => onRemove(task.id)} aria-label="Eliminar">
        ✕
      </button>
    </li>
  );
}
