import { createContext } from "react"
import Pelicula, { mapPeliculaDestacada } from "../models/Pelicula"
import { useGetQuery } from "../hooks/useFetch"

export const destacadaContext = createContext<Pelicula | undefined>(undefined)

function DestacadaProvider({ children }) {
	const urlDestacada = "https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20"
	const { data: peliculaDestacada, loading, error } = useGetQuery<Pelicula>(urlDestacada, mapPeliculaDestacada)

	return (
		<destacadaContext.Provider value={peliculaDestacada}>
			{children}
		</destacadaContext.Provider>
	)
}

export default DestacadaProvider