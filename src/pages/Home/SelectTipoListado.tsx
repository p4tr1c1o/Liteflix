import React from 'react'
import { styled } from "styled-components"
import Arrow from "../../assets/arrow.svg"

function SelectTipoListado() {
	return (
		<Container>
			<label htmlFor="tipo-lista">Ver: {"  "}</label>
			<StyledSelect id="tipo-lista">
				<option value={1}>populares</option>
				<option value={2}>mis peliculas</option>
			</StyledSelect>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	align-items: center;
	font-size: 1.125rem;
	letter-spacing: 0.25rem;
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
	letter-spacing: 0.25rem;
	width: 100%;
	
	/* &:option:checked {
		background: url(${Arrow}) no-repeat right;
		background-color: red;
	} */


	
	// Flecha
	z-index: 1;
	background: url(${Arrow}) no-repeat right;
	background-color: ${({ theme }) => theme.colors.background};

	// Remove dropdown arrow in IE10 & IE11
	// @link https://www.filamentgroup.com/lab/select-css.html
	&::-ms-expand {
	display: none;
	}

`

export default SelectTipoListado