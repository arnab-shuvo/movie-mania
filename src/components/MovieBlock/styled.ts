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
		@media screen and (max-width: 767px) {
			height: 150px;
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
			@media screen and (max-width: 767px) {
				display: none;
			}
		}

		.rating {
			box-sizing: border-box;
			padding: 10px 15px;
			background: rgb(182, 24, 119, 0.68);
			position: absolute;
			top: 20px;
			right: 0;
			z-index: 9;
			border-top-left-radius: 10px;
			border-bottom-left-radius: 10px;
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
	.add-to-watch {
		background: #0293bf;
		padding: 0 10px;
		color: #fff;
		font-size: 30px;
		border: 1px solid #0293bf;
		transition: all 0.5s ease;
		cursour: pointer;
		border-top-right-radius: 10px;
		border-bottom-right-radius: 10px;
		position: absolute;
		top: 20px;
		left: 0;
		z-index: 11;
		cursor: pointer;
		&:hover {
			background: transparent;
		}
		&.disabled {
			cursor: not-allowed;
			background: #cdcdcd;
			border: 1px solid #cdcdcd;
			&:hover {
				background: #cdcdcd;
			}
		}
	}
	.mobile-description {
		.title {
			font-weight: bold;
			color: #0293bf;
			margin: 5px 0;
			font-size: 12px;
			border-bottom: 0;
		}
		@media screen and (min-width: 768px) {
			display: none;
		}
	}
`;
