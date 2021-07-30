import React from 'react';
import MovieBlock from 'components/MovieBlock';
import Grid from '@material-ui/core/Grid';
import { GenreMoviesWrapper } from './styled';

type IProps = {
	genreData: IGenreMovie;
	genreId: string;
};

const GenreView: React.FC<IProps> = ({ genreData, genreId }) => {
	const { movieList } = genreData[parseInt(genreId)];
	return (
		<GenreMoviesWrapper>
			<Grid container justifyContent='center'>
				<Grid container item md={7} lg={7} spacing={2}>
					{movieList &&
						movieList.map((movie: IMovie, index: number) => {
							return (
								<Grid item md={3} lg={3}>
									<MovieBlock movie={movie} />
								</Grid>
							);
						})}
				</Grid>
			</Grid>
		</GenreMoviesWrapper>
	);
};

export default GenreView;
