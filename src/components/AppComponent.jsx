import React from 'react';
import HeaderCardComponent from './HeaderCardComponent';
import CreateStatusComponent from './CreateStatusComponent';
import StatusesComponent from './StatusesComponent';

class AppComponent extends React.Component {
    constructor() {
        super();

        this.state = {statuses: []};
        this.postStatus = this.postStatus.bind(this);
    }

    postStatus(statusText) {
        const {statuses} = this.state;
        const newStatus = {id: statuses.length, text: statusText}
        this.setState({statuses: statuses.concat(newStatus)});
    }

    render() {
        const {statuses} = this.state;

        return (
            <div className="container">
                <h1>Bootbook</h1>
                <hr />

                <HeaderCardComponent name="Chetna Aggarwal" />
                <CreateStatusComponent postStatus={this.postStatus} />
                <StatusesComponent statuses={statuses} />
            </div>
        );
    }
}

export default AppComponent;
