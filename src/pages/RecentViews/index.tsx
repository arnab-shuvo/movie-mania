import Grid from '@material-ui/core/Grid';
import MovieBlockView from 'components/MovieBlock';
import { WatchListWrapper } from 'pages/WatchList/styled';
import React from 'react';
import { useSelector } from 'react-redux';

const RecentViews: React.FC = () => {
	const { recentViews } = useSelector((state: any) => state.watchedListReducer);
	const { images } = useSelector((state: any) => state.configurationReducer);
	return (
		<WatchListWrapper container justifyContent='center' alignItems={'flex-start'}>
			{images && (
				<Grid container item md={10} xs={11} lg={10} xl={10} spacing={3}>
					<Grid item xs={12}>
						<p className='title'>Recently Viewed Movies</p>
					</Grid>
					{recentViews.length ? (
						<>
							{recentViews.map((watched: WatchListMovie, index: number) => (
								<Grid key={index} item xs={6} sm={3}>
									<MovieBlockView movie={watched} />
								</Grid>
							))}
						</>
					) : (
						<Grid item xs={12} sm={3}>
							'No List Found'
						</Grid>
					)}
				</Grid>
			)}
		</WatchListWrapper>
	);
};

export default RecentViews;
