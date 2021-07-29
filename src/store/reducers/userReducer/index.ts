import { ActionTypes } from '../../actionTypes';

const initialState: GenreState = {};

const userReducer = (state = initialState, action: any): GenreState => {
	switch (action.type) {
		default:
			return state;
	}
};

export default userReducer;
