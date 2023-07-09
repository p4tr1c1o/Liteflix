import React from 'react'
import styled from "styled-components"
import BotonSecundario from "../../components/BotonSecundario"
import Stack from "../../components/Stack"

function SectionDestacada() {
	return (
		<Container>
			<SubtituloPelicula>original de <strong>LITEFLIX</strong></SubtituloPelicula>
			<TituloPelicula>la casa de papel</TituloPelicula>

			<Stack >
				<BotonSecundario>Reproducir</BotonSecundario>
				<BotonSecundario>Mi Lista</BotonSecundario>
			</Stack>
		</Container>
	)
}

const Container = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem;
`

const TituloPelicula = styled.h1`
	color: ${({ theme }) => theme.colors.primary};
	text-align: center;
	font-size: 4.75rem;
	line-height: 4.84375rem;
	letter-spacing: 0.75rem;
	text-transform: uppercase;
`

const SubtituloPelicula = styled.h5`
	color: ${({ theme }) => theme.colors.white};
	text-align: center;
	font-size: 1.25rem;
	font-weight: 400;
	letter-spacing: 0.25rem;
`

export default SectionDestacada