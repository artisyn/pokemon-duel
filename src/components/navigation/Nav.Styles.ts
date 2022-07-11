import styled from 'styled-components';

export const Container = styled.div`
	height: 6rem;
	padding: 1rem;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.8);
	position: fixed;
	top: 0;
	display: flex;
	align-items: center;
	z-index: 1000;
`;
export const LogoContainer = styled.div`
	border: 1px solid white;
	width: 5rem;
	height: 4rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const PokeballImg = styled.img`
	max-height: 100%;
	object-fit: cover;
	object-position: center;
`;
export const NavigationContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	gap: 1rem;
	border: 1px solid white;
	width: 100%;
	height: 100%;
	color: white;
	font-size: 1.3rem;
	font-weight: bold;
`;

export const NavItem = styled.div`
	cursor: pointer;
`;
