import { createContext, useEffect, useState } from "react"
import Pelicula from "../models/Pelicula"

type ContextType = {
	destacada?: Pelicula,
	populares?: Pelicula[],
	misPeliculas?: Pelicula[],
	getMisPeliculas?: () => void
}

export const peliculasContext = createContext<ContextType | undefined>(undefined)
export const imageBaseUrl = "https://image.tmdb.org/t/p/original"

function PeliculasProvider({ children }) {
	const [values, setValues] = useState<ContextType | undefined>(undefined)


	useEffect(() => {
		const fetchDestacada = async () => {
			const result = (await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20"))
			const data = await result.json() as { results: Array<Pelicula> }

			if (data.results) {
				const { title, backdrop_path, release_date } = data.results[0]

				setValues({
					...values,
					destacada: new Pelicula({ title, backdrop_path, release_date })
				})
			}
		}
		void fetchDestacada()

		const fetchPopulares = async () => {
			const result = (await fetch("https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20"))
			const data = await result.json() as { results: Array<Pelicula> }

			if (data.results.length >= 4) {
				const populares = data.results.splice(0, 4).map(result =>
					new Pelicula({
						title: result.title,
						backdrop_path: result.backdrop_path,
						release_date: result.release_date
					}))
				// console.log(populares);

				return populares
			}
		}
		void fetchPopulares()


		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])


	return (
		<peliculasContext.Provider value={values}>
			{children}
		</peliculasContext.Provider>
	)
}

export default PeliculasProvider