import React, { useContext } from 'react'
import styled from "styled-components"
import { ReactComponent as PlusIcon } from "../assets/plus.svg";
import { layoutContext } from "../contexts/SidenavProvider";

function BotonAgregarPelicula() {
	const layout = useContext(layoutContext)


	const handleAgregarClick = () => {
		layout?.toggleDialog()
		if (layout?.isOpen)
			layout?.toggleSidenav()

	}

	return (
		<BotonAgregar onClick={handleAgregarClick}>
			<PlusIcon />
			AGREGAR PELICULA
		</BotonAgregar>)
}

const BotonAgregar = styled.button`
	cursor: pointer;
	display: flex;
	padding: 0;
	margin-top: 2rem;
	margin-bottom: 4rem;
	background-color: transparent;
	color: ${({ theme }) => theme.colors.white};	
	font-size: 1.125rem;
	font-weight: 700;
	
	border: none;

	svg {
		margin-right: 0.5rem;
	}
`
export default BotonAgregarPelicula