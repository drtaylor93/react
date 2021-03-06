import { createStore, applyMiddleware, compose} from 'redux';
import { accountReducer, rootReducer } from './reducers';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    accountReducer,
    composeEnhancer(applyMiddleware()));

export default store;