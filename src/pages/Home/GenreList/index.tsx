import Grid from '@material-ui/core/Grid';
import React, { useEffect } from 'react';
import { BulletList } from 'react-content-loader';
import { GenreListWrapper } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesByGenre } from 'store/actions/genreAction';
import MovieListByGenre from './MovieListByGenre';

type GenreList = {
	genre: GenreMovieInfo;
	id: string;
};

const GenreList: React.FC<GenreList> = ({ genre, id }) => {
	const { movieListByGenre } = useSelector((state: any) => state.genreReducer);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchMoviesByGenre(id));
	}, [dispatch]);

	return (
		<GenreListWrapper container>
			<Grid item md={12} lg={12}>
				<p className='section-header'>{genre.name}</p>
			</Grid>
			<Grid container item md={12} lg={12} spacing={2}>
				{!movieListByGenre[id].movieList.length ? <BulletList /> : <MovieListByGenre movieList={movieListByGenre[id].movieList} />}
			</Grid>
		</GenreListWrapper>
	);
};

export default GenreList;
