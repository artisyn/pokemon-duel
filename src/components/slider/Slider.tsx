import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import {
	BackArrow,
	Container,
	Decoration,
	ForwardArrow,
	SlidesHolder,
	Wrapper,
} from './Slider.Styles';
import SliderItem from './sliderItem/SliderItem';

const Slider: FC = () => {
	const [slideIndex, setSlideIndex] = useState<number>(0);
	const [pokemons, setPokemons] = useState<null | any[]>(null);

	const nextSlide = (): void => {
		setSlideIndex(slideIndex + 1);
	};
	const prevSlide = (): void => {
		setSlideIndex(slideIndex - 1);
	};
	useEffect(() => {
		const getPokemons = async () => {
			try {
				const rawData = await axios.get(
					'https://pokeapi.co/api/v2/pokemon?offset=0&limit=50',
					{
						headers: {
							'Content-Type': 'application/json',
						},
					}
				);
				// getting an array with names and urls
				const namesAndUrls = rawData.data.results;
				console.log(namesAndUrls);
				// getting an array of promises (to get individual data for each promise)
				const promises: any = namesAndUrls.map((element: any) => {
					const { url } = element;
					return (async () => {
						const { data } = await axios.get(url);
						// console.log(data);
						// const { name, sprites, types, species, stats } = data;
						// return [name, sprites, types, species, stats]; // ?
						return data;
					})();
				});
				const resolvedPromises = await Promise.all(promises);
				// need to figure out pagination
				setPokemons(resolvedPromises);
				console.log(resolvedPromises);
			} catch (err) {
				console.log(err);
			}
		};
		getPokemons();
	}, []);

	return (
		<Container>
			<Decoration />
			<BackArrow
				onClick={() => {
					prevSlide();
				}}
			/>
			<Wrapper>
				<SlidesHolder slideIndex={slideIndex}>
					{pokemons ? pokemons.map((el) => <SliderItem />) : ''}
				</SlidesHolder>
			</Wrapper>

			<ForwardArrow
				onClick={() => {
					nextSlide();
				}}
			/>
		</Container>
	);
};

export default Slider;
