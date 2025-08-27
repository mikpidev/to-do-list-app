export default function TodoList({ tasks }) {
    return (
      <ul style={{ listStyle: "none", padding: 0, marginTop: "1rem" }}>
        {tasks.map((task) => (
          <li key={task.id} style={{ marginBottom: "0.5rem" }}>
            {task.text} — {task.completed ? "✅" : "🕒"}
          </li>
        ))}
      </ul>
    );
  }
  