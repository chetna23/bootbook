export default (state = '', action) => {
    switch (action.type) {
        case 'ADD_STATUS':
            return '';
        case 'SET_STATUS_INPUT':
            return action.value;
        default:
            return state;
    }
};
