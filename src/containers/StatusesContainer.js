import {connect} from 'react-redux';
import StatusesComponent from '../components/StatusesComponent';

const mapStateToProps = state => ({
    statuses: state.Statuses
});

const mapDispatchToProps = dispatch => ({
    removeStatus: event => dispatch(
        {
            type: 'REMOVE_STATUS',
            statusId: Number(event.currentTarget.dataset.statusId)
        }
    )
});

export default connect(mapStateToProps, mapDispatchToProps)(StatusesComponent);
