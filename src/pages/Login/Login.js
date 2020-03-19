import React from "react";
import PropTypes from "prop-types";
import LoginForm from "../../components/LoginForm";


class LoginPage extends React.Component {
  submit = data =>
    this.props.login(data).then(() => this.props.history.push("/dashboard"));

  render() {
    return (
      <div>
        <h1>Login page</h1>

        <LoginForm submit={this.submit} />

      </div>
    );
  }
}

LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired
};

export default LoginPage;
