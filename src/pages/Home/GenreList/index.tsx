import Grid from '@material-ui/core/Grid';
import React, { useEffect } from 'react';
import { BulletList } from 'react-content-loader';
import { GenreListWrapper } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesByGenre } from 'store/actions/genreAction';
import MovieListByGenre from './MovieListByGenre';

type IGenreList = {
	genre: GenreMovieInfo;
	id: string;
};

const GenreList: React.FC<IGenreList> = ({ genre, id }) => {
	const { movieListByGenre } = useSelector((state: any) => state.genreReducer);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchMoviesByGenre(id));
	}, [dispatch, id]);

	const movieList = movieListByGenre[id].movieList.slice(0, 5);

	return (
		<GenreListWrapper container>
			<Grid item md={12} lg={12}>
				<p className='section-header'>{genre.name}</p>
			</Grid>
			<Grid container item md={12} lg={12} spacing={2}>
				{!movieListByGenre[id].movieList.length ? <BulletList /> : <MovieListByGenre genreId={id} movieList={movieList} />}
			</Grid>
		</GenreListWrapper>
	);
};

export default GenreList;
