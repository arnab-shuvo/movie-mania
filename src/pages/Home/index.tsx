import React from 'react';
import { useSelector } from 'react-redux';
import GenreList from './GenreList';
import Grid from '@material-ui/core/Grid';

const Home: React.FC = () => {
	const { movieListByGenre } = useSelector((state: any) => state.genreReducer);

	return (
		<Grid container justifyContent={'center'}>
			<Grid item md={12} lg={12}>
				as
			</Grid>
			<Grid item md={10} lg={10}>
				{movieListByGenre &&
					Object.keys(movieListByGenre).map((id: string, index: number) => {
						return <GenreList key={index} id={id} genre={movieListByGenre[id]} />;
					})}
			</Grid>
		</Grid>
	);
};

export default Home;
