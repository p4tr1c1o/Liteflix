import React from 'react'
import { styled } from "styled-components"
import CardPelicula from "./CardPelicula"
import SelectTipoListado from "./SelectTipoListado"
import { isDesktop } from "../../styles/Theme"

function SectionListado() {
	return (
		<Container>
			<SelectTipoListado />

			<CardPelicula />
			<CardPelicula />
			<CardPelicula />
			<CardPelicula />
		</Container >
	)
}

const Container = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 3rem;
	
	${isDesktop} {
		padding-top: 5rem;
		padding-right: 2rem;
	}
`

export default SectionListado