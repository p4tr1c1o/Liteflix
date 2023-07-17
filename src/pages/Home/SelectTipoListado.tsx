
import { styled } from "styled-components"
import Arrow from "../../assets/arrow.svg"
import { ChangeEvent } from "react"

type Props = {
	setValue: (value) => void
}

function SelectTipoListado({ setValue }: Props) {

	function handleChange(event: ChangeEvent<HTMLSelectElement>) {
		setValue(event.target.value)
	}

	return (
		<Container>
			<label htmlFor="tipo-lista">Ver: {"  "}</label>
			<StyledSelect id="tipo-lista" onChange={handleChange}>
				<option value={"Populares"}>populares</option>
				<option value={"MisPeliculas"}>mis peliculas</option>
			</StyledSelect>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	align-items: center;
	font-size: 1.125rem;
	
	width: 12.25rem;
	flex-shrink: 0;
	margin-bottom: 1.5rem;
`

const StyledSelect = styled.select`
	// Resets
	-moz-appearance: none; 
    -webkit-appearance: none;
	appearance: none;
	color: inherit;
	border: none;
	outline: none;

	font-size: 1.125rem;
	font-weight: 600;
	
	width: 100%;
	
	option {
		background-color: ${({ theme }) => theme.colors.background};
		color: ${({ theme }) => theme.colors.white};
	}

	/* &:option:checked {
		background: url(${Arrow}) no-repeat right;
		background-color: red;
	} */


	
	// Flecha
	z-index: 1;
	background: url(${Arrow}) no-repeat right;
	/* background-color: transparent; */
	background-color: ${({ theme }) => theme.colors.background};
	opacity: 0.8;

	// Remove dropdown arrow in IE10 & IE11
	// @link https://www.filamentgroup.com/lab/select-css.html
	&::-ms-expand {
	display: none;
	}

`

export default SelectTipoListado