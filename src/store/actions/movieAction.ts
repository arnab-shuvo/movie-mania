import { getMovieDetils, getMovieCredits, getMovieImages, getSimilarMovies } from '../../lib/api';
import { ActionTypes } from '../actionTypes';

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
	};
};
