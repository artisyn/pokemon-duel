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
	@media only screen and (max-width: 700px) {
		padding: 0.5rem;
	}
`;
export const LogoContainer = styled.div`
	width: 5rem;
	height: 4rem;
	display: flex;
	align-items: center;
	justify-content: center;
	@media only screen and (max-width: 700px) {
		width: 2.5rem;
		height: 2rem;
	}
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

	width: 100%;
	height: 100%;
	color: white;
	font-size: 1.3rem;
	font-weight: bold;
	@media only screen and (max-width: 700px) {
		font-size: 1rem;
		font-weight: 500;
	}
`;

export const NavItem = styled.div`
	transition: all ease 0.4s;
	cursor: pointer;
	&:hover {
		color: #cc354b;
	}
`;
