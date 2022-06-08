import { connect } from 'react-redux';
import LoginScreen from './LoginScreen';
import { updateUserState } from '../../actions/user';

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = dispatch => ({
  updateUserState: data => dispatch(updateUserState(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
