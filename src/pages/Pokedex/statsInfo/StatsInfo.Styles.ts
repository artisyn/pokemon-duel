import styled, { keyframes } from 'styled-components';
interface CardContainerProps {
	bcolor: string;
	animate: boolean;
}
interface TypeCircleProps {
	bcolor: string;
}
interface StatBackground {
	color: string;
	statwidth: number;
}

interface Carousel {
	xwidth: number;
}

export const rotation = keyframes`

0% {
    transform: rotateY(0deg);
}
50% {
    transform: rotateY(90deg);

}
100% {
    transform: rotateY(0deg);

}

`;

export const Container = styled.div`
	height: 22rem;
	margin-bottom: 1rem;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 0.5rem;
	padding: 1rem;
	background-color: #c95732;
	position: fixed;
	top: 6rem;
	width: 100%;
	z-index: 1000;
	flex-wrap: wrap;
`;
export const CardContainer = styled.div<CardContainerProps>`
	min-width: 13rem;
	max-width: 13rem;
	height: 18rem;
	border: 2px solid ${(props) => props.bcolor};
	border-radius: 0.5rem;
	display: flex;
	flex: 1;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	padding: 0.5rem;
	position: relative;
	background-color: #282828;
	gap: 0.5rem;
	transition: all ease 0.5s;
	transform: rotateY(0deg);
	animation: ease 1s ${(props) => (props.animate ? rotation : '')};
	@media only screen and (max-width: 550px) {
		min-width: 10rem;
		max-width: 10rem;
		height: 15rem;
	}
`;
export const ImgHolder = styled.div`
	overflow: hidden;
	margin-top: 1rem;
	border-radius: 50%;
	width: 75%;
	height: 50%;
	background: linear-gradient(
		to bottom,
		#464545,
		#4b4a4ac1,
		#504e4e92,
		#55535358,
		#5a585812
	);
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const Image = styled.img`
	max-height: 100%;
	max-width: 100%;
	object-fit: contain;
	object-position: center;
	pointer-events: none;
`;

export const Name = styled.span`
	color: white;
	font-size: 1.2rem;
	font-weight: 500;
	letter-spacing: 0.05rem;
`;

export const TypeCircle = styled.span<TypeCircleProps>`
	position: absolute;
	top: 0.5rem;
	right: 0.5rem;
	width: 1rem;
	height: 1rem;
	border-radius: 50%;
	background-color: ${(props) => props.bcolor};
`;
export const PositionIndicator = styled.span`
	position: absolute;
	top: 0.5rem;
	left: 0.5rem;
	width: 3rem;
	height: 1rem;
	color: grey;
	font-size: 1.2rem;
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;

export const ParametersContainer = styled.div`
	height: 5rem;

	display: flex;
	justify-content: center;
	align-items: center;
`;
export const WeightContainer = styled.div`
	width: 5rem;
	flex: 1;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 0.4rem;
`;
export const HeightContainer = styled.div`
	width: 5rem;
	flex: 1;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 0.4rem;
`;
export const ParameterValue = styled.span`
	color: white;
	font-size: 1rem;
	font-weight: 500;
`;
export const ParameterName = styled.span`
	font-size: 1rem;
	font-weight: 500;
	color: grey;
`;

export const TypesContainer = styled.div`
	display: flex;
	align-items: center;
`;

export const TypeName = styled.span`
	color: ${(props) => (props.color ? props.color : 'white')};
	@media only screen and (max-width: 550px) {
		font-size: 0.7rem;
	}
`;
export const TypeTitle = styled.span`
	color: grey;
	margin-right: 0.4rem;
	@media only screen and (max-width: 550px) {
		font-size: 0.7rem;
	}
`;
export const Separator = styled.span`
	margin-left: 0.3rem;
	margin-right: 0.3rem;
	color: white;
`;
export const Title = styled.h1``;
export const StatsContainer = styled.div<TypeCircleProps>`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	min-height: 13rem;
	max-width: 13rem;
	min-width: 13rem;
	height: 18rem;
	border: 2px solid ${(props) => props.bcolor};
	border-radius: 0.5rem;
	background-color: #282828;
	padding: 0.5rem 1rem;
	@media only screen and (max-width: 550px) {
		min-width: 10rem;
		max-width: 10rem;
		height: 15rem;
	}
`;

export const BottomTitle = styled.h1`
	color: white;
	font-weight: normal;
	font-size: 1.5rem;
	margin-bottom: 1rem;
	@media only screen and (max-width: 550px) {
		font-size: 1.2rem;
	}
`;
export const StatContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.8rem;
	padding-bottom: 1rem;
	transition: all ease-in 1s;
`;
export const StatItem = styled.div`
	width: 100%;
	padding-left: 0.5rem;
	padding-right: 0.5rem;
	display: flex;
	gap: 0.5rem;
	justify-content: space-between;
	align-items: center;
`;
export const StatName = styled.span`
	color: gray;
	font-size: 0.9rem;
	font-weight: 500;
	@media only screen and (max-width: 550px) {
		font-size: 0.7rem;
	}
`;
export const StatValueContainer = styled.div`
	overflow: hidden;
	height: 0.9rem;
	width: 70%;
	border-radius: 1rem;
	background-color: #434343;
`;
export const StatValueBackground = styled.div<StatBackground>`
	background-color: ${(props) => props.color};
	width: ${(props) => props.statwidth}%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding-right: 0.4rem;
	transition: all ease-in 0.3s;
	height: 100%;
	border-top-left-radius: 1rem;
	border-bottom-left-radius: 1rem;
`;
export const StatValue = styled.span`
	color: white;
	font-size: 0.5rem;
`;

export const RelationsContainer = styled.div<TypeCircleProps>`
	border-radius: 0.5rem;
	flex: 1;
	border: 2px solid ${(props) => props.bcolor};
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	gap: 1rem;
	background-color: #282828;
	height: 18rem;
	max-width: 13rem;
	min-width: 13rem;
	padding: 0.5rem 1rem;
	@media only screen and (max-width: 550px) {
		min-width: 10rem;
		max-width: 10rem;
		height: 15rem;
	}
`;

export const RelationsTitle = styled.h1`
	color: white;
	font-weight: normal;
	font-size: 1.5rem;
	@media only screen and (max-width: 550px) {
		font-size: 1.2rem;
	}
`;
export const RelationsStatsContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-evenly;
`;
export const RelationsItem = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	gap: 0rem;
	flex-direction: column;
	font-size: 0.7rem;
	@media only screen and (max-width: 550px) {
		font-size: 0.5rem;
	}
`;

export const RelationsItemTitle = styled.span`
	color: white;
	font-size: 0.7rem;
`;
export const RelationsItemType = styled.div`
	font-size: 0.7rem;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.3rem;
`;
export const TypeVal = styled.span<TypeCircleProps>`
	background-color: ${(props) => props.bcolor};
	width: 1.2rem;
	height: 1.2rem;
	font-size: 0.7rem;
	padding: 0.2rem;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	@media only screen and (max-width: 550px) {
		width: 0.8rem;
		height: 0.8rem;
		font-size: 0.5rem;
	}
`;

export const ThreeStatsContainer = styled.div<Carousel>`
	border: 1px solid black;
	display: flex;
	transition: all ease 0.5s;
	@media only screen and (max-width: 980px) {
		width: 13rem;
		transform: translateX(${(props) => props.xwidth * -13}rem);
	}
	@media only screen and (max-width: 550px) {
		width: 10rem;
		transform: translateX(${(props) => props.xwidth * -10}rem);
	}
	position: relative;
	align-items: center;
	justify-content: flex-start;
`;

export const ThreeStatsCarousel = styled.div`
	position: relative;
	overflow: hidden;
`;
export const ForwardBtn = styled.span`
	position: absolute;
	top: 50%;
	right: 1rem;
	color: white;
	z-index: 1000;
	font-size: 1.3rem;
	cursor: pointer;
	display: none;
	@media only screen and (max-width: 980px) {
		display: block;
	}
`;
export const BackBtn = styled.span`
	position: absolute;
	top: 50%;
	left: 1rem;
	color: white;
	z-index: 1000;
	font-size: 1.3rem;

	cursor: pointer;
	display: none;
	@media only screen and (max-width: 980px) {
		display: block;
	}
`;
