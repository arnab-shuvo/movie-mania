import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllgenre } from '../../store/actions/genreAction';
import GenreList from './GenreList';
import Grid from '@material-ui/core/Grid';

const Home: React.FC = () => {
	const dispatch = useDispatch();
	const { movieListByGenre } = useSelector((state: any) => state.genreReducer);

	useEffect(() => {
		dispatch(fetchAllgenre());
	}, [dispatch]);
	return (
		<Grid container justifyContent={'center'}>
			<Grid item md={7} lg={7}>
				{movieListByGenre &&
					Object.keys(movieListByGenre).map((id: string) => {
						return <GenreList id={id} genre={movieListByGenre[id]} />;
					})}
			</Grid>
		</Grid>
	);
};

export default Home;
