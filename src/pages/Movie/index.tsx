import Grid from '@material-ui/core/Grid';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchMovieDetail } from 'store/actions/movieAction';
import { Banner } from './styled';
import MovieDetailsBlock from './MovieDetailsBlock';
import MovieOverview from './MovieOverview';
import { imageBuilder } from 'lib/image-builder';

type IParams = {
	movieId: string;
};

const Movie: React.FC = () => {
	const { movieId } = useParams<IParams>();
	const dispatch = useDispatch();
	const { movieDetails, imageList } = useSelector((state: any) => state.movieReducer);
	const { images } = useSelector((state: any) => state.configurationReducer);
	useEffect(() => {
		if (!movieDetails || movieDetails?.id !== parseInt(movieId)) {
			dispatch(fetchMovieDetail(movieId));
		}
	}, [movieId, dispatch, movieDetails]);

	const isStored = movieDetails?.id ?? null;

	return (
		<>
			{isStored && (
				<Grid container justifyContent='center'>
					<Grid item md={12} lg={12}>
						<Banner
							bg={imageBuilder(
								images.base_url,
								'w1280',
								imageList.backdrops[0].file_path,
							)}>
							<MovieOverview movieDetails={movieDetails} imageConfig={images} />
						</Banner>
					</Grid>
					<Grid item md={7} lg={7} xs={11}>
						<MovieDetailsBlock />
					</Grid>
				</Grid>
			)}
		</>
	);
};

export default Movie;
