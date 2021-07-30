import styled from 'styled-components';

export const Banner = styled.div`
	background-image: url(${(props: { bg: string }) => props.bg});
	background-size: cover;
	background-position: top center;
	width: 100%;
	height: 400px;
	position: relative;
	&:after {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.7);
		z-index: 11;
	}
`;
