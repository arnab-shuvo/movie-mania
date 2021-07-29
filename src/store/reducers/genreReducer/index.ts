import { ActionTypes } from '../../actionTypes';

const initialState: GenreState = {};

const genreReducer = (state = initialState, action: any): GenreState => {
	switch (action.type) {
		case ActionTypes.SET_ALL_GENRE_MOVIE:
			return {
				...state,
				movieListByGenre: action.payload,
			};
		default:
			return state;
	}
};

export default genreReducer;
