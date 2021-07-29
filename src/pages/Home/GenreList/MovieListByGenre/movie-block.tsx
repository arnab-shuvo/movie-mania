import React from 'react';
import { useSelector } from 'react-redux';
import { MovieBlock } from './styled';

type Iprops = {
	movie: IMovie;
};

const MovieBlockView: React.FC<Iprops> = ({ movie }) => {
	const { images } = useSelector((state: any) => state.configurationReducer);
	return (
		<MovieBlock bg={`${images.base_url}${'w342'}${movie.poster_path}`}>
			<div className='poster'>
				<div className='description'>
					<div>
						<p className='title'>{movie.title}</p>
						<p>{movie.overview.substring(0, 150) + '...'}</p>
					</div>
				</div>
			</div>
		</MovieBlock>
	);
};

export default MovieBlockView;
