import React, { useState } from "react";

function ReactWidget() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn Micro Frontend", done: true },
    { id: 2, text: "Build awesome apps", done: false },
  ]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, done: false }]);
      setInput("");
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <div style={styles.widget}>
      <h3>⚛️ React Widget Component</h3>
      <div style={styles.inputGroup}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addTodo()}
          placeholder="Add new todo..."
          style={styles.input}
        />
        <button onClick={addTodo} style={styles.button}>
          Add
        </button>
      </div>
      <ul style={styles.list}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            style={{
              ...styles.listItem,
              textDecoration: todo.done ? "line-through" : "none",
              opacity: todo.done ? 0.6 : 1,
            }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  widget: {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "white",
    padding: "20px",
    borderRadius: "8px",
  },
  inputGroup: {
    display: "flex",
    gap: "10px",
    marginBottom: "15px",
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    fontSize: "14px",
  },
  button: {
    background: "white",
    color: "#667eea",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    background: "rgba(255, 255, 255, 0.2)",
    padding: "10px",
    marginBottom: "5px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default ReactWidget;
