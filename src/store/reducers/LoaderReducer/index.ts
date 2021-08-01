import { ActionTypes } from '../../actionTypes';

const initialState: ILoader = {
	isLoading: false,
};

const loaderReducer = (state = initialState, action: any): ILoader => {
	switch (action.type) {
		case ActionTypes.SET_LOADER:
			return {
				...state,
				isLoading: action.payload,
			};
		default:
			return state;
	}
};

export default loaderReducer;
