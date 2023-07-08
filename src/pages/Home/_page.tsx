import React from 'react'
import PeliculaDestacada from "./PeliculasDestacada"
import PeliculasPopulares from "./PeliculasPopulares"
import StickyNavbar from "../../components/StickyNavbar"

function Home() {
	return (
		<main>
			<StickyNavbar />

			<PeliculaDestacada />

			<PeliculasPopulares />
		</main>
	)
}

export default Home

