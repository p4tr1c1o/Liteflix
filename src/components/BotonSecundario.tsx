import { styled } from "styled-components"

const BotonSecundario = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.background};
	color: ${({ theme }) => theme.colors.white};
	padding-block: 1rem;
	margin-block: 0.75rem;
	min-width: 15.5rem;
	border: none;

	font-size: 1.125rem;
	line-height: normal;
	
	svg {
		margin-right: 0.75rem;
	}
`

export default BotonSecundario