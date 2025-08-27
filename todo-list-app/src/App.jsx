import { useState } from "react";
import TodoForm from "./components/TodoForm"; // Ajusta la ruta si está en "components/TodoForm"
import TodoList from "./components/TodoList"; // Ajusta la ruta si está en "components/TodoList"

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = (id, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  };

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

      <TodoForm onAddTask={addTask} />

      <TodoList
        tasks={tasks}
        onDelete={deleteTask}
        onUpdate={updateTask}
      />
    </div>
  );
}

export default App;