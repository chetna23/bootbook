import React from 'react';
import PropTypes from 'prop-types';

const HeaderCardComponent = ({name}) => (
    <div className="panel panel-default">
        <div className="panel-body">
            <h2>{name}</h2>
        </div>
    </div>
);

HeaderCardComponent.displayName = 'HeaderCardComponent';

HeaderCardComponent.propTypes = {
    name: PropTypes.string.isRequired
};

export default HeaderCardComponent;
