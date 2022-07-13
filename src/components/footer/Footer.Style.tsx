import styled from 'styled-components';

export const Container = styled.div`
	height: 40vh;
	position: relative;
	background-color: black;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const Decoration = styled.div`
	position: absolute;
	height: 10%;
	width: 100%;
	border-radius: 0% 0% 100% 0% / 0% 0% 100% 94%;
	background: #2f4129;

	top: 0;
	right: 0;
	z-index: 1;
`;

export const Title = styled.h2`
	color: white;
`;
