import React from "react";
export default class UserLogin extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleLogin = e => {
    e.preventDefault();
    this.props.login(this.state).then(res => {
      if (res.payload && res.payload.status === 0) {
        localStorage.setItem("token", res.payload.data.token);
        this.props.history.push(`${process.env.PUBLIC_URL}/dashboard`);
      }
    });
  };
  render() {
    const { username, password } = this.state;
    return (
      <div>
        <label>Username</label>
        <input
          type="text"
          name="username"
          onChange={this.handleChange}
          value={username}
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={this.handleChange}
          value={password}
        />
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}
