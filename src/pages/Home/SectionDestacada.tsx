import React, { useContext } from 'react'
import styled from "styled-components"
import BotonSecundario from "../../components/BotonSecundario"
import { isDesktop } from "../../styles/Theme"
import { destacadaContext } from "../../contexts/DestacadaProvider.tsx"

function SectionDestacada() {
	const destacada = useContext(destacadaContext)

	return (
		<Container>
			{destacada &&
				<>
					<SubtituloPelicula>original de <strong>LITEFLIX</strong></SubtituloPelicula>
					<TituloPelicula>{destacada?.title}</TituloPelicula>

					<Actions >
						<BotonSecundario>Reproducir</BotonSecundario>
						<BotonSecundario>Mi Lista</BotonSecundario>
					</Actions>
				</>
			}
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

	${isDesktop} {
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
	
	margin-top: 16.5rem;

		
	${isDesktop} {
		margin-top: 30rem;
    }
`

const Actions = styled.div`
	display: flex;
	flex-direction: column;



	${isDesktop} {
		flex-direction: row;

		button {
			margin-right: 1rem;
		}
	}
`

export default SectionDestacada