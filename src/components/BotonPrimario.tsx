import { styled } from "styled-components"

const BotonPrimario = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.white};
	color: ${({ theme }) => theme.colors.black};
	padding-block: 1rem;
	margin-block: 0.5rem;
	min-width: 15.5rem;
	border: none;

	font-size: 1.125rem;
	line-height: normal;
	
	&:disabled{
		background-color: ${({ theme }) => theme.colors.grey};
	}

	svg {
		margin-right: 0.75rem;
	}
`

export default BotonPrimario