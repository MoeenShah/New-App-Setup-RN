import { connect } from 'react-redux';
import HomeScreen from './HomeScreen';
import { updateUserState } from '../../actions/user';

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = dispatch => ({
  updateUserState: data => dispatch(updateUserState(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
