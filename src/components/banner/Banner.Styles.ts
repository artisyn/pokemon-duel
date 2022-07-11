import styled from 'styled-components';

export const Container = styled.div`
	height: 60vh;
	width: 100%;
	position: relative;
`;
export const BackgroundImage = styled.img`
	max-height: 100%;
	width: 100%;
	object-fit: cover;
	object-position: center;
`;
export const BottomDimmer = styled.div`
	position: absolute;
	bottom: 0;
	height: 30%;
	width: 100%;
	background: linear-gradient(to top, #1e3829e0, #00000000);
`;
