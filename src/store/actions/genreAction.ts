import { get, getMovieByGenreId } from '../../lib/api';
import { ActionTypes } from '../actionTypes';
import { setLoader } from './loaderAction';

export const setAllGenreMovie = (data: IGenreMovie) => {
	return {
		type: ActionTypes.SET_ALL_GENRE_MOVIE,
		payload: data,
	};
};
export const fetchAllgenre = () => {
	return async (dispatch: any) => {
		dispatch(setLoader(true));
		const data = await get('genre/movie/list');
		const genreIds: IGenreMovie = {};
		data.genres.forEach((el: IGenre) => {
			genreIds[el.id] = {
				name: el.name,
				movieList: [],
			};
		});
		dispatch(setAllGenreMovie(genreIds));
		dispatch(setLoader(false));
	};
};
export const fetchMoviesByGenre = (id: string) => {
	return async (dispatch: any, getState: any) => {
		const { genreReducer } = getState();
		const data = await getMovieByGenreId(id);
		const { movieListByGenre } = genreReducer;
		movieListByGenre[id].movieList =
			data.results.length > 10 ? data.results.slice(0, 10) : data.results;
		dispatch(setAllGenreMovie(movieListByGenre));
	};
};
export const fetchMoviesOfSingleGenre = (id: string) => {
	return async (dispatch: any, getState: any) => {
		const { genreReducer } = getState();
		const data = await getMovieByGenreId(id);
		const { movieListByGenre } = genreReducer;
		const result = data.results.length > 10 ? data.results.slice(0, 10) : data.results;

		movieListByGenre[id].movieList = result.sort(
			(a: IMovie, b: IMovie) => b.vote_average - a.vote_average,
		);
		dispatch(setAllGenreMovie(movieListByGenre));
	};
};
