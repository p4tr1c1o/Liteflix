import React from 'react'
import { styled } from "styled-components"
import CardPelicula from "./CardPelicula"
import SelectTipoListado from "./SelectTipoListado"
import { isDesktop } from "../../styles/Theme"
import { useGetQuery } from "../../hooks/useFetch"
import Pelicula, { mapPeliculasPopulares } from "../../models/Pelicula"


function SectionListado() {
	const urlPopulares = "https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20"
	const { data: peliculasPopulares } = useGetQuery<Pelicula[]>(urlPopulares, mapPeliculasPopulares)

	return (
		<Container>
			<SelectTipoListado />
			{peliculasPopulares?.map(pelicula => <CardPelicula key={pelicula.title} />)}
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