import { useContext } from 'react'
import styled from "styled-components"
import { destacadaContext } from "../../contexts/DestacadaProvider"
import { isDesktop } from "../../styles/Theme"

function CartelDestacada() {
	let srcDestacada: string | undefined
	const destacada = useContext(destacadaContext)

	if (destacada?.backdrop_path) srcDestacada = `https://image.tmdb.org/t/p/original${destacada?.backdrop_path}`


	const CartelDestacada = styled.div`
	   position: absolute;
	   top: 0;
	   width: 100%;
	   height: 35rem;
	   background-image: 
		   linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%), 
		   url(${srcDestacada});
	   background-repeat: no-repeat;
	   background-size: cover;
	   background-position: center;
	   z-index: -100;

		   
	   ${isDesktop} {
		   position: fixed;
		   height: 100%;
	   }
   `

	return (
		<>
			{destacada && <CartelDestacada />}
		</>
	)
}

export default CartelDestacada