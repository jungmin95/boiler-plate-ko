import { combineReducers } from 'redux';
import user from './user_reducer';
// import commnet from './commnet_reducer';

const rootReducer = combineReducers({
    user
    // commnet
})

export default rootReducer;