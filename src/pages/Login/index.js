import Login from './Login';
import { connect } from "react-redux";
import { login } from "../../store/actions/auth";

const mapDispatchToProps = {
  login,
};

export default connect(null, mapDispatchToProps)(Login);
