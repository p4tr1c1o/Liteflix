import Pelicula from "../models/Pelicula"

type JSONResponse = {
	results: Array<Pelicula>
}

async function getPeliculaDestacada() {
	try {
		// let peliculaDestacada: Pelicula | undefined
		const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20")

		const data: JSONResponse = await response.json() as JSONResponse
		const { title, backdrop_path: poster_path, release_date } = data.results[0]

		return new Pelicula({
			title,
			backdrop_path: poster_path,
			release_date
		})


	} catch (error) {
		console.log(error)
	}
}

export default getPeliculaDestacada