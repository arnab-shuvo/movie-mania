import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { HeaderWrapper } from './styled';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Drawer } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useEffect } from 'react';

const Header: React.FC = () => {
	const [drawer, toggleDrawer] = useState<boolean>(false);
	const location = useLocation();
	useEffect(() => {
		toggleDrawer(false);
	}, [location.pathname]);

	return (
		<HeaderWrapper container justifyContent={'center'}>
			<Grid
				className='normal-menu'
				container
				item
				md={10}
				lg={10}
				xs={11}
				alignItems={'center'}>
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
			<Grid
				className='mobile-menu'
				container
				item
				md={10}
				lg={10}
				xs={11}
				alignItems={'center'}>
				<Grid item xs={6}>
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
				<Grid container item xs={6} justifyContent={'flex-end'}>
					<IconButton
						onClick={() => toggleDrawer(true)}
						edge='start'
						color='inherit'
						aria-label='menu'>
						<MenuIcon />
					</IconButton>
					<Drawer
						className={'drawer-menu'}
						open={drawer}
						onClose={() => toggleDrawer(false)}>
						<ul className='mobile-navigation'>
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
					</Drawer>
				</Grid>
			</Grid>
		</HeaderWrapper>
	);
};

export default Header;
