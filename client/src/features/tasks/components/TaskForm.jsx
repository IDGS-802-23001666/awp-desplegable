import { useState } from 'react';

export function TaskForm({ onAdd }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title);
    setTitle('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Nueva tarea..."
        aria-label="Nueva tarea"
      />
      <button type="submit">Agregar</button>
    </form>
  );
}
