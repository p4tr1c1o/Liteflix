import { createContext, useEffect, useState } from "react"
import Pelicula, { mapPeliculaDestacada } from "../models/Pelicula"
import { useGetQuery } from "../hooks/useFetch"



export const destacadaContext = createContext<Pelicula | undefined>(undefined)
export const imageBaseUrl = "https://image.tmdb.org/t/p/original"

function DestacadaProvider({ children }) {
	const urlDestacada = "https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20"
	const { data: peliculaDestacada, loading, error } = useGetQuery<Pelicula>(urlDestacada, mapPeliculaDestacada)

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const result = (await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20"))
	// 		const data = await result.json() as { results: Array<Pelicula> }

	// 		if (data.results) {
	// 			const { title, backdrop_path, release_date } = data.results[0]

	// 			setValues(new Pelicula({ title, backdrop_path, release_date }))
	// 		}
	// 	}
	// 	void fetchData()

	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [])


	return (
		<destacadaContext.Provider value={peliculaDestacada}>
			{children}
		</destacadaContext.Provider>
	)
}

export default DestacadaProvider