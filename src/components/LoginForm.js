import React from "react";
import PropTypes from "prop-types";
class LoginForm extends React.Component {

  state = {
    data: {
      email: "",
      password: ""
    },
    loading: false,
    errors: {}
  };

  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onSubmit = () => {
    if (Object.keys(this.state.errors).length === 0) {
      this.setState({ loading: true });
      this.props
        .submit(this.state.data)
        .catch(err =>
          this.setState({ errors: err.response.data.errors, loading: false })
        );
    }
  };

  render() {
    const { data, errors, loading } = this.state;

    return (
      <form onSubmit={this.onSubmit} loading={loading}>
        {errors.global && (
            <p>{errors.global}</p>
        )}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="example@example.com"
          value={data.email}
          onChange={this.onChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Make it secure"
          value={data.password}
          onChange={this.onChange}
        />
        <button primary>Login</button>
      </form>
    );
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default LoginForm;
