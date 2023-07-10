import React from 'react'
import { styled } from "styled-components"
import Row from "../../components/Row"
import Stack from "../../components/Stack"
import CardPelicula from "./CardPelicula"
import SelectTipoListado from "./SelectTipoListado"

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
`

export default SectionListado