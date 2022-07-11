import React, { FC } from 'react';
import logo from '../../../assets/111.jpg';

import {
	Container,
	PokemonImage,
	Summary,
	Title,
} from '../sliderItem/SliderItem.Style';

const SliderItem: FC = () => {
	return (
		<Container>
			<PokemonImage src={logo} />
			<Title>PokeName</Title>
			<Summary>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit.
				Doloribus neque consectetur.
			</Summary>
		</Container>
	);
};

export default SliderItem;
