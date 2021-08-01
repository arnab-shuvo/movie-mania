import React from 'react';
import { useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components';

const LoaderWrapper = styled.div`
	position: fixed;
	width: 100vw;
	height: 100vh;
	background: #fff;
	z-index: 99999;
	display: flex;
	align-items: center;
`;
const Load = keyframes`
0% {
    transform: scale(1);
}
100% {
    transform: scale(8);
    opacity: 0;
}
`;
const Loading = styled.div`
	width: 30px;
	height: 30px;
	animation: ${Load} 1s infinite ease-out;
	margin: auto;
	border-radius: 50%;
	background-color: #132f60;
`;

const Loader: React.FC = () => {
	const { isLoading } = useSelector((state: any) => state.loaderReducer);
	return (
		<>
			{isLoading && (
				<LoaderWrapper>
					<Loading />
				</LoaderWrapper>
			)}
		</>
	);
};

export default Loader;
