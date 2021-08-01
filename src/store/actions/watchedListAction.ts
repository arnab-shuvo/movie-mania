import { ActionTypes } from '../actionTypes';

export const addWatchedMovie = (data: WatchListMovie) => ({
	type: ActionTypes.SET_WATCH_LIST,
	payload: data,
});
const addRecentlyViewedMovie = (data: { movie: WatchListMovie; id: number }) => ({
	type: ActionTypes.SET_RECENT,
	payload: data,
});
export const requestaddRecent = (movie: WatchListMovie) => {
	return async (disptach: any, getState: any) => {
		const { recentViewsId } = getState().watchedListReducer;
		if (!recentViewsId.includes(movie.id)) {
			disptach(
				addRecentlyViewedMovie({
					movie,
					id: movie.id,
				}),
			);
		}
	};
};
