import styled from 'styled-components';
interface SlideHolderInterface {
	slideIndex: number;
}

export const Container = styled.div`
	border: 1px solid white;
	min-height: 50vh;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 2rem;
	gap: 1rem;
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
	border: 3px solid black;
	border-radius: 1rem;
	overflow: hidden;
	width: 25rem;
	height: 40rem;
`;

export const SlidesHolder = styled.div<SlideHolderInterface>`
	/* width: 25rem; */
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;

	transform: translateX(${(props) => props.slideIndex * -100}%);
	transition: transform ease-out 0.8s;
`;
export const BackArrow = styled.div`
	height: 3rem;
	width: 3rem;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	cursor: pointer;
`;
export const ForwardArrow = styled.div`
	height: 3rem;
	width: 3rem;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	cursor: pointer;
`;
export const PokeballImage = styled.img`
	height: 100%;
	object-fit: contain;
	object-position: center;
`;
