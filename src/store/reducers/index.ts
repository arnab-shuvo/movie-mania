import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import sessionStorage from 'redux-persist/lib/storage/session';
import genreReducer from './genreReducer';
import userReducer from './userReducer';

const persistConfig = {
	key: 'root',
	storage: sessionStorage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);
const reducers = combineReducers({
	persistedStore: persistedReducer,
	genreReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
