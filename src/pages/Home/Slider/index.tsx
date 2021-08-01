import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import SwiperCore, { Pagination } from 'swiper/core';
import { useSelector } from 'react-redux';
import { SliderWrapper, SliderContainer, SliderGrid } from './styled';
import { imageBuilder } from 'lib/image-builder';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';

SwiperCore.use([Pagination]);

const Slider: React.FC = () => {
	const { popularMovies } = useSelector((state: any) => state.movieReducer);
	const { images } = useSelector((state: any) => state.configurationReducer);
	const history = useHistory();

	const goToMovies = (id: number) => {
		history.push(`movie/${id}`);
	};
	return (
		<SliderContainer>
			<Swiper
				pagination={{
					clickable: true,
				}}
				loop={true}
				className='mySwiper'>
				{images &&
					popularMovies &&
					popularMovies.map((movies: IPopularMovies, index: number) => (
						<SwiperSlide key={index}>
							<SliderWrapper
								bg={imageBuilder(images.base_url, 'original', movies.backdrop_path)}
								onClick={() => goToMovies(movies.id)}>
								<SliderGrid
									container
									justifyContent={'center'}
									alignItems={'center'}>
									<Grid item xs={11}>
										<p className='title'>{movies.title}</p>
										<p className='overview'>{movies.overview}</p>
									</Grid>
								</SliderGrid>
							</SliderWrapper>
						</SwiperSlide>
					))}
			</Swiper>
		</SliderContainer>
	);
};

export default Slider;
