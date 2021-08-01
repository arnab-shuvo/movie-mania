import { Grid } from '@material-ui/core';
import styled from 'styled-components';

export const SliderWrapper = styled.div`
	height: 500px;
	background-image: url(${(props: { bg: string }) => props.bg});
	background-size: cover;
	background-position: top;
	position: relative;
	cursor: pointer;
	max-width: 100%;
	&:after {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.6);
		left: 0;
		top: 0;
	}
	@media screen and (max-width: 767px) {
		height: 200px;
		max-width: 100vw;
	}
`;
export const SliderContainer = styled.div`
	margin-bottom: 80px;
`;
export const SliderGrid = styled(Grid)`
	height: 100%;
	position: relative;
	z-index: 11;
	color: #fff;
	.title {
		font-size: 30px;
		margin-bottom: 20px;
	}
	.overview {
		font-size: 20px;
	}
	@media screen and (max-width: 767px) {
		.title {
			font-size: 20px;
			margin-bottom: 20px;
		}
		.overview {
			font-size: 8px;
		}
	}
`;
