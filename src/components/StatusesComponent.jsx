import React        from 'react';
import PropTypes    from 'prop-types';

const StatusesComponent = ({statuses}) => (
    <div>
        {statuses.map(status => (
            <div
                key={status.id} className="list-group-item"
            >
                {status.text}
            </div>
        ))}
    </div>
);

StatusesComponent.displayName = 'StatusesComponent';

const statusShape = PropTypes.shape({
    id: PropTypes.number.isRequired, text: PropTypes.string.isRequired});

StatusesComponent.propTypes = {
    statuses: PropTypes.arrayOf(statusShape).isRequired
};

export default StatusesComponent;
