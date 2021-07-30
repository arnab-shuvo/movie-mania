import styled from 'styled-components';

export const MovieDetailWrapper = styled.div`
	padding: 40px 0;
`;

export const MovieDetailSidebar = styled.div`
	.title {
		font-size: 22px;
		margin: 0;
		margin-bottom: 10px;
		color: #0293bf;
		border-bottom: 1px solid #cdcdcd;
		font-weight: bold;
	}
	ul {
		padding: 0;
		margin: 0;
		li {
			margin: 25px 0;
			list-style: none;
			.name {
				color: #0293bf;
				font-weight: bold;
				margin-bottom: 15px;
			}
			.value {
				text-transform: uppercase;
			}
		}
	}
`;
