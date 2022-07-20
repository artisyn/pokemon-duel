import styled from 'styled-components';

export const Container = styled.div`
	border: 2px solid black;
	border-radius: 0.5rem;
	min-height: 18rem;
	background-color: #282828;
	min-width: 10vw;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	gap: 1rem;
	padding: 0.5rem;
	color: white;
	@media only screen and (max-width: 550px) {
		min-height: 15rem;
		max-height: 15rem;
	}
`;

export const Title = styled.h2`
	color: white;
	font-weight: normal;
	font-size: 1.5rem;
`;

export const SlotContainer = styled.div`
	width: 23rem;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 1rem;
	@media only screen and (max-width: 1100px) {
		width: fit-content;
	}
	@media only screen and (max-width: 550px) {
		min-width: 10rem;
		max-width: 10rem;
	}
`;

export const SlotItem = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;
export const SlotTitle = styled.h2`
	font-weight: normal;
	font-size: 1.3rem;
	@media only screen and (max-width: 1100px) {
		display: none;
	}
`;
export const SlotTitleMobile = styled.h2`
	display: none;
	font-weight: normal;
	font-size: 1.1rem;
	@media only screen and (max-width: 1100px) {
		display: block;
		width: fit-content;
	}
`;
export const SlotImgContainer = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	height: 3rem;
	overflow: hidden;
	padding-left: 1rem;
	color: ${(props) => props.color};
	gap: 1rem;
`;
export const SlotImg = styled.img`
	height: 100%;
`;
export const SlotName = styled.span`
	@media only screen and (max-width: 1100px) {
		display: none;
	}
`;
export const ButtonContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 0.4rem;
`;

export const Button = styled.button`
	padding: 0.2em 0.5em;
	border: 1px solid black;
	border-radius: 0px 0px 10px 0px;
	font-size: 1rem;
	background-color: ${(props) => props.color};
	cursor: pointer;
	outline: none;
	transition: all ease 0.2s;
	&:active {
		opacity: 0.8;
		transform: translateX(0.1rem);
		color: white;
	}
`;

export const NotSelected = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 3em;
	flex: 1;
	text-align: center;
	color: orangered;

	@media only screen and (max-width: 550px) {
		display: none;
	}
`;

export const NotSelectedMobile = styled.span`
	display: none;
	align-items: center;
	justify-content: center;
	height: 3em;
	flex: 1;
	text-align: center;
	color: orangered;
	@media only screen and (max-width: 550px) {
		display: flex;
	}
`;
