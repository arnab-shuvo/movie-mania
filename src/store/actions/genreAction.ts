import { get, getMovieByGenreId } from '../../lib/api';
import { ActionTypes } from '../actionTypes';

export const setAllGenreMovie = (data: IGenreMovie) => {
	return {
		type: ActionTypes.SET_ALL_GENRE_MOVIE,
		payload: data,
	};
};
export const fetchAllgenre = () => {
	return async (dispatch: any) => {
		const data = await get('genre/movie/list');
		const genreIds: IGenreMovie = {};
		data.genres.forEach((el: IGenre) => {
			genreIds[el.id] = {
				name: el.name,
				loading: true,
				movieList: [],
			};
		});
		dispatch(setAllGenreMovie(genreIds));
	};
};
export const fetchMoviesByGenre = (id: string) => {
	return async (dispatch: any, getState: any) => {
		const { genreReducer } = getState();
		const data = await getMovieByGenreId(id);
		const { movieListByGenre } = genreReducer;
		movieListByGenre[id].movieList = data.results.length > 5 ? data.results.slice(0, 5) : data.results.length;
		dispatch(setAllGenreMovie(movieListByGenre));
	};
};
