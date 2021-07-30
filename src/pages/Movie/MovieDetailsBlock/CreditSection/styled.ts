import styled from 'styled-components';

export const CreditSectionWrapper = styled.div`
	.title {
		font-size: 22px;
		margin: 0;
		margin-bottom: 10px;
		color: #0293bf;
		border-bottom: 1px solid #cdcdcd;
		font-weight: bold;
	}
	.name {
		padding: 10px;
		text-align: center;
		color: #0293bf;
		font-weight: bold;
		font-size: 12px;
		box-sizing: border-box;
	}
`;
export const CreditImage = styled.div`
	background-image: url(${(props: { bg: string; title: string }) => props.bg});
	background-size: cover;
	background-position: center center;
	width: 100%;
	height: ${(props: { bg: string; title: 'Crew' | 'Cast' }) =>
		props.title === 'Crew' ? '70px' : '150px'};
	border-radius: 15px;
	overflow: hidden;
`;
