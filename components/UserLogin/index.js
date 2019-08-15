import React from "react";
import "./style.css";
export default class UserLogin extends React.Component {
  state = {
    username: "",
    password: ""
  };

  //on change handler
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //handle login click
  handleLogin = e => {
    e.preventDefault();

    // set token in local storage
    this.props.login(this.state).then(res => {
      if (res.payload && res.payload.status === 0) {
        localStorage.setItem("token", res.payload.data.token);
        this.props.history.push(`${process.env.PUBLIC_URL}/buckets`);
      }
    });
  };
  render() {
    const { username, password } = this.state;
    return (
      <div className="loginWrapper">
        <form>
          <label>Username : </label>
          <input
            type="text"
            name="username"
            onChange={this.handleChange}
            value={username}
          />
          <br />
          <br />
          <label>Password : </label>
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            value={password}
          />
          <br />
          <button onClick={this.handleLogin}>Login</button>
        </form>
      </div>
    );
  }
}
