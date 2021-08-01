import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

export const FooterWrapper = styled(Grid)`
	background: #132f60;
	padding: 80px 0;
	color: #fff;
	.logo {
		a {
			font-size: 40px;
			color: #00c4ff;
			padding: 10px 0;
			text-decoration: none;
			span {
				font-weight: bold;
				font-size: 30px;
				color: #81e2ff;
			}
		}
		cursor: pointer;
	}
	ul {
		margin: 0;
		margin-bottom: 20px;
		padding: 0;
		li {
			list-style: none;
			padding: 0;
			&.title {
				font-size: 18px;
				margin-bottom: 10px;
				font-weight: bold;
			}
			a {
				color: #fff;
				text-decoration: none;
				&:hover {
					color: #00c4ff;
				}
			}
		}
	}
`;
