import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import sessionStorage from 'redux-persist/lib/storage/session';
import genreReducer from './genreReducer';
import userReducer from './userReducer';
import configurationReducer from './ConfigurationReducer';

const persistConfig = {
	key: 'root',
	storage: sessionStorage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);
const reducers = combineReducers({
	persistedStore: persistedReducer,
	genreReducer,
	configurationReducer,
});

export default reducers;
