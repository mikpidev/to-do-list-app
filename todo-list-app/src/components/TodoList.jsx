import { useState } from "react";

export default function TodoList({ tasks, onDelete, onUpdate }) {
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEdit = (task) => {
    setEditId(task.id);
    setEditText(task.text);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    onUpdate(editId, editText);
    setEditId(null);
    setEditText("");
  };

  if (!tasks || tasks.length === 0) return <p>No hay tareas</p>;

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {tasks.map((task) => (
        <li
          key={task.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "300px",
            padding: "0.5rem",
            marginBottom: "0.5rem",
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        >
          {editId === task.id ? (
            <form
              onSubmit={handleUpdate}
              style={{ display: "flex", gap: "0.5rem", flex: 1 }}
            >
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                style={{ flex: 1 }}
              />
              <button type="submit">Guardar</button>
            </form>
          ) : (
            <>
              <span>{task.text}</span>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <button onClick={() => handleEdit(task)}>Editar</button>
                <button onClick={() => onDelete(task.id)}>Eliminar</button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
