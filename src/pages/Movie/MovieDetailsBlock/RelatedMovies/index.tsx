import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import SwiperCore, { Pagination, Navigation } from 'swiper/core';
import { RelatedMoviesWrap } from './styled';
import MovieBlock from 'components/MovieBlock';

SwiperCore.use([Pagination, Navigation]);

type IProps = {
	movies: IMovie[];
};

const RelatedMoviesSection: React.FC<IProps> = ({ movies }) => {
	return (
		<RelatedMoviesWrap>
			<p className={'title'}>Related movies</p>
			<Swiper
				slidesPerView={window.screen.width < 767 ? 2 : 5}
				navigation={true}
				spaceBetween={10}
				pagination={false}
				className='mySwiper'>
				{movies.map((movie: IMovie, index: number) => (
					<SwiperSlide key={index}>
						<MovieBlock movie={movie} />
					</SwiperSlide>
				))}
			</Swiper>
		</RelatedMoviesWrap>
	);
};

export default RelatedMoviesSection;
