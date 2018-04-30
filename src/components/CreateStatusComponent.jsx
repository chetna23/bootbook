import React from 'react';
import PropTypes from 'prop-types';

class CreateStatusComponent extends React.Component {
    constructor() {
        super();

        this.state = {newStatusInput: ''};

        this.onChangeStatusInput = this.onChangeStatusInput.bind(this);
        this.onPostClicked = this.onPostClicked.bind(this);
    }

    onChangeStatusInput(event) {
        const value = event.target.value;
        this.setState({newStatusInput: value});
    }

    onPostClicked() {
        const {newStatusInput} = this.state;
        const {postStatus} = this.props;
        postStatus(newStatusInput);

        this.setState({newStatusInput: ''});
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
                        <button type="button" className="btn btn-default"

                            onClick={this.onPostClicked}
                        >
                            Post
                        </button>

                    </span>
                </div>
            </div>
        );
    }
}

CreateStatusComponent.displayName = "CreateStatusComponent"

CreateStatusComponent.propTypes = {
    postStatus: PropTypes.func.isRequired
}

export default CreateStatusComponent;