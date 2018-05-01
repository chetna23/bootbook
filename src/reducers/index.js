import {combineReducers} from 'redux';

import NewStatusInput from './NewStatusInput';
import Statuses from './Statuses';
import UserName from './UserName';

export default combineReducers({
    NewStatusInput,
    Statuses,
    UserName
});

