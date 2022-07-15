import styled from 'styled-components';
import { motion } from 'framer-motion';

interface TitleProps {
	bcolor: string;
}

export const Container = styled.div<TitleProps>`
	border: 2px solid grey;
	border-radius: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	padding: 0 1rem 1rem 1rem;
	background-color: ${(props) => props.bcolor};
`;
export const Title = styled.h1<TitleProps>`
	width: 100%;
	color: ${(props) => props.bcolor};
	padding: 1rem;
	margin: 0;
`;
export const Wrapper = styled.div`
	width: 100%;
	overflow: hidden;
`;

export const AllPokemonsContainer = styled(motion.div)`
	display: flex;
	gap: 1rem;
	align-items: center;
	justify-content: flex-start;
	cursor: grab;
	width: fit-content;
	&:active {
		cursor: grabbing;
	}
`;
