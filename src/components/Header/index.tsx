import React from 'react';
import Grid from '@material-ui/core/Grid';
import { HeaderWrapper } from './styled';
import { Link, NavLink } from 'react-router-dom';

const Header: React.FC = ({ children }) => {
	return (
		<HeaderWrapper container justifyContent={'center'}>
			<Grid container item md={10} lg={10} alignItems={'center'}>
				<Grid item md={6} lg={6}>
					<ul>
						<li>
							<p className={'logo'}>
								<Link to={'/'}>
									Movie<span>Mania</span>
								</Link>
							</p>
						</li>
					</ul>
				</Grid>
				<Grid item md={6} lg={6}>
					<ul className='navigation'>
						<li>
							<NavLink exact to={'/'}>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to={'/404'}>Genre</NavLink>
						</li>
						<li>
							<NavLink to={'/watchlist'}>WatchList</NavLink>
						</li>
						<li>
							<NavLink to={'/recent'}>Recently Viewed</NavLink>
						</li>
						<li>
							<NavLink to={'/api'}>API</NavLink>
						</li>
					</ul>
				</Grid>
			</Grid>
		</HeaderWrapper>
	);
};

export default Header;
