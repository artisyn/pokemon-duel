import styled from 'styled-components';
import { motion } from 'framer-motion';

interface ContainerProps {
	bcolor: string;
}
interface TypeCircleProps {
	bcolor: string;
}

export const Wrapper = styled.div`
	min-width: 20vw;
	max-width: 20vw;
	height: 30vw;
	@media only screen and (max-width: 1000px) {
		min-width: 10rem;
		max-width: 10rem;
		height: 15rem;
	}
`;

export const Container = styled(motion.div)<ContainerProps>`
	min-width: 20vw;
	max-width: 20vw;
	height: 27vw;
	border: 2px solid ${(props) => props.bcolor};
	border-radius: 0.5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	padding: 0.5rem;
	position: relative;
	background-color: #282828;
	gap: 0.5rem;

	@media only screen and (max-width: 1000px) {
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
	color: white;
	@media only screen and (max-width: 1000px) {
		font-size: 0.7rem;
	}
`;
export const TypeTitle = styled.span`
	color: grey;
	margin-right: 0.4rem;
	@media only screen and (max-width: 1000px) {
		font-size: 0.7rem;
	}
`;
export const Separator = styled.span`
	margin-left: 0.3rem;
	margin-right: 0.3rem;
	color: white;
`;
