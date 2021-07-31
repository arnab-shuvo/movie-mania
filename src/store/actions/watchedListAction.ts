import { ActionTypes } from '../actionTypes';

export const addWatchedMovie = (data: WatchListMovie) => ({
	type: ActionTypes.SET_WATCH_LIST,
	payload: data,
});
