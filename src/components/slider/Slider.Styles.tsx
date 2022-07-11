import styled from 'styled-components';
interface SlideHolderInterface {
	slideIndex: number;
}

export const Container = styled.div`
	border: 1px solid white;
	height: 50vh;
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
	overflow: hidden;
	width: 70vw;
	height: 100%;
`;

export const SlidesHolder = styled.div<SlideHolderInterface>`
	width: 70vw;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-start;

	transform: translateX(${(props) => props.slideIndex * -70}vw);
	transition: transform ease-out 0.8s;
`;
export const BackArrow = styled.div`
	background-color: white;
	border-radius: 40%;
	height: 1.5rem;
	width: 3rem;
`;
export const ForwardArrow = styled.div`
	background-color: white;
	border-radius: 40%;
	height: 1.5rem;
	width: 3rem;
`;
