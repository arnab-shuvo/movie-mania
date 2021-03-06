import {
	getMovieDetils,
	getMovieCredits,
	getMovieImages,
	getSimilarMovies,
	getPopularMovies,
} from '../../lib/api';
import { ActionTypes } from '../actionTypes';
import { setLoader } from './loaderAction';
import { requestaddRecent } from './watchedListAction';

export const setMovieDetails = (data: {
	movieDetails: IMovieDetails;
	credits: ICredit;
	imageList: IImages;
	similarMovies: IMovieDetails[];
}) => ({
	type: ActionTypes.SET_MOVIE_DETAILS,
	payload: data,
});

export const fetchMovieDetail = (id: string) => {
	return async (dispatch: any) => {
		dispatch(setLoader(true));
		const movieDetails: IMovieDetails = await getMovieDetils(id);
		const credits: ICredit = await getMovieCredits(id);
		const imageList: IImages = await getMovieImages(id);
		const similarMoviesData: any = await getSimilarMovies(id);
		const similarMovies: IMovieDetails[] = similarMoviesData.results;
		dispatch(
			setMovieDetails({
				movieDetails,
				credits,
				imageList,
				similarMovies,
			}),
		);
		const recentViews: WatchListMovie = {
			id: movieDetails.id,
			overview: movieDetails.overview,
			poster_path: movieDetails.poster_path,
			title: movieDetails.title,
			vote_average: movieDetails.vote_average,
		};
		dispatch(requestaddRecent(recentViews));
		dispatch(setLoader(false));
	};
};

export const setPopularMovieDetails = (popularMovies: IPopularMovies) => ({
	type: ActionTypes.SET_POPULAR_DETAILS,
	payload: popularMovies,
});
export const fetchPopularMovies = () => {
	return async (dispatch: any) => {
		const popularMovies = await getPopularMovies();

		dispatch(setPopularMovieDetails(popularMovies.results.slice(0, 5)));
	};
};
