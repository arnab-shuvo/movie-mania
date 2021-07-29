import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

export const MovieBlock = styled.div`
	cursor: pointer;
	.poster {
		background-image: url(${(props: { bg: string }) => props.bg});
		background-size: cover;
		background-position: 100% center;
		width: 100%;
		height: 375px;
		overflow: hidden;
		border-radius: 10px;
		position: relative;
	}
	.description {
		box-sizing: border-box;
		background: rgba(0, 0, 0, 0.8);
		padding: 10px;
		color: #fff;
		position: absolute;
		top: 0;
		bottom: 0;
		left: -120%;
		right: 0;
		height: 100%;
		width: 100%;
		transition: all 0.5s ease;
		text-align: justify;
		display: flex;
		align-items: center;
		justify-content: center;
		p {
			margin: 0;
			&.title {
				font-size: 20px;
				font-weight: bold;
				border-bottom: 1px solid #fff;
				margin-bottom: 10px;
			}
		}
	}
	&:hover {
		.description {
			left: 0;
		}
	}
`;

export const SeeMoreBlock = styled.div`
	background-image: url(${(props: { bg: string }) => props.bg});
	background-size: cover;
	background-position: center center;
	width: 100%;
	height: 375px;
	overflow: hidden;
	border-radius: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	cursor: pointer;
	&:hover {
		.content {
			color: #0293bf;
		}
	}
	.content {
		position: relative;
		z-index: 111;
		color: #fff;
		font-size: 20px;
		font-weight: bold;
		border-bottom: 1px solid #fff;
	}
	&:before {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		background: rgb(0, 0, 0, 0.8);
		z-index: 11;
	}
`;
