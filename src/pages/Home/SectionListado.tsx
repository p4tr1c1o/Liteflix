
import { styled } from "styled-components"
import CardPelicula from "./CardPelicula"
import SelectTipoListado from "./SelectTipoListado"
import { isDesktop } from "../../styles/Theme"
import Pelicula, { mapPeliculasPopulares } from "../../models/Pelicula"
import { useState } from "react"
import { useFetch } from "../../hooks/useFetch"


function SectionListado() {
	const [tipoListado, setTipoListado] = useState<"Populares" | "MisPeliculas">("Populares")
	const urlPopulares = "https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20"
	const urlMisPeliculas = "https://us-central1-liteflix-7359f.cloudfunctions.net/api/peliculas"
	const url = tipoListado == "Populares" ? urlPopulares : urlMisPeliculas
	const converter = tipoListado == "Populares" ? mapPeliculasPopulares : undefined


	const { data: peliculas } = useFetch<Pelicula[]>(url, undefined, converter)

	return (
		<Container>
			<SelectTipoListado setValue={setTipoListado} />

			{peliculas?.map((peli, index) =>
				<CardPelicula key={index + 1} pelicula={peli} />
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