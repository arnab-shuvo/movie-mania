import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MovieBlock } from './styled';
import { useHistory } from 'react-router';
import { imageBuilder } from 'lib/image-builder';
import { addWatchedMovie } from 'store/actions/watchedListAction';

type Iprops = {
	movie: IMovie | WatchListMovie;
};

const MovieBlockView: React.FC<Iprops> = ({ movie }) => {
	const history = useHistory();
	const { images } = useSelector((state: any) => state.configurationReducer);
	const { watchedListIds } = useSelector((state: any) => state.watchedListReducer);
	const dispatch = useDispatch();
	const goToMovie = (id: number) => {
		history.push(`/movie/${id}`);
	};

	const addToWatchList = (
		e: React.MouseEvent<HTMLButtonElement>,
		movie: IMovie | WatchListMovie,
	) => {
		e.stopPropagation();
		dispatch(addWatchedMovie(movie));
	};
	return (
		<MovieBlock
			bg={imageBuilder(images.base_url, 'w342', movie.poster_path)}
			onClick={() => goToMovie(movie.id)}>
			<div className='poster'>
				<div className='description'>
					<div>
						<p className='title'>{movie.title}</p>
						<p>{movie.overview.substring(0, 150) + '...'}</p>
					</div>
				</div>
				<div className='rating'>
					<p>{movie.vote_average}</p>
				</div>
				<button
					className={`add-to-watch ${
						watchedListIds.includes(movie.id) ? 'disabled' : ''
					}`}
					onClick={(e: React.MouseEvent<HTMLButtonElement>) => addToWatchList(e, movie)}>
					+
				</button>
			</div>
		</MovieBlock>
	);
};

export default MovieBlockView;
