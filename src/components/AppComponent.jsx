import React                    from 'react';
import PropTypes                from 'prop-types';
import {Provider}               from 'react-redux';

import CreateStatusComponent    from './CreateStatusComponent';

import HeaderCardContainer      from '../containers/HeaderCardContainer';
import StatusesContainer        from '../containers/StatusesContainer';

let statusId = 0;

class AppComponent extends React.Component {
    constructor() {
        super();
        this.state = {statuses: []};
        this.postStatus = this.postStatus.bind(this);
    }

    postStatus(statusText) {
        const {statuses} = this.state;
        const newStatus = {id: statusId++, text: statusText};
        this.setState({statuses: statuses.concat(newStatus)});
    }

    render() {
        const {store} = this.props;

        return (
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
                    <CreateStatusComponent postStatus={this.postStatus} />
                    <StatusesContainer />
                </div>
            </Provider>
        );
    }
}

AppComponent.displayName = 'AppComponent';

AppComponent.propTypes = {
    store: PropTypes.object.isRequired
};

export default AppComponent;
