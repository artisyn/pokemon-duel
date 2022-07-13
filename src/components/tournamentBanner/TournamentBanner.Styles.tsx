import styled from 'styled-components';
import { keyframes } from 'styled-components';

export const Container = styled.div`
	position: relative;
	min-height: 50vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	padding-bottom: 1rem;
	background-color: #6d7443;
`;
export const DecorationTop = styled.div`
	position: absolute;
	height: 20%;
	width: 100%;
	border-radius: 0% 0% 100% 0% / 0% 0% 100% 94%;

	background: #2f4129;
	top: 0;
	left: 0;
	z-index: 1;
`;
export const DecorationBottom = styled.div`
	position: absolute;
	height: 20%;
	width: 100%;
	border-radius: 100% 0% 0% 52% / 100% 13% 0% 0%;

	background: #2f4129;
	bottom: 0;
	right: 0;
	z-index: 1;
`;
export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
`;

export const ButtonContainer = styled.div`
	z-index: 2;
	position: relative;
	border-radius: 0.7rem;
	min-height: fit-content;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #293343;
	color: #cc354b;
	padding: 2rem;
	cursor: pointer;
	transition: all ease 0.4s;

	&:hover {
		background-color: black;

		color: white;
	}
	@media only screen and (max-width: 450px) {
		width: 10rem;
		padding: 0.5rem 1rem;
	}
`;
export const Title = styled.h1`
	letter-spacing: 0.07rem;
	@media only screen and (max-width: 750px) {
		font-size: 1.3rem;
	}
	@media only screen and (max-width: 450px) {
		font-size: 1rem;
		font-weight: normal;
		letter-spacing: 0.04rem;
		text-align: center;
	}
`;

const hoverAnimation = keyframes`
 0% { transform: translateY(0%) }
 50% { transform: translateY(10%) }
 100% { transform: translateY(0%) }
 
`;

export const FlyingLogo = styled.img`
	z-index: 1;
	position: absolute;
	width: 140%;
	height: 300%;
	top: -310%;
	animation-name: ${hoverAnimation};
	animation-duration: 4s;
	animation-iteration-count: infinite;
	animation-timing-function: ease-in-out;
`;
