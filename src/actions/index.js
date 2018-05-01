const setStatusInput = value => ({
    type: 'SET_STATUS_INPUT',
    value
});

export const postStatus = () => (dispatch, getState) => {
    const text = getState().NewStatusInput;

    dispatch(
        {
            type: 'ADD_STATUS',
            text
        }
    );
};
