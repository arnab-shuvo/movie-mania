import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
import SwiperCore, { Pagination, Navigation } from 'swiper/core';
import { CreditSectionWrapper, CreditImage } from './styled';
import { useSelector } from 'react-redux';
import { imageBuilder } from 'lib/image-builder';

SwiperCore.use([Pagination, Navigation]);

type IProps = {
	creditData: ICrew[] | ICast[];
	title: 'Crew' | 'Cast';
};
type CreditSingle = ICrew | ICast;

const CreditSection: React.FC<IProps> = ({ creditData, title }) => {
	const { images } = useSelector((state: any) => state.configurationReducer);

	return (
		<CreditSectionWrapper>
			<p className={'title'}>{title}</p>
			<Swiper
				slidesPerView={window.screen.width < 767 ? 3 : title === 'Crew' ? 8 : 5}
				spaceBetween={10}
				pagination={false}
				navigation={true}
				className='mySwiper'>
				{creditData.map((credit: CreditSingle, index: number) => (
					<SwiperSlide>
						<CreditImage
							title={title}
							bg={imageBuilder(
								images.base_url,
								title === 'Cast' ? 'w185' : 'w45',
								credit.profile_path,
							)}
						/>
						<p className='name'>{credit.name}</p>
					</SwiperSlide>
				))}
			</Swiper>
		</CreditSectionWrapper>
	);
};

export default CreditSection;
