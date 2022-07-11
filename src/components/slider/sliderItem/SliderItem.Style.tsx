import styled from 'styled-components';

export const Container = styled.div`
	min-width: 70vw;
	height: 100%;
	border: 1px solid white;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
`;
export const PokemonImage = styled.img`
	position: absolute;
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center;
`;

export const Title = styled.h1`
	margin-top: 1rem;
	color: white;
	z-index: 2;
`;
export const Summary = styled.p`
	font-size: 1.2rem;
	margin-bottom: 1rem;
	color: white;
	z-index: 2;
`;
