import Grid from '@material-ui/core/Grid';
import React from 'react';
import MovieBlockView from 'components/MovieBlock';
import { image } from './seemore-img';
import { SeeMoreBlock } from './styled';
import { useHistory } from 'react-router';

type IProps = {
	movieList: IMovie[];
	genreId: string;
};

const MovieListByGenre: React.FC<IProps> = ({ movieList, genreId }) => {
	const history = useHistory();
	const goToGenre = (id: string) => {
		history.push(`/genre/${id}`);
	};
	return (
		<>
			{movieList.map((movie: IMovie, index: number) => {
				return (
					<Grid key={index} item md={3} lg={3} sm={6} xs={12}>
						<MovieBlockView movie={movie} />
					</Grid>
				);
			})}

			<Grid item md={3} lg={3} sm={6} xs={12}>
				<SeeMoreBlock bg={image} onClick={() => goToGenre(genreId)}>
					<div className='content'>
						<p>See More</p>
					</div>
				</SeeMoreBlock>
			</Grid>
		</>
	);
};

export default MovieListByGenre;
