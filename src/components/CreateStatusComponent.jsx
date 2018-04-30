import React from 'react';

class CreateStatusComponent extends React.Component {
    constructor() {
        super();

        this.state = {newStatusInput: ''};

        this.onChangeStatusInput = this.onChangeStatusInput.bind(this);
    }

    onChangeStatusInput(event) {
        const value = event.target.value;
        this.setState({newStatusInput: value});
    }

    render() {
        const {newStatusInput} = this.state;
        return (
            <div className="form-group">
                <label>Post Status:</label>
                <div className="input-group">
                    <input
                        type="text"
                        id="post-status-input"
                        className="form-control"
                        placeholder="Post a new status"
                        value={newStatusInput}
                        onChange={this.onChangeStatusInput}
                    />

                    <span className="input-group-btn">
                        <button type="button" className="btn btn-default">
                            Post
                        </button>

                    </span>
                </div>
            </div>
        );
    }
}

CreateStatusComponent.displayName = "CreateStatusComponent"

export default CreateStatusComponent;