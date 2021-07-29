import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

const FooterWrapper = styled(Grid)`
	background: red;
`;

const Footer: React.FC = ({ children }) => {
	return (
		<FooterWrapper container justifyContent={'center'}>
			<Grid container item md={8} lg={8}>
				<Grid item md={12} lg={12}>
					asdasd
				</Grid>
			</Grid>
		</FooterWrapper>
	);
};

export default Footer;
