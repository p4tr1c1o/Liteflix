import { styled } from "styled-components";

type Props = {
	maxWidth?: number
}


const Stack = styled.div<Props>`
	display: flex;
	flex-direction: column;
	max-width: ${(props) => props.maxWidth} 
`

export default Stack