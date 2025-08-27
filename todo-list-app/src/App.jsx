import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [tasks, setTasks] = useState([]);

  // Cargar tareas al iniciar
  useEffect(() => {
    const fetchTasks = async () => {
      const snapshot = await getDocs(collection(db, "tasks"));
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTasks(data);
    };

    fetchTasks();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f9f9f9",
        color: "#333",
      }}
    >
      <h1>📝 Todo List</h1>
      <TodoForm onTaskAdded={setTasks} />
      <TodoList tasks={tasks} />
    </div>
  );
}

export default App;
