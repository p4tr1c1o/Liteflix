
import { styled } from "styled-components"
import CardPelicula from "./CardPelicula"
import SelectTipoListado from "./SelectTipoListado"
import { isDesktop } from "../../styles/Theme"
import { useFetch } from "../../hooks/useFetch"
import Pelicula, { mapPeliculasPopulares } from "../../models/Pelicula"
import { useState } from "react"


function SectionListado() {
	const urlPopulares = "https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20"
	const urlMisPeliculas = "https://us-central1-liteflix-7359f.cloudfunctions.net/api/peliculas"
	const { data: peliculasPopulares } = useFetch<Pelicula[]>(urlPopulares, mapPeliculasPopulares)
	const { data: misPeliculas } = useFetch<Pelicula[]>(urlMisPeliculas)
	const [tipoListado, setTipoListado] = useState("Populares")

	return (
		<Container>
			<SelectTipoListado setValue={setTipoListado} />

			{tipoListado == "Populares" && peliculasPopulares?.map(peli =>
				<CardPelicula key={peli.title} pelicula={peli} />
			)}

			{tipoListado == "MisPeliculas" && misPeliculas?.map(peli =>
				<CardPelicula key={peli.title} pelicula={peli} />
			)}
		</Container >
	)
}

const Container = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 3rem;
	
	${isDesktop} {
		padding-right: 2rem;
	}
`

export default SectionListado