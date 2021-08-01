import Grid from '@material-ui/core/Grid';
import React from 'react';
import { useSelector } from 'react-redux';
import { MovieDetailWrapper, MovieDetailSidebar } from './styled';
import CreditSection from './CreditSection';
import RelatedMoviesSection from './RelatedMovies';

const MovieDetailsBlock: React.FC = () => {
	const { credits, movieDetails, similarMovies } = useSelector(
		(state: any) => state.movieReducer,
	);
	const informations: any = {
		budget: 'Budget',
		original_language: 'Language',
		release_date: 'Release Date',
		status: 'Status',
	};
	return (
		<MovieDetailWrapper>
			<Grid container spacing={3} justifyContent='center'>
				<Grid item md={3} lg={3} xl={3} sm={3} xs={11}>
					<MovieDetailSidebar>
						<p className='title'>Movie Information</p>
						<ul>
							{Object.keys(informations).map((key: any, index: number) => (
								<>
									{movieDetails[key] ? (
										<li key={index}>
											<p className='name'>{informations[key]}</p>
											<p className='value'>{movieDetails[key]}</p>
										</li>
									) : (
										''
									)}
								</>
							))}
						</ul>
					</MovieDetailSidebar>
				</Grid>
				<Grid item md={9} lg={9} xl={9} sm={9} xs={11}>
					<CreditSection creditData={credits.cast} title={'Cast'} />
					<CreditSection creditData={credits.crew} title={'Crew'} />
				</Grid>
				<Grid item md={12} lg={12} xl={12} sm={12} xs={11}>
					<RelatedMoviesSection movies={similarMovies} />
				</Grid>
			</Grid>
		</MovieDetailWrapper>
	);
};

export default MovieDetailsBlock;
