import Grid from '@material-ui/core/Grid';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { OverviewWrapper, PosterImage, OverviewInfo } from './styled';

type IPros = {
	movieDetails: IMovieDetails;
	imageConfig: IImageConfig;
};

const MovieOverview: React.FC<IPros> = ({ movieDetails, imageConfig }) => {
	const history = useHistory();
	const onGenreCLick = (id: number) => {
		history.push(`genre/${id}`);
	};
	return (
		<OverviewWrapper container justifyContent='center'>
			<Grid item md={7} lg={7} xl={7}>
				<div className='wrapper'>
					<OverviewInfo container spacing={3} alignItems='center'>
						<Grid item md={3} lg={3} xl={3} sm={3} xs={12}>
							<PosterImage
								bg={`${imageConfig.base_url}${'original'}${
									movieDetails.poster_path
								}`}
							/>
						</Grid>
						<Grid container item md={9} lg={9} xl={9} sm={9} xs={12}>
							<div className='overview-content'>
								<p className='title'>{movieDetails.title}</p>
								<p className='description'>{movieDetails.overview}</p>
								<div className='genre-info'>
									{movieDetails.genres.map(
										(genre: { name: string; id: number }, index: number) => (
											<span onClick={() => onGenreCLick(genre.id)}>
												{genre.name}
											</span>
										),
									)}
								</div>
								<Grid container>
									<Grid md={6} lg={6} xs={6}>
										<div className='related-info'>
											<p>
												Rating:{' '}
												<span>
													{movieDetails.vote_average}/(
													{movieDetails.vote_count})
												</span>
											</p>
										</div>
									</Grid>
									<Grid md={6} lg={6} xs={6}>
										<div className='related-info'>
											<p>
												Popularity Score:{' '}
												<span>{movieDetails.popularity}</span>
											</p>
										</div>
									</Grid>
								</Grid>
								<div className='related-info'>
									<button>
										<span>+</span> Add To Watch List
									</button>
								</div>
							</div>
						</Grid>
					</OverviewInfo>
				</div>
			</Grid>
		</OverviewWrapper>
	);
};

export default MovieOverview;
