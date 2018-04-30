import React from 'react';
import HeaderCardComponent from './HeaderCardComponent';
import CreateStatusComponent from './CreateStatusComponent';

class AppComponent extends React.Component {
    constructor() {
        super();

        this.state = {statuses: []};
        this.postStatus = this.postStatus.bind(this);
    }

    postStatus(statusText) {
        const {statuses} = this.state;
        this.setState({statuses: statuses.concat(statusText)});
    }

    render() {
        const {statuses} = this.state;

        return (
            <div className="container">
                <h1>Bootbook</h1>
                <hr />

                <HeaderCardComponent name="Chetna Aggarwal" />
                <CreateStatusComponent postStatus={this.postStatus} />
                Statuses: {JSON.stringify(statuses)}
            </div>
        );
    }
}

export default AppComponent;
