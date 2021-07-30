import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import GenreView from './genre-view';
import Grid from '@material-ui/core/Grid';
import { fetchMoviesOfSingleGenre } from 'store/actions/genreAction';
type IParams = {
	genreId: string;
};

const Genre: React.FC = () => {
	const dispatch = useDispatch();
	const { genreId } = useParams<IParams>();
	const { name, movieListByGenre } = useSelector((state: any) => state.genreReducer);

	useEffect(() => {
		if (movieListByGenre && !movieListByGenre[genreId].movieList.length) {
			dispatch(fetchMoviesOfSingleGenre(genreId));
		}
	}, [movieListByGenre, genreId, dispatch]);

	return <>{movieListByGenre && <GenreView genreData={movieListByGenre} genreId={genreId} />}</>;
};

export default Genre;
