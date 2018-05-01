import React                    from 'react';
import PropTypes                from 'prop-types';
import {Provider}               from 'react-redux';

import HeaderCardContainer      from '../containers/HeaderCardContainer';
import StatusesContainer        from '../containers/StatusesContainer';
import CreateStatusContainer    from '../containers/CreateStatusContainer';

const AppComponent = ({store}) => (
    <Provider store={store}>
        <div className="container">
            <div>
                <span className="h1">
                    <span className="label label-primary">
                        <span className="fa fa-book" aria-hidden="true" />&nbsp;&nbsp;
                        Bootbook
                    </span>
                </span>
            </div>
            <hr />

            <HeaderCardContainer />
            <CreateStatusContainer />
            <StatusesContainer />
        </div>
    </Provider>
);

AppComponent.displayName = 'AppComponent';

AppComponent.propTypes = {
    store: PropTypes.object.isRequired
};

export default AppComponent;
