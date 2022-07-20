import React, { FC, useEffect, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import axios from 'axios';
import {
	BackArrow,
	Container,
	Decoration,
	ForwardArrow,
	SlidesHolder,
	Wrapper,
	PokeballImage,
	MobileArrowB,
	MobileArrowF,
} from './Slider.Styles';
import SliderItem from './sliderItem/SliderItem';
import logoUrl from '../../assets/pokeball.png';

const Slider: FC = () => {
	const [slideIndex, setSlideIndex] = useState<number>(0);
	const [pokemons, setPokemons] = useState<any[]>([]);
	const [offsetNumber, setOffsetNumber] = useState<number>(0);
	const [fetchLimit, setFetchLimit] = useState<number>(10);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const [url, setUrl] = useState<string>(
		`https://pokeapi.co/api/v2/pokemon?offset=${offsetNumber}&limit=${fetchLimit}`
	);

	const getPokemons = async (offset: number = 0) => {
		try {
			setIsLoading(true);
			const rawData = await axios.get(
				`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${fetchLimit}`,
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);
			// getting an array with names and urls
			const namesAndUrls = rawData.data.results;
			// getting an array of promises (to get individual data for each promise)
			const promises: any = namesAndUrls.map((element: any) => {
				const { url } = element;
				return (async () => {
					const { data } = await axios.get(url);
					return data;
				})();
			});

			const resolvedPromises = await Promise.all(promises);
			if (pokemons.length < 9) {
				setPokemons(resolvedPromises);
			}
			if (pokemons.length > 9) {
				setPokemons([...pokemons, ...resolvedPromises]);
			}
		} catch (err) {
			console.log(err);
		} finally {
			setIsLoading(false);
		}
	};

	const nextSlide = (): void => {
		setSlideIndex(slideIndex + 1);
	};
	const prevSlide = (): void => {
		if (slideIndex === 0) return;
		setSlideIndex(slideIndex - 1);
	};
	useEffect(() => {
		getPokemons();
	}, []);

	useEffect(() => {
		if (slideIndex === pokemons.length - 3) {
			setOffsetNumber(offsetNumber + 10);
			getPokemons(offsetNumber);
		}
	}, [slideIndex]);

	return (
		<Container>
			<Decoration />
			<BackArrow
				onClick={() => {
					prevSlide();
				}}
			>
				<PokeballImage src={logoUrl} />
			</BackArrow>

			<Wrapper>
				<MobileArrowB>
					<IoIosArrowBack
						onClick={() => {
							prevSlide();
						}}
					/>
				</MobileArrowB>
				<SlidesHolder slideIndex={slideIndex}>
					{pokemons.length > 0
						? pokemons.map((el, i) => (
								<SliderItem key={i} pokemon={el} />
						  ))
						: ''}
				</SlidesHolder>
				<MobileArrowF>
					<IoIosArrowForward
						onClick={() => {
							nextSlide();
						}}
					/>
				</MobileArrowF>
			</Wrapper>

			<ForwardArrow
				onClick={() => {
					nextSlide();
				}}
			>
				<PokeballImage src={logoUrl} />
			</ForwardArrow>
		</Container>
	);
};

export default Slider;
