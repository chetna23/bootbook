import React from 'react';
import HeaderCardComponent from './HeaderCardComponent';
import CreateStatusComponent from './CreateStatusComponent';

class AppComponent extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Bootbook</h1>
                <hr />

                <HeaderCardComponent name="Chetna Aggarwal" />
                <CreateStatusComponent />
            </div>
        );
    }
}

export default AppComponent;