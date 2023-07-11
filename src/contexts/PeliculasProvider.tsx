import { createContext, useEffect, useState } from "react"
import Pelicula from "../models/Pelicula"

type ContextType = {
	destacada?: Pelicula,
	populares?: Pelicula[],
	misPeliculas?: Pelicula[],
	getMisPeliculas?: () => void
}

export const peliculasContext = createContext<ContextType | undefined>(undefined)


function PeliculasProvider({ children }) {
	const [values, setValues] = useState<ContextType | undefined>(undefined)


	useEffect(() => {
		const fetchDestacada = async () => {
			const result = (await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20"))

			const data = await result.json() as { results: Array<unknown> }
			if (data.results) {
				const { title, poster_path, release_date } = data.results[0] as Pelicula

				setValues({
					...values,
					destacada: new Pelicula({ title, poster_path, release_date })
				})
			}
		}
		void fetchDestacada()

		const fetchPopulares = async () => {
			const result = (await fetch("https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20"))
			const data = await result.json() as { results: Array<Pelicula> }

			if (data.results) {
				const populares = data.results.splice(0, 4).map(result =>
					new Pelicula({
						title: result.title,
						poster_path: result.poster_path,
						release_date: result.release_date
					}))
				console.log(populares);

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