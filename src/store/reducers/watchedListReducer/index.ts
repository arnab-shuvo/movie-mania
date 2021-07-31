import { ActionTypes } from '../../actionTypes';

const initialState: IWatchList = {
	watchedList: [],
	watchedListIds: [],
};

const watchedListReducer = (state = initialState, action: any): IWatchList => {
	switch (action.type) {
		case ActionTypes.SET_WATCH_LIST:
			return {
				...state,
				watchedList: [...state.watchedList, action.payload],
				watchedListIds: [...state.watchedListIds, action.payload.id],
			};
		default:
			return state;
	}
};

export default watchedListReducer;
