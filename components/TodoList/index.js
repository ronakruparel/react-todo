import React from "react";
import "./style.css";
export default function TodoList({ todos, history, toggleTodoStatus }) {
  return (
    <div>
      <div className="header">
        <h1>To-do Application</h1>
      </div>
      <div style={{ textAlign: "center" }}>
        <h2>List of Todos</h2>
      </div>
      <div>
        <button className="addBucket">Add New Todo</button>
        <button
          className="back"
          onClick={() => history.push(`${process.env.PUBLIC_URL}/buckets`)}
        >
          Back
        </button>
      </div>
      {todos.todos.data.map(todo => {
        return (
          <div key={todo.todo_id} className="todoListWrapper">
            <span onClick={() => toggleTodoStatus(todo)}>
              Mark as {todo.status === "inprogress" ? "Done" : "Inprogress"}
            </span>
            <br />
            <label>{todo.title}</label>
            <br />
            <label>Status :</label>
            <span>{todo.status}</span>
          </div>
        );
      })}
    </div>
  );
}
