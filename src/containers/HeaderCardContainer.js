import {connect} from 'react-redux';
import HeaderCardComponent from '../components/HeaderCardComponent';

const mapStateToProps = state => ({
    name: state.UserName
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderCardComponent);
