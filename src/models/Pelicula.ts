class Pelicula {
	title: string;
	poster_path: string;
	release_date: string;
	// title	"Knights of the Zodiac"
	// original_title	"Knights of the Zodiac"
	// poster_path	"/qW4crfED8mpNDadSmMdi7ZDzhXF.jpg"
	// backdrop_path	"/oqP1qEZccq5AD9TVTIaO6IGUj7o.jpg"
	// release_date	"2023-04-27"

	public constructor(init?: Partial<Pelicula>) {
		Object.assign(this, init)
	}
}

export default Pelicula