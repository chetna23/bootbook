import React from 'react';
import PropTypes from 'prop-types';

class CreateStatusComponent extends React.Component {
    constructor() {
        super();

        this.state = {newStatusInput: ''};

        this.onChangeStatusInput = this.onChangeStatusInput.bind(this);
        this.onPostSubmit = this.onPostSubmit.bind(this);
    }

    onChangeStatusInput(event) {
        const value = event.target.value;
        this.setState({newStatusInput: value});
    }

    onPostSubmit(event) {
        event.preventDefault();
        const {newStatusInput} = this.state;
        const {postStatus} = this.props;
        if (!newStatusInput.trim()) {
            return;
        }
        postStatus(newStatusInput);

        this.setState({newStatusInput: ''});
    }

    render() {
        const {newStatusInput} = this.state;
        return (
            <div className="form-group">
                <label>Post Status:</label>
                <form className="input-group" onSubmit={this.onPostSubmit}>
                    <input
                        type="text"
                        id="post-status-input"
                        className="form-control"
                        placeholder="Post a new status"
                        value={newStatusInput}
                        onChange={this.onChangeStatusInput}
                    />

                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-default" disabled={!newStatusInput.trim()}>
                            Post
                        </button>

                    </span>
                </form>
            </div>
        );
    }
}

CreateStatusComponent.displayName = "CreateStatusComponent"

CreateStatusComponent.propTypes = {
    postStatus: PropTypes.func.isRequired
}

export default CreateStatusComponent;