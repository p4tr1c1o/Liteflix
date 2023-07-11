import React, { useContext } from 'react'
import SectionDestacada from "./SectionDestacada"
import SectionListado from "./SectionListado"
import { styled } from "styled-components"
import { isDesktop } from "../../styles/Theme"
import { imageBaseUrl, peliculasContext } from "../../contexts/PeliculasProvider"

function Home() {
	const peliculas = useContext(peliculasContext)
	const backdrop_path = peliculas?.destacada?.backdrop_path
	let srcDestacada: string | undefined

	if (backdrop_path) srcDestacada = `${imageBaseUrl}${backdrop_path}`


	const CartelDestacada = styled.div`
		position: absolute;
		top: 0;
		width: 100%;
		height: 35rem;
		background-image: 
			linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%), 
			url(${srcDestacada});
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		z-index: -100;

			
		${isDesktop} {
			position: fixed;
			height: 100%;
		}
	`

	return (
		<Container>
			<Content>
				<SectionDestacada />
				<SectionListado />
			</Content>
			{backdrop_path && <CartelDestacada />}
		</Container>
	)


}

const Container = styled.main`
`

const Content = styled.div`
	display: flex;
	flex-direction: column;	
	max-width: 1280px;
	margin-inline: auto;
	
	${isDesktop} {
		flex-direction: row;
	}
`

export default Home

