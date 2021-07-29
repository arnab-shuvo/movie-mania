import styled from 'styled-components';

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
