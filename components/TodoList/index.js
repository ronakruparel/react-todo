import React from "react";
import "./style.css";
export default function TodoList({ todos, toggleTodoStatus }) {
  return (
    <div>
      {todos.todos.data.map(todo => {
        return (
          todo.title && (
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
          )
        );
      })}
    </div>
  );
}
