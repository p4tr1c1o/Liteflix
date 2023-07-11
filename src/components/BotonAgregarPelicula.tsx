import React from 'react'
import styled from "styled-components"
import { ReactComponent as PlusIcon } from "../assets/plus.svg";

function BotonAgregarPelicula() {

	const handleAgregarClick = () => {
		return
	}

	return (
		<BotonAgregar onClick={handleAgregarClick}>
			<PlusIcon />
			AGREGAR PELICULA
		</BotonAgregar>)
}

const BotonAgregar = styled.button`
	display: flex;
	padding: 0;
	margin-top: 2rem;
	margin-bottom: 4rem;
	background-color: ${({ theme }) => theme.colors.background};
	color: ${({ theme }) => theme.colors.white};	
	font-size: 1rem;
	font-weight: 700;
	
	border: none;

	svg {
		margin-right: 0.5rem;
	}
`
export default BotonAgregarPelicula