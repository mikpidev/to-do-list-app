import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

export default function TodoForm({ onTaskAdded }) {
  const [task, setTask] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    await addDoc(collection(db, "tasks"), {
      text: task,
      completed: false,
      createdAt: new Date(),
    });

    // Actualizar lista
    const snapshot = await getDocs(collection(db, "tasks"));
    const updatedTasks = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    onTaskAdded(updatedTasks);
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
