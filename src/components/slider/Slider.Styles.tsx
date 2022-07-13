import styled from 'styled-components';
import { calculateColor } from '../../helpers/pokemonHelperFunctions';
interface SlideHolderInterface {
	slideIndex: number;
}

export const Container = styled.div`
	min-height: 50vh;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 2rem;
	gap: 1rem;
	@media only screen and (max-width: 650px) {
		padding: 1rem;
	}
`;
export const Decoration = styled.div`
	position: absolute;
	height: 50%;
	width: 100%;
	border-radius: 0% 0% 100% 0% / 0% 0% 100% 94%;
	background-color: #415737;
	top: 0;
	left: 0;
	z-index: -1;
`;
export const Wrapper = styled.div`
	position: relative;
	border-radius: 1rem;
	overflow: hidden;
	min-width: 25rem;
	height: 40rem;
	background-color: #272628d3;
	@media only screen and (max-width: 650px) {
		min-width: 70vw;
	}
	@media only screen and (max-width: 450px) {
		min-width: 90vw;
	}
`;

export const SlidesHolder = styled.div<SlideHolderInterface>`
	min-width: 25rem;
	max-width: 25rem;

	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 2rem;

	transform: translateX(${(props) => props.slideIndex * -27}rem);
	transition: transform ease-out 0.8s;
	background-color: #272628d3;

	@media only screen and (max-width: 650px) {
		gap: 2vw;
		min-width: 70vw;
		max-width: 70vw;
		transform: translateX(${(props) => props.slideIndex * -72}vw);
	}
	@media only screen and (max-width: 450px) {
		gap: 2vw;
		min-width: 90vw;
		max-width: 90vw;
		transform: translateX(${(props) => props.slideIndex * -92}vw);
	}
`;
export const BackArrow = styled.div`
	height: 3rem;
	width: 3rem;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	cursor: pointer;
	@media only screen and (max-width: 650px) {
		display: none;
	}
`;
export const ForwardArrow = styled.div`
	height: 3rem;
	width: 3rem;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	cursor: pointer;
	@media only screen and (max-width: 650px) {
		display: none;
	}
`;

export const MobileArrowF = styled.div`
	display: none;
	@media only screen and (max-width: 650px) {
		display: block;
		position: absolute;
		color: white;
		z-index: 3;
		right: 0.5rem;
		top: 50%;
		font-size: 2rem;
		cursor: pointer;
	}
`;
export const MobileArrowB = styled.div`
	display: none;
	@media only screen and (max-width: 650px) {
		display: block;
		position: absolute;
		color: white;
		z-index: 3;
		left: 0.5rem;
		top: 50%;
		font-size: 2rem;
		cursor: pointer;
	}
`;
export const PokeballImage = styled.img`
	height: 100%;
	object-fit: contain;
	object-position: center;
`;
