import React        from 'react';
import PropTypes    from 'prop-types';

const StatusesComponent = ({statuses, removeStatus}) => (
    <div>
        {statuses.length === 0 &&
        <div className="well well-sm">
            No Statuses to display
        </div>
        }
        {statuses.map(status => (
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

const statusShape = PropTypes.shape({
    id: PropTypes.number.isRequired, text: PropTypes.string.isRequired});

StatusesComponent.propTypes = {
    statuses: PropTypes.arrayOf(statusShape).isRequired,
    removeStatus: PropTypes.func.isRequired
};

export default StatusesComponent;
