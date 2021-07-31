import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';
import genreReducer from './genreReducer';
import watchedListReducer from './watchedListReducer';
import configurationReducer from './ConfigurationReducer';
import movieReducer from './MovieReducer';

const persistConfig = {
	key: 'root',
	storage,
};

const persistedReducer = persistReducer(persistConfig, watchedListReducer);
const reducers = combineReducers({
	watchedListReducer: persistedReducer,
	genreReducer,
	configurationReducer,
	movieReducer,
});

export default reducers;
