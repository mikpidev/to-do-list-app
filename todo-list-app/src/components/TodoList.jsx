import { useState } from "react";

export default function TodoList({ tasks, onDelete, onUpdate }) {
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEdit = (task) => {
    setEditId(task.id);
    setEditText(task.text);
  };

  const handleUpdate = (id) => {
    if (!editText.trim()) return;
    onUpdate(id, editText);
    setEditId(null);
    setEditText("");
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {editId === task.id ? (
            <>
              <input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button onClick={() => handleUpdate(task.id)}>💾 Guardar</button>
              <button onClick={() => setEditId(null)}>❌ Cancelar</button>
            </>
          ) : (
            <>
              <span>{task.text} — {task.completed ? "✅" : "🕒"}</span>
              <button onClick={() => handleEdit(task)}>✏️ Editar</button>
              <button onClick={() => onDelete(task.id)}>🗑️ Eliminar</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
