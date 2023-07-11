class Pelicula {
	title: string;
	backdrop_path: string;
	// backdrop_path: string;
	release_date: string;

	public constructor(init?: Partial<Pelicula>) {
		Object.assign(this, init)
	}
}

export default Pelicula