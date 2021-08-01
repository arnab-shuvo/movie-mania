import { ActionTypes } from '../../actionTypes';

const initialState: IWatchList = {
	watchedList: [],
	watchedListIds: [],
	recentViews: [],
};

const watchedListReducer = (state = initialState, action: any): IWatchList => {
	switch (action.type) {
		case ActionTypes.SET_WATCH_LIST:
			return {
				...state,
				watchedList: [...state.watchedList, action.payload],
				watchedListIds: [...state.watchedListIds, action.payload.id],
			};
		case ActionTypes.SET_RECENT:
			return {
				...state,
				recentViews: [...state.recentViews, action.payload],
			};
		default:
			return state;
	}
};

export default watchedListReducer;
