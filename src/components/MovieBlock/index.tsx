import React from 'react';
import { useSelector } from 'react-redux';
import { MovieBlock } from './styled';
import { useHistory } from 'react-router';
import { imageBuilder } from 'lib/image-builder';

type Iprops = {
	movie: IMovie;
};

const MovieBlockView: React.FC<Iprops> = ({ movie }) => {
	const history = useHistory();
	const { images } = useSelector((state: any) => state.configurationReducer);

	const goToMovie = (id: number) => {
		history.push(`/movie/${id}`);
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
			</div>
		</MovieBlock>
	);
};

export default MovieBlockView;
