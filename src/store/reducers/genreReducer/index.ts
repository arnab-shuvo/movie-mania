import { ActionTypes } from '../../actionTypes';

const initialState: GenreState = {
	genres: [],
};

const genreReducer = (state = initialState, action: any): GenreState => {
	switch (action.type) {
		case ActionTypes.SET_ALL_GENRE:
			return {
				...state,
				genres: action.payload,
			};
		default:
			return state;
	}
};

export default genreReducer;
