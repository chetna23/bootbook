import React        from 'react';
import PropTypes    from 'prop-types';
import Immutable    from 'immutable';

const StatusesComponent = ({statuses, removeStatus}) => (
    <div>
        {statuses.length === 0 &&
        <div className="well well-sm">
            No Statuses to display
        </div>
        }
        {statuses.reverse().toArray().map(status => (
            <div
                key={status.id} className="list-group-item"
            >
                {status.text}
                <button type="button"
                    classID="close"
                    aria-label="Remove status"
                    data-status-id={status.id}
                    onClick={removeStatus}
                >
                    <span className="fa fa-close" aria-hidden="true" />
                </button>
            </div>
        ))}
    </div>
);

StatusesComponent.displayName = 'StatusesComponent';

StatusesComponent.propTypes = {
    statuses: PropTypes.instanceOf(Immutable.OrderedMap).isRequired,
    removeStatus: PropTypes.func.isRequired
};

export default StatusesComponent;
