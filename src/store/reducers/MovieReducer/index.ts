import { ActionTypes } from '../../actionTypes';

const initialState: IMovieReducer = {};

const movieReducer = (state = initialState, action: any): IMovieReducer => {
	switch (action.type) {
		case ActionTypes.SET_MOVIE_DETAILS:
			return {
				...state,
				movieDetails: action.payload.movieDetails,
				credits: action.payload.credits,
				imageList: action.payload.imageList,
				similarMovies: action.payload.similarMovies,
			};
		case ActionTypes.SET_POPULAR_DETAILS:
			return {
				...state,
				popularMovies: action.payload,
			};
		default:
			return state;
	}
};

export default movieReducer;
