import React from 'react';
import PropTypes from 'prop-types';

const CreateStatusComponent = ({newStatusInput, onChangeStatusInput, postStatus}) => (
    <div className="form-group">
        <label>Post Status:</label>
        <form className="input-group" onSubmit={postStatus}>
            <input
                type="text"
                id="post-status-input"
                className="form-control"
                placeholder="Post a new status"
                value={newStatusInput}
                onChange={onChangeStatusInput}
            />

            <span className="input-group-btn">
                <button type="submit" className="btn btn-default" disabled={!newStatusInput.trim()}>
                    Post
                </button>
            </span>
        </form>
    </div>
);

CreateStatusComponent.displayName = "CreateStatusComponent";

CreateStatusComponent.propTypes = {
    newStatusInput: PropTypes.string.isRequired,
    onChangeStatusInput: PropTypes.func.isRequired,
    postStatus: PropTypes.func.isRequired
};

export default CreateStatusComponent;
