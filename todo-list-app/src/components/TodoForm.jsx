import { useState } from "react";

export default function TodoForm({ onAddTask }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    onAddTask(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "0.5rem" }}>
      <input
        placeholder="Nueva tarea"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}
