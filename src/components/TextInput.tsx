
import { styled } from "styled-components"

function TextInput() {
	return (
		<StyledTextInput type="text" name="search" placeholder="TITULO" />
	)


}

const StyledTextInput = styled.input`
	background-color: transparent;
	color: ${({ theme }) => theme.colors.white};
	border: none;
	border-bottom: 1px solid ${({ theme }) => theme.colors.grey};;
	text-align: center;
	height: 3.5rem;
	max-width: 15.5rem;
	width: 100%;
	margin-bottom: 1.5rem;

	&:focus {
   		outline: none;
  	}
`

export default TextInput

