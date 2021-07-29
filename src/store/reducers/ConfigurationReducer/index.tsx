import { ActionTypes } from '../../actionTypes';

const initialState: IConfiguration = {};

const configurationReducer = (state = initialState, action: any): IConfiguration => {
	switch (action.type) {
		case ActionTypes.SET_ALL_CONFIGURATION:
			return action.payload;
		default:
			return state;
	}
};

export default configurationReducer;
