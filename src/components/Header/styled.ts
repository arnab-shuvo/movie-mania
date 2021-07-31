import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

export const HeaderWrapper = styled(Grid)`
	background: #132f60;
	color: #fff;
	.logo {
		a {
			font-size: 30px;
			color: #00c4ff;
			padding: 10px 0;
			text-decoration: none;
			span {
				font-weight: bold;
				font-size: 20px;
				color: #81e2ff;
			}
		}
		cursor: pointer;
	}
	ul {
		padding: 0;
		margin: 0;
		li {
			list-style: none;
			display: inline-block;
		}
		&.navigation {
			text-align: right;
			li {
				a {
					display: inline-block;
					padding: 20px;
					transition: all 0.5s ease;
					text-decoration: none;
					color: #fff;
					&:hover {
						background: #00c4ff;
					}
					&.active {
						background: #00c4ff;
					}
				}
			}
		}
	}
`;
