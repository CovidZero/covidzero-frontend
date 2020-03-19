import { connect } from 'react-redux';
import Dashboard from './Dashboard';

const mapStateToProps = state => ({
  user: state.auth.loggedUser,
});

export default connect(mapStateToProps)(Dashboard);
