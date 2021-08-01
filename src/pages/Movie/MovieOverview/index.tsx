import Grid from '@material-ui/core/Grid';
import CustomModal from 'components/Modal';
import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addWatchedMovie } from 'store/actions/watchedListAction';
import { OverviewWrapper, PosterImage, OverviewInfo } from './styled';
import ReactPlayer from 'react-player';

type IPros = {
	movieDetails: IMovieDetails;
	imageConfig: IImageConfig;
};

const MovieOverview: React.FC<IPros> = ({ movieDetails, imageConfig }) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const [open, setOpen] = useState<boolean>(false);
	const handleClose = () => {
		setOpen(false);
	};
	const handleOpen = () => {
		setOpen(true);
	};

	const { watchedListIds } = useSelector((state: any) => state.watchedListReducer);
	const onGenreCLick = (id: number) => {
		history.push(`/genre/${id}`);
	};

	const addToWatched = () => {
		const movie: any = {
			id: movieDetails.id,
			overview: movieDetails.overview.substr(0, 155),
			title: movieDetails.title,
			poster_path: movieDetails.poster_path,
			vote_average: movieDetails.vote_average,
		};
		dispatch(addWatchedMovie(movie));
	};
	return (
		<OverviewWrapper container justifyContent='center'>
			<Grid item md={7} lg={7} xl={7} xs={11}>
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
											<span
												key={index}
												onClick={() => onGenreCLick(genre.id)}>
												{genre.name}
											</span>
										),
									)}
								</div>
								<Grid container>
									<Grid item md={6} lg={6} xs={6}>
										<div className='related-info'>
											<p>
												<span>Rating: </span>
												<span className={'value'}>
													{movieDetails.vote_average}/(
													{movieDetails.vote_count})
												</span>
											</p>
										</div>
									</Grid>
									<Grid item md={6} lg={6} xs={6}>
										<div className='related-info'>
											<p>
												<span>Popularity Score: </span>
												<span className={'value'}>
													{movieDetails.popularity}
												</span>
											</p>
										</div>
									</Grid>
								</Grid>

								<div className='related-info'>
									{!watchedListIds.includes(movieDetails.id) && (
										<button className='add-to-watch' onClick={addToWatched}>
											<span>+</span> Add To Watch List
										</button>
									)}
									<button className='add-to-watch' onClick={handleOpen}>
										Watch Video
									</button>
									<CustomModal handleClose={handleClose} open={open}>
										<h3>{movieDetails.title}</h3>
										<ReactPlayer
											url={`https://www.youtube.com/watch?v=${movieDetails.videos.results[0].key}`}
										/>
									</CustomModal>
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
