import React from 'react'
import styled from "styled-components"
import BotonSecundario from "../../components/BotonSecundario"
import { laptop } from "../../styles/Theme"

function SectionDestacada() {
	return (
		<Container>
			<SubtituloPelicula>original de <strong>LITEFLIX</strong></SubtituloPelicula>
			<TituloPelicula>la casa de papel</TituloPelicula>

			<Actions >
				<BotonSecundario>Reproducir</BotonSecundario>
				<BotonSecundario>Mi Lista</BotonSecundario>
			</Actions>
		</Container>
	)
}

const Container = styled.section`
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: center;
	justify-content: flex-end;
	padding-inline: 2rem;

	${laptop} {
		align-items: flex-start;
		justify-content: flex-start;
    }
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
	margin-top: 16.5rem;

		
	${laptop} {
		margin-top: 36rem;
    }
`

const Actions = styled.div`
	display: flex;
	flex-direction: column;

	${laptop} {
		flex-direction: row;
	}
`

export default SectionDestacada