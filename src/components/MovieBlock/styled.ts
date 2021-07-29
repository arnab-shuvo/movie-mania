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

		.rating {
			box-sizing: border-box;
			padding: 10px 15px;
			background: rgb(182, 24, 119, 0.68);
			position: absolute;
			top: 30px;
			right: 0;
			z-index: 9;
			p {
				margin: 0;
				color: #fff;
				font-weight: bold;
			}
		}
	}

	&:hover {
		.description {
			left: 0;
		}
	}
`;
