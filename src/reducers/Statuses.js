import Immutable from 'immutable';


const statuses = [
    [0, {id: 0, text: 'My first Status'}],
    [1, {id: 1, text: 'My Second Status'}]];

let statusId = 2;

export default (state = Immutable.OrderedMap(statuses), action) => {
    switch (action.type) {
        case 'ADD_STATUS': {
            const statusText = action.text;
            const newStatus = {id: statusId++, text: statusText};
            return state.set(newStatus.id, newStatus);
        }
        case 'REMOVE_STATUS': {
            console.log(action);
            return state.delete(action.statusId);
        }
        default:
            return state;

    }
};
