import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

const HeaderWrapper = styled(Grid)`
	background: #0293bf;
	ul {
		padding: 0;
		margin: 0;
		&.left-list {
			li {
				list-style: none;
				display: inline-block;
				padding-right: 10px;
			}
		}
	}
`;

const Header: React.FC = ({ children }) => {
	return (
		<HeaderWrapper container justifyContent={'center'}>
			<Grid container item md={7} lg={7}>
				<Grid item md={6} lg={6}>
					<ul className='left-list'>
						<li>MovieMania</li>
						<li>MovieMania</li>
						<li>MovieMania</li>
						<li>MovieMania</li>
					</ul>
				</Grid>
				<Grid item md={6} lg={6}>
					asdasd
				</Grid>
			</Grid>
		</HeaderWrapper>
	);
};

export default Header;
