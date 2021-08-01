import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

export const OverviewWrapper = styled(Grid)`
	position: relative;
	z-index: 111;
	height: 100%;
	.wrapper {
		padding: 12px 0;
		height: 100%;
	}
	.overview-content {
		color: #fff;

		.title {
			font-size: 25px;
			font-weight: bold;
			margin-bottom: 5px;
		}
		.description {
			text-align: justify;
		}
		.genre-info {
			margin-top: 10px;
			span {
				display: inline-block;
				padding: 5px 10px;
				margin-right: 20px;
				margin-top: 10px;
				border: 1px solid #0293bf;
				color: #0293bf;
				border-radius: 10px;
				cursor: pointer;
				transition: all 0.5s ease;
				&:hover {
					background: #0293bf;
					color: #fff;
				}
			}
		}
		.related-info {
			margin-top: 20px;
			p {
				span {
					&.value {
						padding-left: 20px;
						font-weight: bold;
					}
					@media screen and (max-width: 767px) {
						display: block;
						&.value {
							padding-left: 0;
							padding-top: 10px;
							font-weight: bold;
						}
					}
				}
			}
			.add-to-watch {
				background: #0293bf;
				padding: 20px 30px;
				font-size: 22px;
				color: #fff;
				border: 1px solid transparent;
				transition: all 0.5s ease;
				border-radius: 15px;
				cursor: pointer;
				margin-right: 10px;
				&:hover {
					border: 1px solid #0293bf;
					background: transparent;
					color: #0293bf;
				}
			}
		}
	}
`;

export const OverviewInfo = styled(Grid)`
	height: 100%;
	.modal-body {
		width: 600px;
	}
`;

export const PosterImage = styled.div`
	background-image: url(${(props: { bg: string }) => props.bg});
	background-size: cover;
	background-position: top center;
	height: 300px;
	width: 100%;
	border: 3px solid #fff;
	border-radius: 15px;
`;
