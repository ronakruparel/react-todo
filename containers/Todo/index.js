import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getBucketTodos, updateTodo } from "../../shared/store";
import { TodoList } from "../../components";
class Todo extends React.Component {
  componentDidMount() {
    let id = localStorage.getItem("bucket");
    let token = localStorage.getItem("token");

    //Validate User if invalid move out of application
    if (!id || !token) {
      this.props.history.push(`${process.env.PUBLIC_URL}/`);
    }
    //get details of todo associated with bucket id1
    else {
      this.props.getBucketTodos(id);
    }
  }

  toggleTodoStatus = todo => {
    let status = todo.status === "inprogress" ? "done" : "inprogress";
    this.props.updateTodo({ todo_id: todo.todo_id, status });
  };

  render() {
    const { todos } = this.props;

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
            onClick={() =>
              this.props.history.push(`${process.env.PUBLIC_URL}/buckets`)
            }
          >
            Back
          </button>
        </div>
        {!todos.loading && todos.loaded && todos.todos.data.length && (
          <TodoList {...this.props} toggleTodoStatus={this.toggleTodoStatus} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { todos: state.todos };
};
const mapDispatchToProps = dispatch => {
  return {
    getBucketTodos: id => dispatch(getBucketTodos(id)),
    updateTodo: payload => dispatch(updateTodo(payload))
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Todo)
);
