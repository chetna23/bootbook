import {connect} from 'react-redux';
import CreateStatusComponent from '../components/CreateStatusComponent';
import {postStatus} from '../actions';

const mapStateToProps = state => ({
    newStatusInput: state.NewStatusInput
});

const mapDispatchToProps = dispatch => ({
    onChangeStatusInput: event => dispatch(
        {
            type: 'SET_STATUS_INPUT',
            value: event.target.value
        }
    ),
    postStatus: event => {
        event.preventDefault();
        dispatch(postStatus());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateStatusComponent);
