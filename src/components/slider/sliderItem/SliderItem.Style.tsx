import styled from 'styled-components';

interface Type {
	color: string;
}
interface StatBackground {
	color: string;
	statwidth: number;
}

export const Container = styled.div`
	height: 100%;
	max-width: 100%;
	min-width: 100%;
	display: flex;
	flex-direction: column;
	background-color: #272628d3;
`;

export const TopPicture = styled.div<Type>`
	width: 100%;
	border-bottom-left-radius: 2rem;
	border-bottom-right-radius: 2rem;
	flex: 2;
	position: relative;
	background-color: ${(props) => props.color};
`;
export const PokemonImage = styled.img`
	position: absolute;
	width: 10rem;
	height: 10rem;
	object-fit: contain;
	object-position: center;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	margin: auto;
`;
export const Title = styled.h1`
	text-align: center;
	letter-spacing: 0.06rem;
	color: white;
	z-index: 2;
`;
export const MiddleInfo = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	gap: 1rem;
	/* border: 1px solid yellow; */
`;
export const TypesContainer = styled.div`
	width: 100%;

	color: white;

	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
`;
export const Type = styled.div<Type>`
	background-color: ${(props) => props.color};
	border-radius: 0.7rem;
	width: 8rem;
	height: 1.8rem;
	font-size: 1rem;
	font-weight: 500;
	color: black;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	padding-bottom: 0.1rem;
`;
export const ParametersContainer = styled.div`
	height: 5rem;

	display: flex;
	justify-content: center;
	align-items: center;
`;
export const WeightContainer = styled.div`
	width: 8rem;
	flex: 1;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 0.4rem;
`;
export const HeightContainer = styled.div`
	width: 8rem;
	flex: 1;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 0.4rem;
`;
export const ParameterValue = styled.span`
	color: white;
	font-size: 1.3rem;
	font-weight: 500;
`;
export const ParameterName = styled.span`
	font-size: 0.8rem;
	font-weight: bold;
	color: grey;
`;
export const BottomInfo = styled.div`
	flex: 2;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
`;
export const BottomTitle = styled.h1`
	color: white;
	font-weight: normal;
	font-size: 1.5rem;
	margin-bottom: 1rem;
`;
export const StatContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 0.3rem;
	padding-bottom: 1rem;
`;
export const StatItem = styled.div`
	width: 100%;
	padding-left: 1rem;
	padding-right: 1rem;
	display: flex;
	gap: 0.5rem;
	justify-content: space-between;
`;
export const StatName = styled.span`
	color: gray;
	font-size: 1.2rem;
	font-weight: 500;
`;
export const StatValueContainer = styled.div`
	overflow: hidden;
	height: 1.2rem;
	width: 80%;
	border-radius: 1rem;
	background-color: white;
`;
export const StatValueBackground = styled.div<StatBackground>`
	background-color: ${(props) => props.color};
	width: ${(props) => props.statwidth}%;
	display: flex;
	justify-content: flex-end;
	padding-right: 0.4rem;
`;
export const StatValue = styled.span`
	color: white;
	font-size: 0.9rem;
`;
