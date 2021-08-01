import { Grid } from '@material-ui/core';
import styled from 'styled-components';

export const Page404Wrapper = styled(Grid)`
	min-height: 80vh;
	padding: 40px;
	.page-content {
		text-align: center;
		p {
			font-size: 32px;
			font-weight: bold;
			color: #132f60;
		}
		button {
			background: #132f60;
			padding: 20px 40px;
			font-size: 22px;
			color: #fff;
			border: 1px solid transparent;
			transition: all 0.5s ease;
			border-radius: 15px;
			cursor: pointer;
			margin-top: 20px;
			&:hover {
				border: 1px solid #132f60;
				background: transparent;
				color: #132f60;
			}
		}
	}
`;
