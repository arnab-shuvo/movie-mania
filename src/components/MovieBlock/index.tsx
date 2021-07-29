import React from 'react';
import { useSelector } from 'react-redux';
import { MovieBlock } from './styled';
import { useHistory } from 'react-router';

type Iprops = {
	movie: IMovie;
};

const MovieBlockView: React.FC<Iprops> = ({ movie }) => {
	const history = useHistory();
	const { images } = useSelector((state: any) => state.configurationReducer);
	const posterUrl = movie.poster_path ? `${images.base_url}${'w342'}${movie.poster_path}` : 'https://fireteller.com/wp-content/uploads/2020/09/Poster_Not_Available2.jpg';
	const goToMovie = (id: number) => {
		history.push(`/movie/${id}`);
	};
	return (
		<MovieBlock bg={`${posterUrl}`} onClick={() => goToMovie(movie.id)}>
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
