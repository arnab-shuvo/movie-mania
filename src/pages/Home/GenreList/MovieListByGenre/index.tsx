import Grid from '@material-ui/core/Grid';
import React from 'react';
import MovieBlockView from './movie-block';
import { image } from './seemore-img';
import { SeeMoreBlock } from './styled';
type IProps = {
	movieList: IMovie[];
};

const MovieListByGenre: React.FC<IProps> = ({ movieList }) => {
	return (
		<>
			{movieList.map((movie: IMovie) => {
				return (
					<Grid item md={3} lg={3} sm={6} xs={12}>
						<MovieBlockView movie={movie} />
					</Grid>
				);
			})}

			<Grid item md={3} lg={3} sm={6} xs={12}>
				<SeeMoreBlock bg={image}>
					<div className='content'>
						<p>See More</p>
					</div>
				</SeeMoreBlock>
			</Grid>
		</>
	);
};

export default MovieListByGenre;
