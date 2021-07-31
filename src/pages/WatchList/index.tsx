import { Grid } from '@material-ui/core';
import MovieBlockView from 'components/MovieBlock';
import React from 'react';
import { useSelector } from 'react-redux';
import { WatchListWrapper } from './styled';

const Watchlist: React.FC = () => {
	const { watchedList } = useSelector((state: any) => state.watchedListReducer);
	const { images } = useSelector((state: any) => state.configurationReducer);
	return (
		<WatchListWrapper container justifyContent='center'>
			{images && (
				<Grid container item md={7} lg={7} xl={7} spacing={3}>
					<Grid item xs={12}>
						<p className='title'>Watch List</p>
					</Grid>
					{watchedList ? (
						<>
							{watchedList.map((watched: WatchListMovie, index: number) => (
								<Grid item xs={12} sm={3}>
									<MovieBlockView movie={watched} />
								</Grid>
							))}
						</>
					) : (
						'No List Found'
					)}
				</Grid>
			)}
		</WatchListWrapper>
	);
};

export default Watchlist;
