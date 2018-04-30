import React from 'react';
import HeaderCardComponent from './HeaderCardComponent';
import CreateStatusComponent from './CreateStatusComponent';
import StatusesComponent from './StatusesComponent';

let statusId = 0;

class AppComponent extends React.Component {
    constructor() {
        super();

        this.state = {statuses: []};
        this.postStatus = this.postStatus.bind(this);
        this.removeStatus = this.removeStatus.bind(this);
    }

    postStatus(statusText) {
        const {statuses} = this.state;
        const newStatus = {id: statusId++, text: statusText}
        this.setState({statuses: statuses.concat(newStatus)});
    }

    removeStatus(event) {
        const {statuses} = this.state;
        const statusToRemoveId = Number(event.currentTarget.dataset.statusId);
        const updatedStatuses = statuses.filter(status => {
            if (status.text === 'DO NOT REMOVE') {
                return true;
            }
            return status.id !== statusToRemoveId;
        });
        this.setState({statuses: updatedStatuses});
    }
    render() {
        const {statuses} = this.state;

        return (
            <div className="container">
                <h1>Bootbook</h1>
                <hr />

                <HeaderCardComponent name="Chetna Aggarwal" />
                <CreateStatusComponent postStatus={this.postStatus} />
                <StatusesComponent statuses={statuses} removeStatus={this.removeStatus} />
            </div>
        );
    }
}

export default AppComponent;
