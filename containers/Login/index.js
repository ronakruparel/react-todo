import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../shared/store";
import { UserLogin } from "../../components";
class Login extends React.Component {
  componentDidMount() {
    localStorage.clear("token");
  }

  render() {
    return <UserLogin {...this.props} />;
  }
}

const mapStateToProps = state => {
  return { auth: state.auth };
};

const mapDispatchToProps = dispatch => {
  return {
    login: payload => dispatch(login(payload))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);
