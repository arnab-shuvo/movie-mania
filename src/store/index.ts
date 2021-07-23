import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import reducers from './reducers';

const appEnv = process.env.REACT_APP_ENV || 'production';

const composeEnhancers = ((appEnv === 'development' || appEnv === 'local') && typeof window !== 'undefined' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export const persistor = persistStore(store);
