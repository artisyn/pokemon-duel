import React, { FC } from 'react';
import { Container, BackgroundImage, BottomDimmer } from './Banner.Styles';
import image from '../../assets/backPicture1.jpg';

const Banner: FC = () => {
	return (
		<Container>
			<BackgroundImage src={image} />
			<BottomDimmer />
		</Container>
	);
};

export default Banner;
