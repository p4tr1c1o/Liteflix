

class Pelicula {
	title: string;
	backdrop_path: string;
	release_date: string;

	public constructor(init?: Partial<Pelicula>) {
		Object.assign(this, init)
	}
}

export function mapPeliculaDestacada(json: JSONResult) {
	const { title, backdrop_path, release_date } = json.results[0]

	return new Pelicula({
		title: title,
		backdrop_path: backdrop_path,
		release_date: release_date
	})
}

export function mapPeliculasPopulares(json: JSONResult) {
	const populares = json.results.splice(0, 4).map(result =>
		new Pelicula({
			title: result.title,
			backdrop_path: result.backdrop_path,
			release_date: result.release_date
		}))

	return populares
}

type JSONResult = {
	results: Pelicula[]
}

export default Pelicula