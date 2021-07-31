import React from 'react';
import Grid from '@material-ui/core/Grid';
import { FooterWrapper } from './styled';
import { Link } from 'react-router-dom';

const Footer: React.FC = ({ children }) => {
	return (
		<FooterWrapper container justifyContent={'center'}>
			<Grid container item md={8} lg={8}>
				<Grid item md={3} lg={3} xs={12}>
					<p className='logo'>
						<Link to={'/'}>
							Movie <span>Mania</span>
						</Link>
					</p>
				</Grid>
				<Grid item md={3} lg={3} xs={12}>
					<ul>
						<li className='title'>THE BASICS</li>
						<li>
							<a href='/'>About Movie Mania</a>
						</li>
						<li>
							<a href='/'>Contact</a>
						</li>
						<li>
							<a href='/'>Support Forum</a>
						</li>
						<li>
							<a href='/'>API</a>
						</li>
						<li>
							<a href='/'>System Status</a>
						</li>
					</ul>
				</Grid>
				<Grid item md={3} lg={3} xs={12}>
					<ul>
						<li className='title'>Contribute</li>
						<li>
							<a href='/'>Contribution Bible</a>
						</li>
						<li>
							<a href='/'>3rd Party Applications</a>
						</li>
						<li>
							<a href='/'>Add New Movie</a>
						</li>
						<li>
							<a href='/'>Add New TV Show</a>
						</li>
					</ul>
				</Grid>
				<Grid item md={3} lg={3} xs={12}>
					<ul>
						<li className='title'>Community</li>
						<li>
							<a href='/'>Guidelines</a>
						</li>
						<li>
							<a href='/'>Discussions</a>
						</li>
						<li>
							<a href='/'>Leaderboard</a>
						</li>
						<li>
							<a href='/'>Twitter</a>
						</li>
					</ul>
				</Grid>
			</Grid>
		</FooterWrapper>
	);
};

export default Footer;
