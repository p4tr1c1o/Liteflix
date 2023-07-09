import React from 'react'
import { styled } from "styled-components"
import Row from "../../components/Row"
import Stack from "../../components/Stack"
import CardPelicula from "./CardPelicula"

function SectionListado() {
	return (
		<Container>
			<Row>
				<label htmlFor="tipo-lista">Ver:</label>
				<select id="tipo-lista">
					<option>populares</option>
					<option>mis peliculas</option>
				</select>
			</Row>

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